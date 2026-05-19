'use client'
import { useEffect } from 'react'
import { onCLS, onINP, onLCP, onFCP, onTTFB, type Metric } from 'web-vitals'
import { GA_ID } from '@/lib/analytics/gtag'

function send(metric: Metric) {
  if (!GA_ID || typeof window === 'undefined' || !window.gtag) return
  window.gtag('event', metric.name, {
    event_category: 'Web Vitals',
    event_label: metric.id,
    value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
    metric_id: metric.id,
    metric_value: metric.value,
    metric_delta: metric.delta,
    metric_rating: metric.rating,
    non_interaction: true,
  })
}

export default function WebVitalsReporter() {
  useEffect(() => {
    onCLS(send)
    onINP(send)
    onLCP(send)
    onFCP(send)
    onTTFB(send)
  }, [])
  return null
}
