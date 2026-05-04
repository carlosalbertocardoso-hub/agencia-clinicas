const { chromium } = require('playwright')
const fs = require('fs')
const path = require('path')

const baseUrl = process.env.QA_BASE_URL || 'http://localhost:3000'
const reportPath = path.join(process.cwd(), 'qa-screenshots', 'interactive', 'report.json')

const requiredRoutes = [
  '/',
  '/contacto',
  '/blog',
  '/blog/errores-seo-dentistas',
  '/blog/google-ads-psicologos',
  '/blog/diseno-web-clinicas',
  '/servicios',
  '/servicios/seo-medico',
  '/servicios/google-ads',
  '/servicios/diseno-web',
  '/servicios/redes-sociales',
  '/especialidades',
  '/especialidades/clinicas-dentales-sevilla',
  '/especialidades/psicologos-sevilla',
  '/especialidades/medicina-estetica-sevilla',
  '/especialidades/fisioterapia-sevilla',
  '/especialidades/nutricionistas-sevilla',
  '/especialidades/pediatria-sevilla',
  '/especialidades/clinicas-cirugia-sevilla',
  '/recursos',
  '/nosotros',
  '/casos-de-exito',
  '/politica-privacidad',
  '/terminos-legales',
]

const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile', width: 390, height: 844 },
]

async function testDropdown(page, buttonIndex, label, expectedLinkPattern, failures) {
  const button = page.locator('header nav button').nth(buttonIndex)
  const buttonBox = await button.boundingBox()
  if (!buttonBox) {
    failures.push(`${label}: botón no visible`)
    return
  }

  await button.hover()
  await page.waitForTimeout(120)

  const target = page.getByRole('link', { name: expectedLinkPattern }).first()
  const targetBox = await target.boundingBox()
  if (!targetBox) {
    failures.push(`${label}: enlace esperado no visible`)
    return
  }

  await page.mouse.move(buttonBox.x + buttonBox.width / 2, buttonBox.y + buttonBox.height / 2)
  await page.waitForTimeout(40)
  await page.mouse.move(buttonBox.x + buttonBox.width / 2, buttonBox.y + buttonBox.height + 8)
  await page.waitForTimeout(40)
  await page.mouse.move(targetBox.x + 18, targetBox.y + targetBox.height / 2)
  await page.waitForTimeout(160)

  if (!(await target.isVisible())) {
    failures.push(`${label}: el desplegable se cierra al mover el ratón`)
  }
}

async function testDropdownSlowBridge(page, buttonIndex, label, expectedLinkPattern, failures) {
  const button = page.locator('header nav button').nth(buttonIndex)
  const buttonBox = await button.boundingBox()
  if (!buttonBox) {
    failures.push(`${label}: botón no visible en prueba lenta`)
    return
  }

  await button.hover()
  await page.waitForTimeout(120)

  const target = page.getByRole('link', { name: expectedLinkPattern }).first()
  const targetBox = await target.boundingBox()
  if (!targetBox) {
    failures.push(`${label}: enlace esperado no visible en prueba lenta`)
    return
  }

  await page.mouse.move(buttonBox.x + buttonBox.width / 2, buttonBox.y + buttonBox.height + 8)
  await page.waitForTimeout(260)
  if (!(await target.isVisible())) {
    failures.push(`${label}: el desplegable se cierra al pausar entre botón y panel`)
    return
  }

  await page.mouse.move(targetBox.x + 18, targetBox.y + targetBox.height / 2)
  await page.waitForTimeout(160)
  if (!(await target.isVisible())) {
    failures.push(`${label}: el desplegable se cierra tras entrar al panel`)
  }
}

async function testDropdownClick(page, buttonIndex, label, expectedLinkPattern, failures) {
  const button = page.locator('header nav button').nth(buttonIndex)
  if (!(await button.count())) {
    failures.push(`${label}: botón no encontrado para click`)
    return
  }

  await button.click()
  await page.waitForTimeout(180)

  const target = page.getByRole('link', { name: expectedLinkPattern }).first()
  if (!(await target.isVisible())) {
    failures.push(`${label}: el desplegable no permanece abierto tras clicar`)
  }
}

async function main() {
  const failures = []
  const browser = await chromium.launch({ headless: true })

  for (const viewport of viewports) {
    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
    })
    const page = await context.newPage()

    for (const route of requiredRoutes) {
      const consoleErrors = []
      page.removeAllListeners('console')
      page.on('console', (msg) => {
        if (msg.type() === 'error' && !msg.text().includes('data:image/svg+xml')) {
          consoleErrors.push(msg.text())
        }
      })

      const response = await page.goto(baseUrl + route, {
        waitUntil: 'networkidle',
        timeout: 30000,
      }).catch(() => null)

      if (!response) {
        failures.push(`${viewport.name} ${route}: no carga`)
        continue
      }

      if (response.status() >= 400) {
        failures.push(`${viewport.name} ${route}: HTTP ${response.status()}`)
      }

      const data = await page.evaluate(() => {
        const body = document.body.innerText || ''
        const badCodes = new Set([0x00c3, 0x00c2, 0x00e2, 0xfffd])

        return {
          title: document.title,
          meta: document.querySelector('meta[name="description"]')?.getAttribute('content') || '',
          h1Count: document.querySelectorAll('h1').length,
          overflow: document.documentElement.scrollWidth > window.innerWidth + 1,
          brokenImages: Array.from(document.images).filter((img) => !img.complete || img.naturalWidth === 0).length,
          missingAlt: Array.from(document.images).filter((img) => img.getAttribute('alt') === null).length,
          placeholderLinks: document.querySelectorAll('a[href="#"]').length,
          placeholderPhone: body.includes('+34 600 00 00 00'),
          badText: Array.from(body).some((ch) => badCodes.has(ch.charCodeAt(0))),
        }
      })

      if (!data.title || data.title.length < 10) failures.push(`${viewport.name} ${route}: title débil/vacío`)
      if (!data.meta || data.meta.length < 50) failures.push(`${viewport.name} ${route}: meta description débil/vacía`)
      if (data.h1Count !== 1) failures.push(`${viewport.name} ${route}: ${data.h1Count} H1`)
      if (data.overflow) failures.push(`${viewport.name} ${route}: scroll horizontal`)
      if (data.brokenImages) failures.push(`${viewport.name} ${route}: imágenes rotas (${data.brokenImages})`)
      if (data.missingAlt) failures.push(`${viewport.name} ${route}: imágenes sin alt (${data.missingAlt})`)
      if (data.placeholderLinks) failures.push(`${viewport.name} ${route}: enlaces placeholder (${data.placeholderLinks})`)
      if (data.placeholderPhone) failures.push(`${viewport.name} ${route}: teléfono placeholder visible`)
      if (data.badText) failures.push(`${viewport.name} ${route}: posible mojibake`)
      if (consoleErrors.length) {
        failures.push(`${viewport.name} ${route}: console errors ${consoleErrors.slice(0, 2).join(' | ')}`)
      }
    }

    await context.close()
  }

  const desktopPage = await browser.newPage({ viewport: { width: 1440, height: 900 } })
  await desktopPage.goto(baseUrl + '/', { waitUntil: 'networkidle' })
  await testDropdown(desktopPage, 0, 'Servicios', /SEO local sanitario/, failures)
  await testDropdown(desktopPage, 1, 'A quién ayudamos', /Cl.nicas dentales/, failures)
  await testDropdownSlowBridge(desktopPage, 0, 'Servicios', /SEO local sanitario/, failures)
  await testDropdownSlowBridge(desktopPage, 1, 'A quién ayudamos', /Cl.nicas dentales/, failures)
  await testDropdownClick(desktopPage, 0, 'Servicios', /SEO local sanitario/, failures)
  await testDropdownClick(desktopPage, 1, 'A quién ayudamos', /Cl.nicas dentales/, failures)
  await desktopPage.close()

  const mobilePage = await browser.newPage({ viewport: { width: 390, height: 844 } })
  await mobilePage.goto(baseUrl + '/', { waitUntil: 'networkidle' })
  const open = mobilePage.getByLabel(/Abrir men/)
  if (!(await open.count())) {
    failures.push('mobile: no existe botón abrir menú')
  } else {
    await open.click()
    await mobilePage.waitForTimeout(150)
    if (!(await mobilePage.getByLabel(/Cerrar men/).count())) failures.push('mobile: no cambia a cerrar menú')

    for (const href of ['/', '/servicios', '/especialidades', '/contacto']) {
      if (!(await mobilePage.locator(`#mobile-navigation a[href="${href}"]`).count())) {
        failures.push(`mobile: falta enlace ${href}`)
      }
    }

    await mobilePage.locator('#mobile-navigation a[href="/servicios"]').click()
    await mobilePage.waitForURL('**/servicios', { timeout: 10000 }).catch(() => {
      failures.push('mobile: click Servicios no navega')
    })
  }
  await mobilePage.close()

  const contactPage = await browser.newPage({ viewport: { width: 1440, height: 900 } })
  await contactPage.goto(baseUrl + '/contacto', { waitUntil: 'networkidle' })
  const submit = contactPage.locator('form button[type="submit"]').first()
  if (!(await submit.count())) {
    failures.push('form: no hay botón submit')
  } else {
    await submit.click()
    if (!contactPage.url().endsWith('/contacto')) failures.push('form: submit vacío navega fuera de contacto')
  }

  await contactPage.locator('#nombre').fill('QA Test')
  await contactPage.locator('#email').fill('qa@example.com')
  await contactPage.locator('#telefono').fill('+34 600 11 22 33')
  await contactPage.locator('#clinica').fill('Clínica QA')
  await contactPage.locator('#mensaje').fill('Prueba de campos sin enviar email real.')
  const valuesOk = await contactPage.evaluate(() => {
    return document.querySelector('#nombre')?.value === 'QA Test'
      && document.querySelector('#email')?.value === 'qa@example.com'
  })
  if (!valuesOk) failures.push('form: los campos no aceptan escritura')
  await contactPage.close()

  const linkPage = await browser.newPage({ viewport: { width: 1440, height: 900 } })
  await linkPage.goto(baseUrl + '/', { waitUntil: 'networkidle' })
  const hrefs = await linkPage.evaluate(() => {
    return Array.from(document.querySelectorAll('a[href^="/"]'))
      .map((a) => a.getAttribute('href'))
      .filter(Boolean)
  })
  const uniqueHrefs = [...new Set(hrefs)].filter((href) => !href.startsWith('/_next'))
  for (const href of uniqueHrefs) {
    const response = await linkPage.goto(baseUrl + href, {
      waitUntil: 'domcontentloaded',
      timeout: 15000,
    }).catch(() => null)
    if (!response || response.status() >= 400) {
      failures.push(`link interno desde home falla: ${href} (${response ? response.status() : 'sin respuesta'})`)
    }
  }
  await linkPage.close()

  await browser.close()

  const report = {
    checkedAt: new Date().toISOString(),
    baseUrl,
    totalFailures: failures.length,
    failures,
  }

  fs.mkdirSync(path.dirname(reportPath), { recursive: true })
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2))
  console.log(JSON.stringify(report, null, 2))

  if (failures.length) process.exit(1)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
