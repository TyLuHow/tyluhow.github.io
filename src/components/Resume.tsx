import { useState } from 'react'

export default function Resume() {
  const onDownload = () => {
    window.print()
  }
  const [showCoursework, setShowCoursework] = useState(false)
  const [showMoreExp, setShowMoreExp] = useState(false)

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 bg-grid rounded-xl" id="resume-section">
      <div className="flex items-center justify-between">
        <div className="section-header">
          <div className="bar" />
          <h2 className="text-xl font-semibold text-white">Resume</h2>
        </div>
        <button onClick={onDownload} className="text-sm btn-solid">
          Download PDF
        </button>
      </div>

      <div className="mt-6 bg-surface/80 border border-white/20 rounded-lg p-6 text-gray-200 text-sm leading-6">
        <h3 className="text-lg font-semibold">Tyler Luby Howard</h3>
        <div className="text-gray-300 space-x-2">
          <a href="mailto:tylerlubyhoward@gmail.com" className="underline">tylerlubyhoward@gmail.com</a>
          <span>•</span>
          <a href="tel:+17206365484" className="underline">(720) 636-5484</a>
          <span>•</span>
          <span>Parker, CO / San Luis Obispo, CA</span>
          <span>•</span>
          <a href="https://www.linkedin.com/in/tyler-luby-howard" target="_blank" rel="noreferrer" className="underline">linkedin.com/in/tyler-luby-howard</a>
        </div>

        <h4 className="mt-6 font-semibold text-gray-100">Education</h4>
        <p>California Polytechnic State University, San Luis Obispo — Bachelor of Science in Industrial Engineering (Expected December 2025)</p>

        <h4 className="mt-6 font-semibold text-gray-100">Certifications</h4>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>NAUI Worldwide, Open Water SCUBA Diver — Issued April 2025</li>
          <li>CSCMP Supply Chain Foundations: Demand Planning — March 2025</li>
          <li>CSCMP Supply Chain Foundations: Procurement — March 2025</li>
          <li>CSCMP Supply Chain Foundations: Essentials — March 2025</li>
          <li>CSCMP Supply Chain Foundations: Warehousing Operations — March 2025</li>
        </ul>

        <h4 className="mt-6 font-semibold text-gray-100">Relevant Coursework</h4>
        {!showCoursework && (
          <p className="text-gray-300">Key courses: OR I & II, Simulation & Queuing, Data Management & System Design, Value Chain Analysis, Supply Chain & Logistics, Quality Engineering, Statistical Computing in R. <button className="underline" onClick={() => setShowCoursework(true)}>Show all</button></p>
        )}
        {showCoursework && (
          <p className="text-gray-300">
            IME 212, IME 312, IME 305, IME 301, IME 326, STAT 331, STAT 321, CSC 231, IME 420, IME 410, IME 460, IME 417, IME 408, IME 141, IME 144, IME 156, IME 223, IME 430, IME 443, PHYS 132, PHYS 133, CHEM 124, CHEM 125, MATE 210, MATE 215, MATH 143, MATH 241, MATH 244, CE 204, ME 211, BIO 213, BMED 213, EE 201, EE 251, ENVE 111, IME 315, ENGL 134, ENGL 147, PHIL 126, PHIL 231, PHIL 339, COMS 101, HIST 202, ES 252, LA 212, PSY 201, MU 101, KINE 152.
            <button className="ml-2 underline" onClick={() => setShowCoursework(false)}>Hide</button>
          </p>
        )}

        <h4 className="mt-6 font-semibold text-gray-100">Technical Proficiencies (selected)</h4>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>Full-Stack & Web: TypeScript/JavaScript, HTML5/CSS3, PWAs, Node.js, Vercel Functions, Supabase, CI/CD (GitHub Actions)</li>
          <li>Data & Analytics: Python (pandas, numpy, matplotlib, scipy, folium), R (tidyverse), SQL (PostgreSQL, MySQL, T-SQL), Power BI, PowerApps, Power Automate</li>
          <li>Optimization & Simulation: OR (LP/VRP), AnyLogic, Monte Carlo, forecasting models</li>
          <li>Integration & APIs: REST, OAuth 2.0, webhooks, GraphQL design, Zod validation, MCP server architecture</li>
          <li>Manufacturing/Industrial: PLC/SCADA/HMI exposure, quality systems, SPC, ergonomics, facility layout</li>
          <li>Security/DevOps: CI/CD, monitoring, error handling, CSP, type-safe API development</li>
        </ul>

        <h4 className="mt-6 font-semibold text-gray-100">Professional Experience</h4>
        <div className="mt-2">
          <p className="font-medium">Rivian Automotive Inc. — Supply Chain Risk Intern (Jun 2025 – Sep 2025)</p>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Built proactive Supply Chain Risk Mitigation dashboard; improved early identification of critical supplier issues.</li>
            <li>Implemented predictive analytics in Databricks (80–90% accuracy) for supplier performance trends and risk monitoring.</li>
            <li>Automated ETL pipelines; reduced data processing time ~30–40% weekly; increased adoption via interactive Hex dashboards.</li>
            <li>Contributed to $1–3M estimated cost avoidance by enabling faster disruption resolution and early interventions.</li>
          </ul>
        </div>
        <div className="mt-2">
          <p className="font-medium">RFNR Accounting — Senior Project (Apr 2025 – Present)</p>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Architected PostgreSQL/Supabase data hub integrating 10+ systems; designed GraphQL/REST triggers and webhook flows.</li>
            <li>Mapped 60+ failure modes into an Integration Matrix; proposed phased rollout improving admin overhead and onboarding speed.</li>
            <li>Planned middleware for Practice CS ↔ Monday.com and ShareFile ↔ FileCabinet; SOC2-aligned security.</li>
          </ul>
        </div>
        <div className="mt-2">
          <p className="font-medium">RoviSys — Systems Co-Op (Sep 2024 – Dec 2024)</p>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Authored O&M manuals across nuclear/water/utilities/manufacturing for post-handover reliability and compliance.</li>
            <li>Documented SLC 500 → ControlLogix migrations; reverse-engineered Wonderware; prepared legacy VM strategies.</li>
          </ul>
        </div>
        <div className="mt-2">
          <p className="font-medium">Gensco — Operations Intern (Jun 2024 – Sep 2024)</p>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Built Power BI safety dashboards (4,000+ observations); achieved ~40% monthly incident drop post-deployment.</li>
            <li>Developed PowerApps inspection tools with 100% supervisor adoption in one week; added certification tracking modules.</li>
          </ul>
        </div>
        <div className="mt-2">
          <p className="font-medium">Tesla — Systems Optimization Club Project (Jan 2025 – Jun 2025)</p>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Digitized valet workflow with PowerApps/SharePoint/Power BI tracking 300–400 vehicles/day.</li>
            <li>Modeled labor savings of $35,700/quarter; breakeven ~50 days; reduced wait time from 90 to 35 minutes.</li>
          </ul>
        </div>
        {!showMoreExp && (
          <button className="mt-3 underline" onClick={() => setShowMoreExp(true)}>Show more experience</button>
        )}
        {showMoreExp && (
          <div className="mt-2 space-y-4">
            <div>
              <p className="font-medium">Corberosa Coffee — Systems Optimization Project Lead (Jan 2024 – Jun 2024)</p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Simulation-driven optimization for cold brew canning line; equipment layout and HACCP-aligned workflows.</li>
                <li>Breakeven projection 13–18 months; 80% productivity improvement in one-operator scenario.</li>
              </ul>
            </div>
            <div>
              <p className="font-medium">Inspired Flight — SOC Member (Jan 2023 – Jun 2023)</p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Redesigned UAV propeller testing center; SolidWorks fixtures and layout improvements for safer, parallel validation.</li>
              </ul>
            </div>
            <div>
              <p className="font-medium">Hayward Building Systems — Project Lead (Jan 2023 – Mar 2023)</p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Time studies and bottleneck analysis; WIP staging with FIFO tracking; 5S implementation.</li>
              </ul>
            </div>
            <div>
              <p className="font-medium">Cal Poly Environmental Engineering Dept. — WESTT Research Team (Sep 2022 – Dec 2023)</p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Bioremediation algae experiments; lab protocol adherence; experiment logging and QA support.</li>
              </ul>
            </div>
            <div>
              <p className="font-medium">Uber/DoorDash — Delivery Driver (Jun 2021 – Present)</p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>3,000+ deliveries, 4.98/5 rating; route heuristics to maximize hourly payout and reliability.</li>
              </ul>
            </div>
            <div>
              <p className="font-medium">Freddy’s Frozen Custard & Steakburgers — Full Shift Supervisor (Jun 2018 – Jun 2021)</p>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Promoted to shift lead; trained 9+ employees; coordinated throughput under peak conditions.</li>
              </ul>
            </div>
            <button className="underline" onClick={() => setShowMoreExp(false)}>Hide</button>
          </div>
        )}
      </div>
    </div>
  )
} 