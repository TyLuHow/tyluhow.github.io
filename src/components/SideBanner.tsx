export default function SideBanner() {
  return (
    <aside className="side-banner">
      <a href="#home" className="mt-2 text-gray-200 hover:text-white" aria-label="Home">TLH</a>
      <div className="side-dot" />
      <a href="#about" className="text-xs text-gray-400 hover:text-white">About</a>
      <a href="#projects" className="text-xs text-gray-400 hover:text-white">Projects</a>
      <a href="#skills" className="text-xs text-gray-400 hover:text-white">Skills</a>
      <a href="#resume" className="text-xs text-gray-400 hover:text-white">Resume</a>
      <a href="#contact" className="text-xs text-gray-400 hover:text-white">Contact</a>
    </aside>
  )
} 