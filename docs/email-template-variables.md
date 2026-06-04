# Variables para `iclinicas-email-template.html`

La plantilla HTML usa cabecera y footer comunes. Para cada envío se sustituye solo el cuerpo personalizado.

## Campos base

- `{{email_title}}`: título interno del email.
- `{{hero_title}}`: titular de cabecera.
- `{{hero_copy}}`: subtítulo de cabecera.
- `{{saludo}}`: saludo personalizado.
- `{{intro}}`: presentación breve.
- `{{observacion_personalizada}}`: reconocimiento específico de la clínica.
- `{{titulo_oportunidades}}`: etiqueta antes de las 3 oportunidades.
- `{{oportunidad_1_titulo}}`, `{{oportunidad_1_texto}}`
- `{{oportunidad_2_titulo}}`, `{{oportunidad_2_texto}}`
- `{{oportunidad_3_titulo}}`, `{{oportunidad_3_texto}}`
- `{{cta_badge}}`: por ejemplo, `Gratuito · Sin compromiso`.
- `{{diagnostico_titulo}}`
- `{{diagnostico_texto}}`
- `{{entregable_1}}`, `{{entregable_2}}`, `{{entregable_3}}`
- `{{cta_url}}`
- `{{cta_texto}}`
- `{{cta_nota}}`
- `{{cierre}}`
- `{{firma_nombre}}`
- `{{unsubscribe_url}}`: enlace único de baja para el contacto. Debe apuntar a `/api/unsubscribe?contactId=...&token=...`.

## Ejemplo: clínica premium genérica

```txt
email_title:
Diagnóstico de captación para clínicas privadas en Sevilla

hero_title:
Convertir prestigio clínico en más demanda privada medible

hero_copy:
Revisamos cómo se ve tu clínica desde fuera: Google, web, reseñas y puntos de contacto. Después te enviamos 3 oportunidades claras para captar mejor pacientes privados.

saludo:
Hola, equipo de {{clinica_nombre}},

intro:
Soy Carlos Cardoso, de iClínicas. Trabajo con clínicas privadas de Sevilla que quieren captar mejor pacientes privados sin convertir su marketing en una carga más para el equipo.

observacion_personalizada:
He estado revisando vuestra presencia pública y se nota que no sois una clínica genérica. Tenéis una propuesta con valor, pero desde fuera se ven algunos puntos que podrían ayudaros a captar mejor demanda privada.

titulo_oportunidades:
3 oportunidades que se ven desde fuera

oportunidad_1_titulo:
Vuestra especialidad principal podría tener más protagonismo en Google.

oportunidad_1_texto:
Cuando un paciente busca una clínica como la vuestra, no solo importa aparecer: importa que entienda rápido por qué vuestra opción es distinta.

oportunidad_2_titulo:
Sería útil medir qué servicios generan contactos reales.

oportunidad_2_texto:
Para una clínica privada no basta con ver visitas. Lo interesante es saber qué páginas generan llamadas, formularios o WhatsApp de pacientes con intención.

oportunidad_3_titulo:
Hay búsquedas de alto valor que conviene defender mejor.

oportunidad_3_texto:
Si no se trabajan con SEO local, web y campañas bien medidas, parte de esa demanda acaba comparando otras alternativas.

cta_badge:
Gratuito · Sin compromiso

diagnostico_titulo:
Diagnóstico de captación en 48h

diagnostico_texto:
Os preparo una revisión breve y práctica de vuestra presencia digital, con 3 prioridades claras para captar mejor demanda privada en Sevilla.

entregable_1:
Qué está encontrando ahora un paciente al buscaros.

entregable_2:
Dónde puede haber margen de mejora en web y contacto.

entregable_3:
3 acciones priorizadas, sin informe interminable.

cta_url:
https://www.iclinicas.es/contacto

cta_texto:
Recibir diagnóstico breve

cta_nota:
Respuesta en menos de 24h · Sin permanencia

cierre:
Si os encaja, hablamos con calma. Y si no, al menos os quedáis con una mirada externa que puede ser útil para decidir próximos pasos.

firma_nombre:
Carlos Cardoso

unsubscribe_url:
https://www.iclinicas.es/api/unsubscribe?contactId=aureaclinic-com&token=TOKEN_GENERADO
```
