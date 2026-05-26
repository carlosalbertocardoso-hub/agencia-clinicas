'use client'
import Script from 'next/script'

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID

export function GoogleTagManagerHead() {
  if (!GTM_ID) return null
  return (
    <>
      <Script id="gtm-consent" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}

          // traffic_type: descomenta y adapta la detección de IP interna si procede
          // var internalIPs = ['192.168.1.', '10.0.'];
          // var isInternal = internalIPs.some(function(range){ return (window.__clientIP||'').startsWith(range); });
          // if (isInternal) { gtag('set', { traffic_type: 'internal' }); }

          gtag('consent', 'default', {
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied',
            'analytics_storage': 'denied',
            'functionality_storage': 'granted',
            'security_storage': 'granted',
            'wait_for_update': 500
          });
          gtag('set', 'ads_data_redaction', true);
          gtag('set', 'url_passthrough', true);

          try {
            var c = document.cookie.match(/(?:^|; )iclinicas_consent=([^;]+)/);
            if (c) {
              var v = decodeURIComponent(c[1]);
              if (v === 'granted' || v === 'denied') {
                gtag('consent', 'update', {
                  'ad_storage': v,
                  'ad_user_data': v,
                  'ad_personalization': v,
                  'analytics_storage': v,
                  'functionality_storage': 'granted',
                  'security_storage': 'granted'
                });
              }
            }
          } catch(e) {}
        `}
      </Script>
      <Script id="gtm-loader" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>
    </>
  )
}

export function GoogleTagManagerNoScript() {
  if (!GTM_ID) return null
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  )
}
