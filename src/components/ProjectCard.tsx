import { useState } from 'react'

export type Project = {
  id: string
  title: string
  category: 'Internship' | 'Academic' | 'Club Leadership' | 'Freelance' | 'Research'
  summary: string
  tech: string[]
  problem: string
  solution: string
  implementation: string[]
  outcomes: string[]
  media?: { label: string; url: string }[]
}

export default function ProjectCard({ project }: { project: Project }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div className="flip-card h-full" onClick={() => setFlipped(v => !v)}>
      <div className={`flip-inner h-full ${flipped ? 'is-flipped' : ''}`}>
        <div className="flip-front bg-surface/80 border border-white/10 rounded-lg p-5 flex flex-col">
          <div className="text-xs uppercase tracking-wide text-gray-400">{project.category}</div>
          <h3 className="mt-1 text-lg font-semibold text-white">{project.title}</h3>
          <p className="mt-2 text-gray-300 flex-1">{project.summary}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tech.map(t => (
              <span key={t} className="text-xs bg-white/10 text-gray-200 px-2 py-1 rounded">{t}</span>
            ))}
          </div>
          <button className="mt-4 self-start text-sm text-white bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded">
            View details
          </button>
        </div>
        <div className="flip-back bg-surface/90 border border-white/10 rounded-lg p-5 overflow-y-auto">
          <h3 className="text-lg font-semibold text-white">{project.title}</h3>
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
                <ul className="list-disc list-inside space-y-1">
                  {project.media.map((m, idx) => (
                    <li key={idx}><a href={m.url} target="_blank" rel="noreferrer" className="underline hover:text-white">{m.label}</a></li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <button className="mt-4 text-sm text-white bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded">
            Back
          </button>
        </div>
      </div>
    </div>
  )
} 