export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 mt-12">
      <div className="mx-auto max-w-7xl px-4 text-sm text-gray-400 space-y-4">
        <section>
          <h3 className="text-gray-200 font-medium">How this site was built</h3>
          <p>
            AI-driven automation with a code-first workflow: React + Vite + Tailwind, GitHub Actions for CI/CD, and MCP (Model Context Protocol) to orchestrate structured edits, validations, and deploy steps. Content is sourced from curated documents, transformed into typed data models, and rendered into responsive components. The pipeline enables repeatable updates (data → build → deploy) with minimal manual overhead.
          </p>
        </section>
        <div>© {new Date().getFullYear()} Tyler Luby Howard. All rights reserved.</div>
      </div>
    </footer>
  )
} 