import ProjectCard from './ProjectCard'
import type { Project } from './ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
  const sorted: Project[] = [...projects]
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 bg-grid rounded-xl">
      <div className="section-header">
        <div className="bar" />
        <h2 className="text-xl font-semibold text-white">Projects</h2>
      </div>
      <p className="mt-2 text-sm text-gray-400">Tap/click a card to flip for details.</p>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {sorted.map(p => (
          <div key={p.id} className="h-[360px] sm:h-[340px]">
            <ProjectCard project={p} />
          </div>
        ))}
      </div>
    </div>
  )
} 