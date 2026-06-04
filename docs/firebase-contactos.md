# Firebase para contactos, envíos y leads

## Objetivo

Usar Firestore como registro central para:

- Contactos importados desde `contactos-clinicas-unificado.csv`.
- Estado de envíos comerciales.
- Consentimiento o baja de comunicaciones.
- Leads recibidos desde formularios de la web.

## Colecciones recomendadas

### `contacts`

Una ficha por clínica.

Campos principales:

- `name`
- `specialty`
- `subspecialty`
- `website`
- `phone`
- `email`
- `zone`
- `googleRating`
- `googleReviews`
- `usesGoogleAds`
- `googleBusinessProfileOptimized`
- `detectedOpportunity`
- `score`
- `priority`
- `websiteSummary`
- `dafo`
- `linkedin`
- `source`
- `outreach`

`outreach` contiene:

- `emailStatus`: `not_sent`, `sent`, `opened`, `clicked`, `replied`, `bounced`, `unsubscribed`
- `commercialConsent`: `unknown`, `accepted`, `rejected`, `unsubscribed`
- `outreachEligible`: `true` si es un contacto profesional público apto para prospección inicial.
- `legalBasis`: por defecto `public_b2b_contact`.
- `leadStatus`: `none`, `submitted_form`, `qualified`, `contacted`, `won`, `lost`
- `lastEmailSentAt`
- `lastContactedAt`
- `unsubscribedAt`

### `email_events`

Un documento por evento de email:

- `contactId`
- `campaignId`
- `type`: `sent`, `opened`, `clicked`, `replied`, `bounced`, `unsubscribed`
- `provider`: `resend`
- `providerMessageId`
- `timestamp`

### `leads`

Un documento por formulario recibido desde la web:

- `contactId` si se puede vincular.
- `nombre`
- `email`
- `telefono`
- `clinica`
- `especialidad`
- `web`
- `mensaje`
- `privacidad`
- `comunicaciones`
- `sourcePage`
- `createdAt`

### `consents`

Un documento por cambio de consentimiento:

- `contactId`
- `email`
- `status`: `accepted`, `rejected`, `unsubscribed`
- `source`: `web_form`, `email_reply`, `manual`
- `consentText`
- `timestamp`

## Configuración

1. Crea un proyecto Firebase.
2. Activa Firestore.
3. Crea una clave de cuenta de servicio desde:

   `Firebase Console > Project settings > Service accounts > Generate new private key`

4. Guarda el JSON fuera del repositorio o con un nombre ignorado por git, por ejemplo:

   `C:\Users\ccard\secrets\iclinicas-serviceAccountKey.json`

5. Define la variable de entorno:

```powershell
$env:FIREBASE_SERVICE_ACCOUNT_PATH="C:\Users\ccard\secrets\iclinicas-serviceAccountKey.json"
```

Opcionalmente puedes cambiar la colección:

```powershell
$env:FIREBASE_CONTACTS_COLLECTION="contacts"
```

## Probar sin escribir

```bash
npm run firebase:contacts:dry-run
```

## Importar contactos

```bash
npm run firebase:contacts:import
```

También puedes indicar otro CSV:

```bash
node scripts/import-contacts-to-firestore.js --csv contactos-clinicas-unificado.csv
```

## Baja con Resend

La plantilla de email incluye:

```html
{{unsubscribe_url}}
```

Ese valor debe generarse por contacto con:

```ts
buildUnsubscribeUrl('https://www.iclinicas.es', contactId)
```

Al enviar con Resend, conviene incluir tanto el enlace visible en el HTML como headers de baja:

```ts
await resend.emails.send({
  from,
  to,
  subject,
  html,
  headers: {
    'List-Unsubscribe': `<${unsubscribeUrl}>`,
    'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
  },
})
```

La ruta `/api/unsubscribe` funciona en dos pasos:

1. `GET /api/unsubscribe?contactId=...&token=...` abre una landing de confirmación.
2. Solo cuando el usuario pulsa `Confirmar baja`, el `POST /api/unsubscribe` marca el contacto como:

```txt
outreach.commercialConsent = unsubscribed
outreach.emailStatus = unsubscribed
outreach.outreachEligible = false
```

También registra un evento en `email_events`.

Nota: si se usa `List-Unsubscribe-Post` para baja de un clic desde clientes de correo, el `POST` confirma directamente la baja porque esa acción ya representa una confirmación del cliente de email. El enlace visible del footer abre primero la landing.

## Nota legal

El campo `commercialConsent` empieza como `unknown`. No debe marcarse como `accepted` por el mero hecho de importar un contacto desde CSV. Solo debe cambiar si la clínica lo acepta en formulario, email o consentimiento verificable.

Para contactos profesionales públicos, el importador marca:

- `outreach.outreachEligible = true`
- `outreach.legalBasis = public_b2b_contact`

Así se puede hacer prospección comercial inicial sin registrar un consentimiento explícito que todavía no se ha producido. Si alguien pide baja, debe actualizarse a:

- `outreach.commercialConsent = unsubscribed`
- `outreach.emailStatus = unsubscribed`
- `outreach.outreachEligible = false`
