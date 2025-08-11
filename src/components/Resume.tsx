export default function Resume() {
  const onDownload = () => {
    window.print()
  }
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 bg-grid rounded-xl" id="resume-section">
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
        <h4 className="mt-4 font-semibold text-gray-100">PROFESSIONAL EXPERIENCE</h4>
        <div className="mt-2">
          <p className="font-medium">Rivian Automotive Inc., Plymouth, MI — Data Analyst Intern, Supply Chain Risk (Jun 2025 – Sep 2025)</p>
          <ul className="list-disc list-inside text-gray-300">
            <li>Developed production risk dashboards in Hex integrating SAP, Basecamp, OTM, and Exiger into a unified monitoring system.</li>
            <li>Built internal tooling to automate supplier info aggregation, capacity analysis, and escalation tracking.</li>
            <li>Enhanced ETL pipelines and status tracking to improve cross-departmental collaboration for risk identification.</li>
          </ul>
        </div>
        <div className="mt-2">
          <p className="font-medium">Tesla Motors, Fremont, CA (Remote) — Industrial Engineering Project Analyst – SOC (Jan 2025 – Jun 2025)</p>
          <ul className="list-disc list-inside text-gray-300">
            <li>Built PowerApps valet system tracking 400 vehicles/day with automated lot visualization and dispatch logic.</li>
            <li>Designed Power BI dashboards to improve charger usage, move counts, and labor allocation.</li>
            <li>Authored CAPEX/OPEX model projecting $35,700 quarterly labor savings (369.9% ROI) with 50-day breakeven.</li>
          </ul>
        </div>
        <div className="mt-2">
          <p className="font-medium">RFNR Accounting, LLP, Los Angeles, CA (Remote) — Enterprise Systems Integration Lead – Senior Project (Jan 2025 – Dec 2025)</p>
          <ul className="list-disc list-inside text-gray-300">
            <li>Constructed a PostgreSQL backend integrating 10+ finance, tax, and workflow systems via REST APIs, ODBC, and RPA.</li>
            <li>Replaced manual routing chains with automated escalation logic across 60+ integration failure points.</li>
            <li>Built an MCP-backed knowledge graph using RAG principles linking firm data to source-of-truth documentation.</li>
          </ul>
        </div>
        <div className="mt-2">
          <p className="font-medium">RoviSys, Thousand Oaks, CA — Control Systems Co-Op (Sep 2024 – Dec 2024)</p>
          <ul className="list-disc list-inside text-gray-300">
            <li>Authored O&M manuals to support long-term maintenance and QA audit-readiness.</li>
            <li>Migrated legacy SLC 500 into ControlLogix platforms, validating IO mappings and ladder logic.</li>
            <li>Delivered risk mitigation strategy to nuclear facility stakeholders, outlining legacy VM safeguards.</li>
          </ul>
        </div>
        <div className="mt-2">
          <p className="font-medium">Gensco, Tacoma, WA — Data Analyst Intern, Safety (Jun 2024 – Sep 2024)</p>
          <ul className="list-disc list-inside text-gray-300">
            <li>Developed a risk analysis model in Power BI assessing 4,000+ safety-related data points across warehouse activities.</li>
            <li>Achieved a 40% reduction in monthly incidents post-deployment by aligning insights with manager-level intervention.</li>
            <li>Built PowerApps inspection and certification apps; automated daily summaries via Power Automate.</li>
          </ul>
        </div>
        <div className="mt-2">
          <p className="font-medium">Corberosa Coffee, San Luis Obispo, CA — Business Expansion Project Lead – SOC (Jan 2024 – Jun 2024)</p>
          <ul className="list-disc list-inside text-gray-300">
            <li>Simulated canning system in AnyLogic; delivered ergonomic layouts and throughput projections.</li>
            <li>Built traceability tools for FDA/HACCP compliance and modeled breakeven across staffing configurations.</li>
          </ul>
        </div>
        <h4 className="mt-4 font-semibold text-gray-100">TECHNICAL SKILLS</h4>
        <p className="text-gray-300">Process optimization, systems integration, Python, R, SQL, React, Power BI, PowerApps, ETL pipelines, forecasting models, statistical modeling, simulation, and CI/CD.</p>
      </div>
    </div>
  )
} 