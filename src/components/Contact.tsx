export default function Contact() {
  const email = 'tylerlubyhoward@gmail.com'
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      alert('Email copied to clipboard')
    } catch {
      // no-op
    }
  }
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 bg-grid rounded-xl">
      <div className="section-header">
        <div className="bar" />
        <h2 className="text-xl font-semibold text-white">Contact</h2>
      </div>
      <p className="mt-2 text-gray-300">I welcome collaborations and opportunities.</p>
      <div className="mt-4 flex flex-col sm:flex-row gap-3">
        <a href={`mailto:${email}`} className="inline-block text-sm btn-solid">Email</a>
        <button onClick={handleCopy} className="inline-block text-sm btn-solid">Copy email</button>
        <a href="https://www.linkedin.com/in/tyler-luby-howard" target="_blank" rel="noreferrer" className="inline-block text-sm btn-solid">LinkedIn</a>
      </div>
    </div>
  )
} 