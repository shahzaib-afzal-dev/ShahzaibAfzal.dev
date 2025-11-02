'use client'

import { useReportWebVitals } from 'next/web-vitals'

export function WebVitals() {
  useReportWebVitals((metric) => {
    // Log to console for development
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Web Vitals] ${metric.name}:`, {
        value: metric.value,
        rating: metric.rating,
        delta: metric.delta,
      })
    }

    // Track metrics
    switch (metric.name) {
      case 'FCP': // First Contentful Paint
        console.log('✅ FCP (First Contentful Paint):', metric.value, 'ms')
        break
      case 'LCP': // Largest Contentful Paint
        console.log('✅ LCP (Largest Contentful Paint):', metric.value, 'ms')
        console.log(metric.value < 2500 ? '🎉 Excellent!' : metric.value < 4000 ? '⚠️ Needs improvement' : '❌ Poor')
        break
      case 'CLS': // Cumulative Layout Shift
        console.log('✅ CLS (Cumulative Layout Shift):', metric.value)
        console.log(metric.value < 0.1 ? '🎉 Excellent!' : metric.value < 0.25 ? '⚠️ Needs improvement' : '❌ Poor')
        break
      case 'FID': // First Input Delay
        console.log('✅ FID (First Input Delay):', metric.value, 'ms')
        break
      case 'TTFB': // Time to First Byte
        console.log('✅ TTFB (Time to First Byte):', metric.value, 'ms')
        break
      case 'INP': // Interaction to Next Paint
        console.log('✅ INP (Interaction to Next Paint):', metric.value, 'ms')
        break
    }

    // Send to analytics endpoint (optional)
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      // You can send metrics to your analytics service
      // Example: analytics.track('Web Vital', { metric: metric.name, value: metric.value })
      
      // For Vercel Analytics
      if (window.va) {
        window.va('event', {
          name: 'web-vitals',
          data: {
            metric: metric.name,
            value: metric.value,
            rating: metric.rating,
          },
        })
      }
    }
  })

  return null
}

// Extend window type for Vercel Analytics
declare global {
  interface Window {
    va?: (event: string, data: any) => void
  }
}
