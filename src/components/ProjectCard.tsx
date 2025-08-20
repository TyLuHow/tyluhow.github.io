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
  media?: { label: string; url: string; type?: 'link' | 'pdf' }[]
  logo?: { src: string; alt: string }
}

export default function ProjectCard({ project }: { project: Project }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div className="flip-card h-full" onClick={() => setFlipped(v => !v)}>
      <div className={`flip-inner h-full ${flipped ? 'is-flipped' : ''}`}>
        <div className="flip-front bg-surface/80 border border-white/20 rounded-lg p-5 flex flex-col">
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
          <p className="mt-2 text-gray-300">{project.summary}</p>

          {project.category === 'Internship' && project.impact && (
            <div className="mt-6 text-2xl sm:text-3xl font-semibold text-[color:var(--tw-prose-body)]">
              <span className="text-accent">{project.impact}</span>
            </div>
          )}

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map(t => (
              <span key={t} className="text-xs tag-pill">{t}</span>
            ))}
          </div>
          <button className="mt-4 self-start text-sm btn-solid">
            View details
          </button>
        </div>
        <div className="flip-back bg-surface/90 border border-white/20 rounded-lg p-5 overflow-y-auto">
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
          <div className="mt-3 space-y-3 text-gray-300 text-sm">
            <div>
              <div className="font-medium text-gray-200">Problem</div>
              <ul className="list-disc list-inside"><li>{project.problem}</li></ul>
            </div>
            <div>
              <div className="font-medium text-gray-200">Solution</div>
              <ul className="list-disc list-inside"><li>{project.solution}</li></ul>
            </div>
            <div>
              <div className="font-medium text-gray-200">Technical implementation</div>
              <ul className="list-disc list-inside space-y-1">
                {project.implementation.map((i, idx) => (<li key={idx}>{i}</li>))}
              </ul>
            </div>
            <div>
              <div className="font-medium text-gray-200">Outcomes</div>
              <ul className="list-disc list-inside space-y-1">
                {project.outcomes.map((o, idx) => (<li key={idx}>{o}</li>))}
              </ul>
            </div>
            {project.media && project.media.length > 0 && (
              <div>
                <div className="font-medium text-gray-200">Media</div>
                <div className="space-y-3">
                  {project.media.map((m, idx) => (
                    <div key={idx} className="space-y-2">
                      {m.type === 'pdf' ? (
                        <iframe src={m.url} title={m.label} className="w-full h-64 rounded border border-white/10" />
                      ) : (
                        <a href={m.url} target="_blank" rel="noreferrer" className="underline hover:text-white">{m.label}</a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <button className="mt-4 text-sm btn-solid">
            Back
          </button>
        </div>
      </div>
    </div>
  )
} 