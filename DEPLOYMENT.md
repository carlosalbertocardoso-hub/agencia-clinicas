# Guía de Deployment — Pacientes Sevilla

## 1. Preparar GitHub

```bash
# Inicializar repositorio (si no lo está)
git init

# Agregar remote (reemplaza con tu URL)
git remote add origin https://github.com/tu-usuario/pacientes-sevilla.git

# Pushear código
git branch -M main
git push -u origin main
```

## 2. Crear proyecto en Vercel

1. Accede a [vercel.com](https://vercel.com)
2. Click en **"Add New..." → "Project"**
3. Selecciona **"Import Git Repository"**
4. Busca `pacientes-sevilla` en GitHub
5. Click en **"Import"**

## 3. Configurar variables de entorno en Vercel

En la pantalla de configuración del proyecto:

1. Abre **"Environment Variables"**
2. Agrega las siguientes variables:

| Variable | Valor |
|----------|-------|
| `RESEND_API_KEY` | Tu API key de Resend (obtén en [resend.com](https://resend.com)) |
| `RESEND_FROM_EMAIL` | Remitente verificado en Resend, por ejemplo `Pacientes Sevilla <hola@tudominio.com>` |
| `CONTACT_TO_EMAIL` | Email donde quieres recibir las consultas, por ejemplo `ccardoso19@hotmail.com` |
| `NEXT_PUBLIC_SITE_URL` | `https://pacientessevilla.com` |

**Importante:** RESEND_API_KEY no debe empezar con `NEXT_PUBLIC_` para que sea privada (solo servidor).
**Importante:** RESEND_FROM_EMAIL debe usar un dominio o remitente verificado en Resend. Si el remitente no está verificado, Resend rechazará el envío.

## 4. Configurar dominio

1. En Vercel, abre **"Settings → Domains"**
2. Agrega `pacientessevilla.com`
3. Vercel te dará DNS records para configurar en tu registrador
4. Actualiza los DNS en tu registrador (Namecheap, GoDaddy, etc.)

Espera 24-48h para que se propague.

## 5. Probar deployment

Una vez deployado:

- [ ] Visita https://pacientessevilla.com
- [ ] Prueba el formulario de contacto (enviará email via Resend)
- [ ] Verifica que los logos y OpenGraph images cargan
- [ ] Prueba navegación entre páginas

## 6. Monitoreo post-launch

- **Vercel Dashboard:** Monitorea builds, logs, Core Web Vitals
- **Resend Console:** Verifica emails enviados/fallidos
- **Google Search Console:** Monitorea indexación y errores de rastreo

## Troubleshooting

**Error: "RESEND_API_KEY not found"**
- Verifica que la variable está en Vercel (Settings → Environment Variables)
- Asegúrate de que no está encriptada accidentalmente
- Redeploy el proyecto

**Email no se envía**
- Comprueba que RESEND_API_KEY es válido en [resend.com](https://resend.com)
- Comprueba que RESEND_FROM_EMAIL existe en Vercel y pertenece a un dominio/remitente verificado en Resend
- Comprueba que CONTACT_TO_EMAIL apunta al email correcto
- Revisa Vercel logs (Deployments → Ver detalles)
- Resend Console para ver intentos fallidos

**DNS no se propaga**
- Espera 24-48h
- Verifica que agregaste los records correctamente
- Usa [mxtoolbox.com](https://mxtoolbox.com) para verificar DNS

## Comandos útiles

```bash
# Build local
npm run build

# Start producción local
npm run start

# Deploy manual (si lo necesitas)
# Desde Vercel Dashboard: Settings → Deployments → Redeploy
```

---

**Contacto del proyecto:** Carlos Cardoso — ccardoso19@hotmail.com
