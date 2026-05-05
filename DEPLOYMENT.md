# Deployment — iclinicas

Guía para desplegar y mantener la web en Vercel.

## Repositorio

Repositorio actual:

```bash
https://github.com/carlosalbertocardoso-hub/agencia-clinicas.git
```

Rama principal:

```bash
master
```

## Deploy en Vercel

1. Entra en Vercel.
2. Importa el repositorio `agencia-clinicas`.
3. Framework preset: Next.js.
4. Build command: `npm run build`.
5. Output directory: dejar por defecto.
6. Configura variables de entorno.
7. Lanza deploy.

## Variables de entorno

Configurar en **Project Settings → Environment Variables** para Production y Preview:

| Variable | Uso |
|---|---|
| `RESEND_API_KEY` | API key privada de Resend. |
| `RESEND_FROM_EMAIL` | Remitente verificado en Resend. |
| `CONTACT_TO_EMAIL` | Email donde llegan las consultas. |
| `NEXT_PUBLIC_SITE_URL` | URL pública del deployment o dominio final. |
| `GOOGLE_ANALYTICS_ID` | Opcional, si se activa analítica. |
| `GOOGLE_SITE_VERIFICATION` | Opcional, para Search Console. |

Ejemplo:

```env
RESEND_API_KEY=re_...
RESEND_FROM_EMAIL="iclinicas <hola@dominio-verificado.com>"
CONTACT_TO_EMAIL=ccardoso19@hotmail.com
NEXT_PUBLIC_SITE_URL=https://iclinicas.es
```

Importante:

- `RESEND_API_KEY` no debe empezar por `NEXT_PUBLIC_`.
- `RESEND_FROM_EMAIL` debe pertenecer a un dominio o remitente verificado en Resend.
- Si cambias variables en Vercel, haz redeploy. Los deployments ya publicados no reciben cambios automáticamente.

## Resend

Para que el formulario funcione:

1. Crear cuenta en Resend.
2. Crear API key.
3. Verificar dominio o remitente.
4. Copiar la API key a `RESEND_API_KEY`.
5. Usar el remitente verificado en `RESEND_FROM_EMAIL`.
6. Probar el formulario.
7. Revisar Resend Logs si no llega el email.

El código del envío está en:

```txt
src/app/actions/sendEmail.ts
```

El email principal se envía a `CONTACT_TO_EMAIL`. El email de confirmación al usuario no bloquea la recepción del lead si falla.

## Comprobación previa

Antes de hacer push o redeploy:

```bash
npm run build
```

Comprobar:

- La home carga correctamente.
- El formulario muestra estado de envío.
- Las rutas principales funcionan.
- No hay errores TypeScript.
- No se han añadido variables sensibles al repo.

Para una revisión visual completa, ejecutar la auditoría Playwright local y revisar las capturas generadas en `qa-screenshots/`. Esa carpeta está ignorada por Git para evitar subir artefactos pesados.

Checks mínimos antes de desplegar:

- No hay enlaces `href="#"`.
- No hay teléfono o WhatsApp ficticio visible.
- El menú móvil abre y cierra en `390x844`.
- No hay imágenes rotas o sin alt.
- No hay scroll horizontal inesperado en desktop, laptop, tablet o móvil.
- Cada página revisada mantiene un único H1 y metadata válida.

## Rutas que conviene revisar tras deploy

- `/`
- `/contacto`
- `/servicios/seo-medico`
- `/servicios/google-ads`
- `/servicios/diseno-web`
- `/servicios/redes-sociales`
- `/especialidades/clinicas-dentales-sevilla`
- `/especialidades/psicologos-sevilla`
- `/blog`

## Troubleshooting

### No llegan emails

1. Confirmar que el último commit está desplegado.
2. Hacer redeploy si se cambiaron variables de entorno.
3. Revisar que `RESEND_API_KEY` existe en Vercel.
4. Revisar que `RESEND_FROM_EMAIL` está verificado en Resend.
5. Revisar que `CONTACT_TO_EMAIL` apunta al buzón correcto.
6. Mirar logs de Vercel.
7. Mirar logs de Resend.

### Error de remitente en Resend

Usa un remitente verificado. Ejemplo:

```env
RESEND_FROM_EMAIL="iclinicas <hola@dominio-verificado.com>"
```

No usar `noreply@iclinicas.es` si ese dominio todavía no está verificado.

### Variables correctas pero sigue fallando

Haz redeploy desde Vercel:

```txt
Deployments → último deployment → Redeploy
```

## Dominio final

Cuando se configure dominio propio:

1. Añadir dominio en Vercel.
2. Configurar DNS en el proveedor.
3. Actualizar `NEXT_PUBLIC_SITE_URL`.
4. Actualizar metadata/schema si se deja de usar URL temporal.
5. Redeploy.

## Documentación relacionada

- [`README.md`](./README.md)
- [`design.md`](./design.md)
- [`Claude.md`](./Claude.md)
