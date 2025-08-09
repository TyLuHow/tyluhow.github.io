export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/50 bg-black/60 border-b border-white/10">
      <nav className="mx-auto max-w-6xl px-4 py-2.5 flex items-center justify-between">
        <a href="#home" className="text-sm text-gray-300 hover:text-white font-medium">TLH</a>
        <ul className="hidden sm:flex gap-6 text-sm text-gray-300">
          <li><a href="#about" className="hover:text-white">About</a></li>
          <li><a href="#projects" className="hover:text-white">Projects</a></li>
          <li><a href="#skills" className="hover:text-white">Skills</a></li>
          <li><a href="#resume" className="hover:text-white">Resume</a></li>
          <li><a href="#contact" className="hover:text-white">Contact</a></li>
        </ul>
        <div className="flex items-center gap-3">
          <a href="https://www.linkedin.com/in/tyler-luby-howard" target="_blank" rel="noreferrer" className="text-sm text-gray-300 hover:text-white">LinkedIn</a>
          <a href="#contact" className="hidden sm:inline-block text-sm bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded">Get in touch</a>
        </div>
      </nav>
    </header>
  )
} 