import { ImageResponse } from 'next/og'

export const runtime = 'edge'

const BG = 'linear-gradient(135deg, #073F38 0%, #0A6B5E 60%, #11A894 100%)'
const ACCENT = '#FFD166'

async function loadFont(weight: 400 | 700) {
  const url = `https://cdn.jsdelivr.net/npm/@fontsource/inter@5.0.18/files/inter-latin-${weight}-normal.woff`
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Inter ${weight} fetch failed: ${res.status}`)
  return res.arrayBuffer()
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const title = (searchParams.get('title') ?? 'iclinicas').slice(0, 110)
  const category = searchParams.get('category') ?? 'Marketing sanitario'
  const subtitle =
    searchParams.get('subtitle') ?? 'Sevilla · Captación de pacientes privados'

  const [interRegular, interBold] = await Promise.all([loadFont(400), loadFont(700)])

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
          height: '100%',
          padding: '80px',
          background: BG,
          color: '#FFFFFF',
          fontFamily: 'Inter',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ fontSize: 28, opacity: 0.9, letterSpacing: 0.5 }}>
            {`${category} · iclinicas`}
          </div>
          <div
            style={{
              fontSize: 20,
              padding: '6px 18px',
              border: `1px solid ${ACCENT}`,
              borderRadius: 999,
              color: ACCENT,
            }}
          >
            www.iclinicas.es
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div
            style={{
              fontSize: title.length > 70 ? 52 : title.length > 45 ? 64 : 76,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: -1.5,
            }}
          >
            {title}
          </div>
          <div style={{ fontSize: 28, opacity: 0.9 }}>{subtitle}</div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'Inter', data: interRegular, weight: 400, style: 'normal' },
        { name: 'Inter', data: interBold, weight: 700, style: 'normal' },
      ],
      headers: {
        'Cache-Control': 'public, immutable, no-transform, max-age=31536000',
      },
    }
  )
}
