export default function Contact() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 bg-grid rounded-xl">
      <div className="flex items-center gap-2">
        <div className="heading-ornament" />
        <h2 className="text-xl font-semibold text-white">Contact</h2>
      </div>
      <p className="mt-2 text-gray-300">I welcome collaborations and opportunities.</p>
      <div className="mt-4 flex flex-col sm:flex-row gap-3 card-notch">
        <a href="mailto:tylerlubyhoward@gmail.com" className="inline-block text-sm btn-solid">Email</a>
        <a href="https://www.linkedin.com/in/tyler-luby-howard" target="_blank" rel="noreferrer" className="inline-block text-sm btn-solid">LinkedIn</a>
      </div>
    </div>
  )
} 