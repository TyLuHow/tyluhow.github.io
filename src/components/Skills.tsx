import { skills } from '../data/skills'

export default function Skills() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 bg-grid rounded-xl">
      <div className="section-header">
        <div className="bar" />
        <h2 className="text-xl font-semibold text-white">Skills</h2>
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map(s => (
          <div key={s.title} className="bg-surface/80 border border-white/20 rounded-lg p-5">
            <h3 className="text-sm font-medium text-gray-100">{s.title}</h3>
            <ul className="mt-3 text-gray-300 text-sm space-y-1 list-disc list-inside">
              {s.items.map(i => (<li key={i}>{i}</li>))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
} 