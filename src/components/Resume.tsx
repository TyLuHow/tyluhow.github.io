import { useState } from 'react'

export default function Resume() {
  const onDownload = () => {
    window.print()
  }
  const [showCoursework, setShowCoursework] = useState(false)

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
        <h3 className="text-lg font-semibold">TYLER LUBY HOWARD</h3>
        <div className="text-gray-300">tylerlubyhoward@gmail.com | linkedin.com/in/tyler-luby-howard | 720-636-4854</div>

        <h4 className="mt-4 font-semibold text-gray-100">SUMMARY</h4>
        <p>
          Systems-minded industrial engineer with a passion for building solutions in uncharted territory, transforming fragmented workflows into integrated, scalable systems. Skilled in process automation and systems integration to accelerate execution and decision-making across technical and business domains, especially in high-ambiguity environments where adaptability matters.
        </p>

        <h4 className="mt-4 font-semibold text-gray-100">EDUCATION</h4>
        <p>BS - Industrial Engineering, California Polytechnic State University — December 2025</p>
        <p className="text-gray-400">Relevant Coursework: Value Chain Analysis, Applications of Enterprise Analytics, Supply Chain & Logistics Management, Process Improvement Fundamentals, Systems Engineering, Data Management & System Design, Operations Research I & II, Simulation, Financial Decision Making for Engineers, Human Factors Engineering, Quality Engineering</p>
        <p className="text-gray-400">Clubs: Systems Optimization Club (SOC) - Lead, Analyst, Member; Institute of Industrial & Systems Engineers (IISE)</p>

        <h4 className="mt-4 font-semibold text-gray-100">PROFESSIONAL EXPERIENCE</h4>
        <div className="mt-2">
          <p className="font-medium">Rivian Automotive Inc., Plymouth, MI — Data Analyst Intern, Supply Chain Risk (Jun 2025 – Sep 2025)</p>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Developed manufacturing production risk dashboards in Hex to model real-time indicators of supplier performance degradation, integrating SAP, Basecamp, OTM, and Exiger data into a unified supply chain risk monitoring system</li>
            <li>Created internal tooling software in Cursor to automate supplier info aggregation, capacity analysis, and escalation tracking to streamline project conception-to-relief timeline, mitigating production-threatening supplier issues</li>
            <li>Enhanced ETL pipelines and project status tracking interfaces to improve collaboration and risk-identification across supply chain departments (supplier development, manufacturing, material planning, program management, and analytics)</li>
          </ul>
        </div>
        <div className="mt-2">
          <p className="font-medium">Tesla Motors, Fremont, CA (Remote) — Industrial Engineering Project Analyst – SOC (Jan 2025 – Jun 2025)</p>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Built PowerApps valet system tracking 400 vehicles/day, automating lot visualization and dispatch logic for attendants</li>
            <li>Designed Power BI dashboards to improve charger usage, move counts, and labor allocation decisions for supervisors</li>
            <li>Authored CAPEX/OPEX model projecting $35,700 quarterly labor savings (369.9% ROI) with 50-day breakeven timeline</li>
          </ul>
        </div>
        <div className="mt-2">
          <p className="font-medium">RFNR Accounting, LLP, Los Angeles, CA (Remote) — Enterprise Systems Integration Lead – Senior Project (Jan 2025 – Dec 2025)</p>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Constructed a PostgreSQL backend integrating 10+ finance, tax, and workflow systems via REST APIs, ODBC, and RPA</li>
            <li>Diagnosed and mapped 60+ integration failure points, replacing manual routing chains with automated escalation logic</li>
            <li>Built an MCP-backed knowledge graph using RAG principles, linking firm data to source-of-truth documentation</li>
          </ul>
        </div>
        <div className="mt-2">
          <p className="font-medium">RoviSys, Thousand Oaks, CA — Control Systems Co-Op (Sep 2024 – Dec 2024)</p>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Authored O&M manuals to support long-term maintenance and QA audit-readiness across regulated project handovers</li>
            <li>Migrated legacy SLC 500 into ControlLogix platforms, validating IO mappings and ladder logic against deployed systems</li>
            <li>Delivered risk mitigation strategy to nuclear facility stakeholders, outlining legacy VM safeguards and emulation paths</li>
          </ul>
        </div>
        <div className="mt-2">
          <p className="font-medium">Gensco, Tacoma, WA — Data Analyst Intern, Safety (Jun 2024 – Sep 2024)</p>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Developed a risk analysis model in Power BI to assess 4,000+ safety-related data points across all warehouse activities</li>
            <li>Achieved a 40% reduction in monthly incidents post-deployment by aligning insights with manager-level intervention</li>
            <li>Built PowerApps inspection and certification apps for DC supervisors; automated daily summaries via Power Automate</li>
          </ul>
        </div>
        <div className="mt-2">
          <p className="font-medium">Corberosa Coffee, San Luis Obispo, CA — Business Expansion Project Lead – SOC (Jan 2024 – Jun 2024)</p>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Simulated canning system in AnyLogic; delivered ergonomic layouts, throughput projections, and minimized MUDA</li>
            <li>Built Excel-based traceability tools for FDA/HACCP compliance and modeled breakeven across staffing configurations</li>
          </ul>
        </div>

        <h4 className="mt-4 font-semibold text-gray-100">TECHNICAL SKILLS</h4>
        <p className="text-gray-300">Process Optimization & Operations: Theory of Constraints, ERP, MRP, MES, bottleneck analysis, Lean Six Sigma, queuing theory, ergonomic modeling, capacity planning, AnyLogic simulation, labor modeling, decision tree analysis</p>
        <p className="text-gray-300">Software & Systems Integration: Python, R, SQL, MCP server architecture, API orchestration, Supabase, GitHub (CI/CD), Cursor, Claude Code, Vercel deployment, Power Automate, Excel VBA, HITL Automation, ERP integration (SAP), React</p>
        <p className="text-gray-300">Data Engineering & Analytics: Databricks, Data Visualization (Power BI, Tableau, Hex), PowerApps, forecasting models, statistical modeling, database development, ETL pipelines, Monte Carlo simulation, A/B testing, regression analysis, DOE</p>
      </div>
    </div>
  )
} 