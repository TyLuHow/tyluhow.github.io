import Hero3D from './three/Hero3D'

export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-7xl px-4 py-16 sm:py-24 bg-grid rounded-xl">
      <div className="section-header">
        <div className="bar" />
        <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white">Tyler Luby Howard</h1>
      </div>
      <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl">
          Systems-minded industrial engineer integrating ambiguity into architecture
        </p>
        <div className="flex-shrink-0 w-24 h-24 rounded-full border border-white/20 bg-white/5 grid place-items-center text-gray-400 text-xs">
          Headshot
        </div>
      </div>
      <div className="mt-6 h-px bg-white/10" />
    </section>
  )
} 