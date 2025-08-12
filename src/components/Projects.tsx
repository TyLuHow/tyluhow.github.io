import ProjectCard from './ProjectCard'
import type { Project } from './ProjectCard'
import { projects } from '../data/projects'

const order: Project['category'][] = ['Internship', 'Senior Project', 'Club Leadership', 'Academic', 'Research']

export default function Projects() {
  const grouped = order.map(cat => ({
    cat,
    items: projects.filter(p => p.category === cat),
  })).filter(g => g.items.length > 0)

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 bg-grid rounded-xl">
      <div className="section-header">
        <div className="bar" />
        <h2 className="text-xl font-semibold text-white">Projects</h2>
      </div>
      <p className="mt-2 text-sm text-gray-400">Tap/click a card to flip for details.</p>

      <div className="mt-8 space-y-12">
        {grouped.map(group => (
          <section key={group.cat} aria-labelledby={`sec-${group.cat}`}>
            <h3 id={`sec-${group.cat}`} className="text-lg font-semibold text-gray-100">{group.cat}</h3>
            <div className={
              group.cat === 'Internship' ? 'mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'
              : group.cat === 'Senior Project' ? 'mt-4 grid grid-cols-1 sm:grid-cols-2 gap-5'
              : group.cat === 'Club Leadership' ? 'mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'
              : group.cat === 'Academic' ? 'mt-4 grid grid-cols-1 sm:grid-cols-2 gap-5'
              : 'mt-4 grid grid-cols-1 sm:grid-cols-2 gap-5'
            }>
              {group.items.map(p => (
                <div key={p.id} className="h-[360px] sm:h-[340px]">
                  <ProjectCard project={p} />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
} 