import { useState } from 'react'

export type Project = {
  id: string
  title: string
  company?: string
  date?: string
  category: 'Internship' | 'Academic' | 'Club Leadership' | 'Freelance' | 'Research' | 'Senior Project'
  summary: string
  tech: string[]
  problem: string
  solution: string
  implementation: string[]
  outcomes: string[]
  highlights?: string[]
  impact?: string
  impactValue?: string
  impactLabel?: string
  media?: { label: string; url: string; type?: 'link' | 'pdf' }[]
  logo?: { src: string; alt: string }
}

function trim(text: string, max = 180): string {
  return text.length > max ? text.slice(0, max - 1) + '…' : text
}

export default function ProjectCard({ project }: { project: Project }) {
  const [flipped, setFlipped] = useState(false)

  const topOutcomes = project.outcomes.slice(0, 2)
  const topImpl = project.implementation.slice(0, 2)

  return (
    <div className="flip-card h-full" onClick={() => setFlipped(v => !v)}>
      <div className={`flip-inner h-full ${flipped ? 'is-flipped' : ''}`}>
        {/* FRONT */}
        <div className="flip-front bg-surface/80 border border-white/20 rounded-lg p-5 flex h-full flex-col">
          <div className="flex items-start justify-between">
            <div className="text-xs uppercase tracking-wide text-gray-400">{project.category}</div>
            {project.logo && (
              <img
                src={project.logo.src}
                alt={project.logo.alt}
                className="h-6 w-auto opacity-80"
                loading="lazy"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
              />
            )}
          </div>
          <h3 className="mt-2 text-lg font-semibold text-white">{project.title}</h3>
          {project.company && (
            <div className="text-sm text-gray-400">{project.company}</div>
          )}
          {project.date && (
            <div className="text-xs text-gray-500">{project.date}</div>
          )}

          {/* Scrollable content */}
          <div className="mt-2 flex-1 overflow-y-auto pr-1">
            <p className="text-gray-300">{trim(project.summary)}</p>

            {/* Compact stat row */}
            {(project.impactValue || project.impactLabel) && (
              <div className="mt-3 text-sm flex items-baseline gap-2">
                {project.impactValue && <span className="text-accent font-semibold text-base">{project.impactValue}</span>}
                {project.impactLabel && <span className="text-gray-400">{project.impactLabel}</span>}
              </div>
            )}

            <div className="mt-4 flex flex-wrap gap-2 max-h-16 overflow-hidden">
              {project.tech.map(t => (
                <span key={t} className="text-xs tag-pill">{t}</span>
              ))}
            </div>
          </div>

          <button className="mt-4 shrink-0 self-start text-sm btn-solid">
            View details
          </button>
        </div>

        {/* BACK */}
        <div className="flip-back bg-surface/90 border border-white/20 rounded-lg p-5 flex h-full flex-col">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
              {project.company && (
                <div className="text-sm text-gray-400">{project.company}</div>
              )}
              {project.date && (
                <div className="text-xs text-gray-500">{project.date}</div>
              )}
            </div>
            {project.logo && (
              <img
                src={project.logo.src}
                alt={project.logo.alt}
                className="h-6 w-auto opacity-80"
                loading="lazy"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
              />
            )}
          </div>

          {/* Scrollable content */}
          <div className="mt-3 flex-1 overflow-y-auto pr-1 space-y-3 text-gray-300 text-sm">
            <div>
              <div className="font-medium text-gray-200">Problem</div>
              <p>{trim(project.problem)}</p>
            </div>
            <div>
              <div className="font-medium text-gray-200">Solution</div>
              <p>{trim(project.solution)}</p>
            </div>
            {topImpl.length > 0 && (
              <div>
                <div className="font-medium text-gray-200">Technical</div>
                <ul className="list-disc list-inside space-y-1">
                  {topImpl.map((i, idx) => (<li key={idx}>{trim(i, 110)}</li>))}
                </ul>
              </div>
            )}
            {topOutcomes.length > 0 && (
              <div>
                <div className="font-medium text-gray-200">Outcomes</div>
                <ul className="list-disc list-inside space-y-1">
                  {topOutcomes.map((o, idx) => (<li key={idx}>{trim(o, 110)}</li>))}
                </ul>
              </div>
            )}
          </div>

          <button className="mt-4 shrink-0 text-sm btn-solid">
            Back
          </button>
        </div>
      </div>
    </div>
  )
} 