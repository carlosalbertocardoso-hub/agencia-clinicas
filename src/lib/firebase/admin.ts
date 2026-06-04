import { cert, getApps, initializeApp, type ServiceAccount } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
import { readFileSync } from 'fs'

function normalizeServiceAccount(raw: Record<string, string>): ServiceAccount {
  return {
    projectId: raw.projectId || raw.project_id,
    clientEmail: raw.clientEmail || raw.client_email,
    privateKey: (raw.privateKey || raw.private_key)?.replace(/\\n/g, '\n'),
  }
}

function getServiceAccount(): ServiceAccount {
  if (process.env.FIREBASE_SERVICE_ACCOUNT_JSON) {
    return normalizeServiceAccount(JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_JSON) as Record<string, string>)
  }

  const serviceAccountPath = process.env.FIREBASE_SERVICE_ACCOUNT_PATH || process.env.GOOGLE_APPLICATION_CREDENTIALS

  if (!serviceAccountPath) {
    throw new Error('Missing FIREBASE_SERVICE_ACCOUNT_JSON, FIREBASE_SERVICE_ACCOUNT_PATH or GOOGLE_APPLICATION_CREDENTIALS')
  }

  return normalizeServiceAccount(JSON.parse(readFileSync(serviceAccountPath, 'utf8')) as Record<string, string>)
}

export function getAdminDb() {
  if (!getApps().length) {
    initializeApp({
      credential: cert(getServiceAccount()),
    })
  }

  return getFirestore()
}
