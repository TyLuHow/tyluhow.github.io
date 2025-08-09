export function initAnalytics(): void {
  const gaId = (import.meta as any).env?.VITE_GA_ID as string | undefined
  if (!gaId) return
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`
  document.head.appendChild(script)
  ;(window as any).dataLayer = (window as any).dataLayer || []
  const gtag = (...args: any[]) => { (window as any).dataLayer.push(args) }
  gtag('js', new Date())
  gtag('config', gaId)
} 