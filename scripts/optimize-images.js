/* eslint-disable @typescript-eslint/no-var-requires */
const sharp = require('sharp')
const path = require('path')
const fs = require('fs')

const TASKS = [
  {
    src: 'public/images/_originals/hero-clinica-marketing.png',
    dest: 'public/images/hero-clinica-marketing.jpg',
    width: 1920,
    format: 'jpeg',
    options: { quality: 82, mozjpeg: true, chromaSubsampling: '4:2:0' },
  },
  {
    src: 'public/images/_originals/blog-diseno-web-clinicas-real.jpg',
    dest: 'public/images/blog-diseno-web-clinicas-real.jpg',
    width: 1600,
    format: 'jpeg',
    options: { quality: 78, mozjpeg: true },
  },
  {
    src: 'public/images/_originals/blog-google-ads-psicologos-real.jpg',
    dest: 'public/images/blog-google-ads-psicologos-real.jpg',
    width: 1600,
    format: 'jpeg',
    options: { quality: 78, mozjpeg: true },
  },
  {
    src: 'public/images/_originals/blog-seo-dental-real.jpg',
    dest: 'public/images/blog-seo-dental-real.jpg',
    width: 1600,
    format: 'jpeg',
    options: { quality: 78, mozjpeg: true },
  },
]

async function run() {
  for (const task of TASKS) {
    const before = fs.statSync(task.src).size
    let pipeline = sharp(task.src).resize({ width: task.width, withoutEnlargement: true })
    pipeline = task.format === 'jpeg' ? pipeline.jpeg(task.options) : pipeline.toFormat(task.format, task.options)
    await pipeline.toFile(task.dest)
    const after = fs.statSync(task.dest).size
    const beforeKb = (before / 1024).toFixed(1)
    const afterKb = (after / 1024).toFixed(1)
    const pct = (((before - after) / before) * 100).toFixed(1)
    console.log(`OK ${path.basename(task.dest)}: ${beforeKb} KB -> ${afterKb} KB (-${pct}%)`)
  }
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
