import Hero3D from './three/Hero3D'

export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        <div className="bg-grid rounded-xl p-5 sm:p-6">
          <div className="section-header">
            <div className="bar" />
            <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white">Tyler Luby Howard</h1>
          </div>
          <p className="mt-3 sm:mt-4 text-lg sm:text-xl text-gray-300 max-w-3xl">
            Systems-minded industrial engineer integrating ambiguity into architecture
          </p>
          <div className="mt-6 h-px bg-white/10" />
          <div className="mt-6 flex items-center gap-3">
            <a href="#projects" className="btn-solid text-sm">View projects</a>
            <a href="#resume" className="text-sm text-gray-300 underline/30 hover:underline">Resume</a>
          </div>
        </div>
        <Hero3D />
      </div>
    </section>
  )
} 