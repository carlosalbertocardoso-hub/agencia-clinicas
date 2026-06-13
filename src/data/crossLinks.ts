// Cross-linking between blog posts, services and specialties
// Used to enrich internal navigation for AI crawlers and users

export interface CrossLink {
  href: string
  label: string
}

export const blogRelatedServices: Record<string, CrossLink[]> = {
  'errores-seo-dentistas': [
    { href: '/blog/seo-para-clinicas-guia', label: 'Guía de SEO para clínicas' },
    { href: '/servicios/seo-medico', label: 'SEO médico para clínicas' },
    { href: '/especialidades/clinicas-dentales-sevilla', label: 'Marketing para clínicas dentales' },
    { href: '/servicios/diseno-web', label: 'Diseño web sanitario' },
  ],
  'google-ads-psicologos': [
    { href: '/blog/seo-para-clinicas-guia', label: 'Guía de SEO para clínicas' },
    { href: '/servicios/google-ads', label: 'Google Ads para clínicas' },
    { href: '/especialidades/psicologos-sevilla', label: 'Marketing para psicólogos' },
    { href: '/servicios/seo-medico', label: 'SEO médico para clínicas' },
  ],
  'diseno-web-clinicas': [
    { href: '/blog/seo-para-clinicas-guia', label: 'Guía de SEO para clínicas' },
    { href: '/servicios/diseno-web', label: 'Diseño web sanitario' },
    { href: '/servicios/seo-medico', label: 'SEO médico para clínicas' },
    { href: '/blog/errores-seo-dentistas', label: 'Errores SEO en clínicas dentales' },
  ],
  'seo-para-clinicas-guia': [
    { href: '/servicios/seo-medico', label: 'SEO médico para clínicas' },
    { href: '/servicios/google-ads', label: 'Google Ads para clínicas' },
    { href: '/servicios/diseno-web', label: 'Diseño web sanitario' },
    { href: '/blog/seo-vs-google-ads-clinicas', label: 'SEO vs Google Ads para clínicas' },
    { href: '/blog/cuanto-cuesta-marketing-clinica', label: 'Cuánto cuesta el marketing de una clínica' },
    { href: '/blog/errores-seo-dentistas', label: 'Errores SEO en clínicas dentales' },
  ],
  'seo-vs-google-ads-clinicas': [
    { href: '/servicios/seo-medico', label: 'SEO médico para clínicas' },
    { href: '/servicios/google-ads', label: 'Google Ads para clínicas' },
    { href: '/blog/seo-para-clinicas-guia', label: 'Guía de SEO para clínicas' },
    { href: '/blog/cuanto-cuesta-marketing-clinica', label: 'Cuánto cuesta el marketing de una clínica' },
    { href: '/especialidades/clinicas-dentales-sevilla', label: 'Marketing para clínicas dentales' },
  ],
  'cuanto-cuesta-marketing-clinica': [
    { href: '/servicios/marketing-para-clinicas', label: 'Marketing para clínicas' },
    { href: '/servicios/seo-medico', label: 'SEO médico para clínicas' },
    { href: '/servicios/google-ads', label: 'Google Ads para clínicas' },
    { href: '/blog/seo-para-clinicas-guia', label: 'Guía de SEO para clínicas' },
    { href: '/blog/seo-vs-google-ads-clinicas', label: 'SEO vs Google Ads para clínicas' },
  ],
  'google-business-profile-clinicas': [
    { href: '/blog/seo-para-clinicas-guia', label: 'Guía de SEO para clínicas' },
    { href: '/blog/conseguir-resenas-google-clinica', label: 'Cómo conseguir reseñas en Google' },
    { href: '/servicios/seo-medico', label: 'SEO médico para clínicas' },
    { href: '/servicios/marketing-para-clinicas', label: 'Marketing para clínicas' },
  ],
  'lopd-marketing-sanitario': [
    { href: '/servicios/marketing-para-clinicas', label: 'Marketing para clínicas' },
    { href: '/blog/captacion-pacientes-privados', label: 'Captación de pacientes privados' },
    { href: '/servicios/diseno-web', label: 'Diseño web sanitario' },
  ],
  'captacion-pacientes-privados': [
    { href: '/blog/seo-para-clinicas-guia', label: 'Guía de SEO para clínicas' },
    { href: '/blog/seo-vs-google-ads-clinicas', label: 'SEO vs Google Ads para clínicas' },
    { href: '/blog/cuanto-cuesta-marketing-clinica', label: 'Cuánto cuesta el marketing' },
    { href: '/servicios/marketing-para-clinicas', label: 'Marketing para clínicas' },
    { href: '/blog/google-business-profile-clinicas', label: 'Google Business Profile para clínicas' },
  ],
  'medir-roi-marketing-clinica': [
    { href: '/blog/captacion-pacientes-privados', label: 'Captación de pacientes privados' },
    { href: '/blog/cuanto-cuesta-marketing-clinica', label: 'Cuánto cuesta el marketing' },
    { href: '/servicios/google-ads', label: 'Google Ads para clínicas' },
    { href: '/servicios/seo-medico', label: 'SEO médico para clínicas' },
  ],
  'landing-pages-clinicas': [
    { href: '/servicios/diseno-web', label: 'Diseño web sanitario' },
    { href: '/servicios/google-ads', label: 'Google Ads para clínicas' },
    { href: '/blog/captacion-pacientes-privados', label: 'Captación de pacientes privados' },
    { href: '/blog/seo-para-clinicas-guia', label: 'Guía de SEO para clínicas' },
  ],
  'conseguir-resenas-google-clinica': [
    { href: '/blog/google-business-profile-clinicas', label: 'Google Business Profile para clínicas' },
    { href: '/blog/seo-para-clinicas-guia', label: 'Guía de SEO para clínicas' },
    { href: '/servicios/seo-medico', label: 'SEO médico para clínicas' },
  ],
  'marketing-psicologos-sevilla': [
    { href: '/blog/seo-para-clinicas-guia', label: 'Guía de SEO para clínicas' },
    { href: '/servicios/seo-medico', label: 'SEO médico para clínicas' },
    { href: '/servicios/google-ads', label: 'Google Ads para clínicas' },
    { href: '/especialidades/psicologos-sevilla', label: 'Marketing para psicólogos' },
    { href: '/blog/lopd-marketing-sanitario', label: 'LOPD y marketing sanitario' },
  ],
  'palabras-clave-clinicas-privadas': [
    { href: '/blog/seo-para-clinicas-guia', label: 'Guía de SEO para clínicas' },
    { href: '/blog/seo-vs-google-ads-clinicas', label: 'SEO vs Google Ads para clínicas' },
    { href: '/servicios/seo-medico', label: 'SEO médico para clínicas' },
    { href: '/servicios/marketing-para-clinicas', label: 'Marketing para clínicas' },
  ],
}

export const serviceRelatedSpecialties: Record<string, CrossLink[]> = {
  'marketing-para-clinicas': [
    { href: '/especialidades/clinicas-dentales-sevilla', label: 'Clínicas dentales' },
    { href: '/especialidades/psicologos-sevilla', label: 'Psicólogos' },
    { href: '/especialidades/medicina-estetica-sevilla', label: 'Medicina estética' },
    { href: '/especialidades/fisioterapia-sevilla', label: 'Fisioterapia' },
    { href: '/especialidades/dermatologos-sevilla', label: 'Dermatólogos' },
    { href: '/especialidades/nutricionistas-sevilla', label: 'Nutricionistas' },
    { href: '/especialidades/oftalmologos-sevilla', label: 'Oftalmólogos' },
    { href: '/especialidades/pediatria-sevilla', label: 'Pediatría' },
    { href: '/especialidades/clinicas-reproduccion-asistida-sevilla', label: 'Reproducción asistida' },
    { href: '/especialidades/clinicas-cirugia-sevilla', label: 'Clínicas quirúrgicas' },
  ],
  'seo-medico': [
    { href: '/especialidades/clinicas-dentales-sevilla', label: 'Clínicas dentales' },
    { href: '/especialidades/psicologos-sevilla', label: 'Psicólogos' },
    { href: '/especialidades/medicina-estetica-sevilla', label: 'Medicina estética' },
    { href: '/especialidades/fisioterapia-sevilla', label: 'Fisioterapia' },
    { href: '/especialidades/dermatologos-sevilla', label: 'Dermatólogos' },
    { href: '/especialidades/nutricionistas-sevilla', label: 'Nutricionistas' },
    { href: '/especialidades/oftalmologos-sevilla', label: 'Oftalmólogos' },
    { href: '/especialidades/pediatria-sevilla', label: 'Pediatría' },
    { href: '/especialidades/clinicas-reproduccion-asistida-sevilla', label: 'Reproducción asistida' },
    { href: '/especialidades/clinicas-cirugia-sevilla', label: 'Clínicas quirúrgicas' },
  ],
  'google-ads': [
    { href: '/especialidades/clinicas-dentales-sevilla', label: 'Clínicas dentales' },
    { href: '/especialidades/psicologos-sevilla', label: 'Psicólogos' },
    { href: '/especialidades/medicina-estetica-sevilla', label: 'Medicina estética' },
    { href: '/especialidades/fisioterapia-sevilla', label: 'Fisioterapia' },
    { href: '/especialidades/clinicas-cirugia-sevilla', label: 'Clínicas quirúrgicas' },
  ],
  'diseno-web': [
    { href: '/especialidades/clinicas-dentales-sevilla', label: 'Clínicas dentales' },
    { href: '/especialidades/psicologos-sevilla', label: 'Psicólogos' },
    { href: '/especialidades/medicina-estetica-sevilla', label: 'Medicina estética' },
    { href: '/especialidades/nutricionistas-sevilla', label: 'Nutricionistas' },
    { href: '/especialidades/oftalmologos-sevilla', label: 'Oftalmólogos' },
  ],
  'redes-sociales': [
    { href: '/especialidades/medicina-estetica-sevilla', label: 'Medicina estética' },
    { href: '/especialidades/clinicas-dentales-sevilla', label: 'Clínicas dentales' },
    { href: '/especialidades/nutricionistas-sevilla', label: 'Nutricionistas' },
    { href: '/especialidades/dermatologos-sevilla', label: 'Dermatólogos' },
    { href: '/especialidades/psicologos-sevilla', label: 'Psicólogos' },
  ],
}

export const specialtyRelatedServices: Record<string, CrossLink[]> = {
  'clinicas-dentales-sevilla': [
    { href: '/servicios/seo-medico', label: 'SEO médico' },
    { href: '/servicios/google-ads', label: 'Google Ads' },
    { href: '/servicios/diseno-web', label: 'Diseño web sanitario' },
    { href: '/blog/errores-seo-dentistas', label: 'Errores SEO en clínicas dentales' },
  ],
  'psicologos-sevilla': [
    { href: '/servicios/seo-medico', label: 'SEO médico' },
    { href: '/servicios/google-ads', label: 'Google Ads' },
    { href: '/servicios/diseno-web', label: 'Diseño web sanitario' },
    { href: '/blog/google-ads-psicologos', label: 'Google Ads para psicólogos' },
  ],
  'medicina-estetica-sevilla': [
    { href: '/servicios/google-ads', label: 'Google Ads' },
    { href: '/servicios/diseno-web', label: 'Diseño web sanitario' },
    { href: '/servicios/redes-sociales', label: 'Redes sociales' },
  ],
  'fisioterapia-sevilla': [
    { href: '/servicios/seo-medico', label: 'SEO médico' },
    { href: '/servicios/google-ads', label: 'Google Ads' },
    { href: '/servicios/diseno-web', label: 'Diseño web sanitario' },
  ],
  'dermatologos-sevilla': [
    { href: '/servicios/seo-medico', label: 'SEO médico' },
    { href: '/servicios/google-ads', label: 'Google Ads' },
    { href: '/servicios/diseno-web', label: 'Diseño web sanitario' },
  ],
  'nutricionistas-sevilla': [
    { href: '/servicios/seo-medico', label: 'SEO médico' },
    { href: '/servicios/redes-sociales', label: 'Redes sociales' },
    { href: '/servicios/diseno-web', label: 'Diseño web sanitario' },
  ],
  'oftalmologos-sevilla': [
    { href: '/servicios/seo-medico', label: 'SEO médico' },
    { href: '/servicios/google-ads', label: 'Google Ads' },
    { href: '/servicios/diseno-web', label: 'Diseño web sanitario' },
  ],
  'pediatria-sevilla': [
    { href: '/servicios/seo-medico', label: 'SEO médico' },
    { href: '/servicios/diseno-web', label: 'Diseño web sanitario' },
    { href: '/servicios/google-ads', label: 'Google Ads' },
  ],
  'clinicas-reproduccion-asistida-sevilla': [
    { href: '/servicios/seo-medico', label: 'SEO médico' },
    { href: '/servicios/google-ads', label: 'Google Ads' },
    { href: '/servicios/diseno-web', label: 'Diseño web sanitario' },
  ],
  'clinicas-cirugia-sevilla': [
    { href: '/servicios/seo-medico', label: 'SEO médico' },
    { href: '/servicios/google-ads', label: 'Google Ads' },
    { href: '/servicios/diseno-web', label: 'Diseño web sanitario' },
  ],
}
