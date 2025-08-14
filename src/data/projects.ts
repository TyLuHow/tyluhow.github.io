import type { Project } from '../components/ProjectCard'

export const projects: Project[] = [
  // Internships
  {
    id: 'rivian-supply-chain-risk',
    title: 'Supply Chain Risk Data Analysis',
    company: 'Rivian',
    date: 'Jun 2025 – Sep 2025',
    category: 'Internship',
    summary: 'Probabilistic risk modeling and real-time dashboards across multi-tier supplier network.',
    tech: [
      'Python', 'Databricks', 'Hex', 'SAP HANA', 'Predictive Analytics',
      'Data Modeling', 'ETL Pipelines', 'Risk Scoring', 'Dashboard Design', 'GIS Mapping'
    ],
    problem: 'Limited visibility into disruption risks across a complex multi-tier supplier network.',
    solution: 'Built predictive risk models, network analysis, and live dashboards to enable proactive mitigation.',
    implementation: [
      'Databricks pipelines for supplier performance signals',
      'ERP and external risk feed integration; GIS risk mapping',
      'Graph analysis to identify critical-path dependencies',
      'Scenario planning for disruption response'
    ],
    outcomes: [
      '85% coverage of Tier 1–3 suppliers; 72-hour early warning capability',
      '$2.3M cost avoidance and 45% faster disruption response'
    ],
  },
  {
    id: 'gensco-safety-analytics',
    title: 'Warehouse Safety Data Analysis',
    company: 'Gensco',
    date: 'Jun 2024 – Sep 2024',
    category: 'Internship',
    summary: 'Predictive safety analytics with unified data model and interactive Power BI dashboards.',
    tech: [
      'Power BI', 'DAX', 'PowerApps', 'Power Automate', 'T-SQL',
      'Python', 'M Code', 'Data Modeling', 'Data Quality Rules', 'KPI Design'
    ],
    problem: 'Manual incident tracking across 5 departments with no predictive capabilities or unified reporting.',
    solution: 'Integrated multi-source safety data and built predictive analytics with interactive dashboards and alerts.',
    implementation: [
      'Unified model across incidents, employees, equipment, and environment',
      'Anomaly detection and statistical testing (ANOVA, regression, chi-squared)',
      'Stored procedures for automated refresh and cleansing',
      'Interactive dashboards with real-time insights'
    ],
    outcomes: [
      '40% reduction in incidents; 65% faster response time',
      '80% decrease in manual data entry; 100% adoption in one week',
      '87% predictive accuracy for high-risk scenarios'
    ],
  },
  {
    id: 'rovisys-control-systems',
    title: 'Control Systems Integration',
    company: 'RoviSys',
    date: 'Sep 2024 – Dec 2024',
    category: 'Internship',
    summary: 'Control systems integration with alarm management, historian, and reporting for manufacturing.',
    tech: [
      'Allen-Bradley ControlLogix', 'Ladder Logic', 'HMI Development', 'FactoryTalk View', 'EtherNet/IP',
      'Alarm Management (ISA-18.2)', 'Commissioning', 'Network Config', 'Tech Writing', 'Troubleshooting'
    ],
    problem: 'Need for standardized, reliable control systems with safety and compliance across sites.',
    solution: 'Designed alarm philosophy, P&ID-based HMI, historian, and automated reporting.',
    implementation: [
      'ControlLogix and GuardLogix safety PLCs',
      'Compliance reporting and historian configuration',
      'Managed switching and fiber backbone configuration',
      'Reusable templates and troubleshooting guides'
    ],
    outcomes: [
      '25% reduced commissioning time; zero device failures at startup',
      '40% reduction in support calls via documentation and templates'
    ],
  },

  // Senior Project
  {
    id: 'rfnr-data-warehouse',
    title: 'Multi-Client Database Unification',
    company: 'RFNR Accounting',
    date: 'Jan 2025 – Dec 2025',
    category: 'Senior Project',
    summary: 'Unified data warehouse and API layer across 50+ accounting clients with automated reconciliation.',
    tech: [
      'PostgreSQL', 'Supabase', 'REST APIs', 'Data Warehouse', 'Audit Trail',
      'Schema Design', 'Data Orchestration', 'Encryption', 'Portal Integration', 'Monitoring'
    ],
    problem: 'Disparate client systems and formats led to inconsistent reporting and manual reconciliation.',
    solution: 'Designed a star-schema warehouse, ETL pipelines, and reconciliation engine with role-based security.',
    implementation: [
      'ETL for QuickBooks, Xero, Sage, and proprietary formats',
      'Dimensional modeling (star schema), change tracking',
      'Nightly sync and guardrails',
      'Portal APIs with role-based access and encryption'
    ],
    outcomes: [
      'Monthly close reduced from 5 days to 1 day',
      '99.7% data accuracy; $200k annual savings',
      'Query times reduced by 75% via indexing strategy'
    ],
    media: [
      { label: 'Report (coming Dec)', url: '#', type: 'link' },
      { label: 'Poster (coming Dec)', url: '#', type: 'link' },
    ],
  },

  // Club Leadership (SOC)
  {
    id: 'soc-tesla-ops',
    title: 'Tesla Valet Operations Optimization',
    company: 'SOC — Analyst',
    date: 'Jan 2025 – Jun 2025',
    category: 'Club Leadership',
    summary: 'SOC project improving valet operations using low-code apps, dashboards, and process redesign.',
    tech: [
      'PowerApps', 'SharePoint', 'Power BI', 'Dispatch Logic', 'KPI Design',
      'CAPEX/OPEX Modeling', 'Process Mapping', 'Forecasting', 'Time Study', 'Documentation'
    ],
    problem: 'Improve vehicle routing and staffing for multi-location service centers.',
    solution: 'Led analysis and app/dashboard build; modeled costs and throughput to guide decisions.',
    implementation: [
      'Two-week sprints with stakeholders',
      'Attendant dashboard and intake→exit workflow digitization',
      'Move volume/labor forecasting and ROI analysis'
    ],
    outcomes: [
      '369% ROI; breakeven ~50 days',
      'Wait time reduced 90 → 35 minutes'
    ],
    highlights: [
      '369% ROI with 2.6-month payback',
      'Wait time reduced 90 → 35 minutes'
    ],
  },
  {
    id: 'corberosa-cold-brew',
    title: 'Production Line Design',
    company: 'SOC — Project Lead (Corberosa Coffee)',
    date: 'Jan 2024 – Jun 2024',
    category: 'Club Leadership',
    summary: 'Scaled cold brew production with process design, simulation, and financial modeling.',
    tech: [
      'Simulation Modeling', 'HACCP', 'Layout Design', 'Time Study', 'Throughput Analysis',
      'Financial Modeling', 'Traceability', 'Regulatory Compliance', 'Vendor Sourcing', 'Ergonomics'
    ],
    problem: 'Scale from 50 to 500 gallons/week while ensuring quality and safety.',
    solution: 'Designed facility layout, quality system, and scheduling optimization.',
    implementation: [
      'Discrete-event simulation and capacity planning',
      'HACCP framework and equipment selection',
      'NPV and breakeven analysis with risk assessment'
    ],
    outcomes: [
      '80% productivity improvement and phased implementation roadmap'
    ],
    media: [
      { label: 'LinkedIn PDF (embed)', url: 'https://media.licdn.com/dms/document/media/v2/D562DAQE2YGq99L9spg/profile-treasury-document-pdf-analyzed/profile-treasury-document-pdf-analyzed/0/1719088572331?e=1755734400&v=beta&t=sNf4rit-ftyPETHMo6tdXNPFYanzL8UwRkBukWlxyVI', type: 'pdf' }
    ],
  },
  {
    id: 'inspired-flight',
    title: 'Manufacturing Systems Enhancement',
    company: 'SOC — Member (Inspired Flight)',
    date: 'Jan 2023 – Jun 2023',
    category: 'Club Leadership',
    summary: 'Production efficiency and quality system improvements for scaling from prototype to volume.',
    tech: [
      'Quality Management System', 'Test Protocols', 'Process Standardization', 'Fixture Design', 'Layout Optimization',
      'Documentation', 'Safety Improvements', 'Readiness for Scale', 'Training Materials', 'Continuous Improvement'
    ],
    problem: 'Scaling from prototype to volume production under quality and supply constraints.',
    solution: 'Requirements, modular system design, quality framework, and supply risk assessment.',
    implementation: [
      'Work instructions and quality checkpoints',
      'Automated testing procedures for flight systems',
      'Team training materials'
    ],
    outcomes: [
      'Improved process consistency and readiness for scale'
    ],
  },

  // Academic
  {
    id: 'hayward-lumber',
    title: 'Hayward Lumber: Operations Analysis',
    company: 'Cal Poly — IME 223',
    date: 'Jan 2023 – Mar 2023',
    category: 'Academic',
    summary: 'Academic project analyzing operations constraints and improvement opportunities.',
    tech: [
      'Process Mapping', 'Time Study', 'Bottleneck Analysis', '5S', 'Layout Planning',
      'WIP Management', 'FIFO', 'KPI Tracking', 'Visio Diagrams', 'ROI Modeling'
    ],
    problem: 'Identify throughput and fulfillment bottlenecks.',
    solution: 'Mapped current state, identified constraints, proposed improvements.',
    implementation: [
      'Process walkthroughs and time studies',
      'Constraint identification and prioritization'
    ],
    outcomes: [
      'Actionable improvement roadmap'
    ],
  },
  {
    id: 'netflix-value-chain',
    title: 'Netflix: A Value Chain Analysis',
    company: 'Cal Poly — IME 460',
    date: 'Apr 2024 – Jun 2024',
    category: 'Academic',
    summary: 'Strategic and technical analysis of Netflix including ML personalization and cloud architecture.',
    tech: [
      'Recommendation Systems', 'A/B Testing', 'Experimentation Platform', 'Big Data Architecture', 'Cloud Cost Analysis',
      'Personalization Algorithms', 'Data Pipeline Design', 'Financial Modeling', 'Strategic Analysis', 'User Behavior Analytics'
    ],
    problem: 'Understand drivers of value creation and tech infrastructure at Netflix.',
    solution: 'Comprehensive analysis of recommendation systems, big data stack, experimentation, and ROI.',
    implementation: [
      'Analysis of collaborative/content-based filtering and deep learning',
      'Experiment design and platform evaluation',
      'Financial modeling and roadmap'
    ],
    outcomes: [
      '50+ page report with strategic recommendations and tech roadmap'
    ],
    media: [
      { label: 'LinkedIn Article', url: 'https://www.linkedin.com/pulse/netflix-value-chain-analysis-tyler-luby-howard-9gtrc/?trackingId=MdP%2FWSAAQzWo8sh14C4xmg%3D%3D', type: 'link' }
    ],
  },
  {
    id: 'biodiversity-analysis',
    title: 'National Parks Biodiversity Analysis',
    company: 'Cal Poly — IME 212',
    date: 'May 2025',
    category: 'Academic',
    summary: 'Advanced Python analytics and interactive visualization of biodiversity datasets.',
    tech: [
      'Python', 'pandas', 'Data Cleaning', 'Geospatial Analysis', 'Folium',
      'Interactive Dashboards', 'ANOVA', 'Regression', 'Visualization', 'Tableau'
    ],
    problem: 'Derive insights from 50k+ species records to understand diversity patterns across parks.',
    solution: 'Built statistical models, interactive maps, and dashboards to explore biodiversity signals.',
    implementation: [
      'ANOVA, regression, correlation, and visualization',
      'Interactive folium maps and dashboards',
      'Vectorized pipelines and robust error handling'
    ],
    outcomes: [
      'Professional-level documentation and rigorous analysis beyond course scope'
    ],
  },
  {
    id: 'fungi-architecture',
    title: 'Fungi in Functional and Aesthetic Architecture',
    company: 'Cal Poly',
    date: 'May 2024',
    category: 'Academic',
    summary: 'Interdisciplinary research on mycelium-based materials and sustainable design.',
    tech: [
      'Materials Analysis', 'Sustainability Metrics', 'Life Cycle Assessment', 'Economic Modeling', 'Performance Testing',
      'Thermal/Mechanical Properties', 'Research Synthesis', 'Report Writing', 'Environmental Impact', 'Applications Review'
    ],
    problem: 'Assess material properties and viability of fungi-based composites in architecture.',
    solution: 'Quantitative analysis of performance, environmental impact, and cost at scale.',
    implementation: [
      'Analysis of tensile, compression, and thermal properties',
      'Life cycle assessment and economic modeling',
      'Applications from acoustic panels to structural elements'
    ],
    outcomes: [
      '70% reduction in carbon footprint vs conventional materials; symposium submission'
    ],
    media: [
      { label: 'Research Paper', url: '#', type: 'pdf' }
    ],
  },

  // Internship (Marketing)
  {
    id: 'journeyblazers-linkedin',
    title: 'LinkedIn Content Strategy & Growth',
    company: 'JourneyBlazers',
    date: 'Oct 2023 – Dec 2023',
    category: 'Internship',
    summary: 'Data-driven content strategy using engagement prediction and attribution.',
    tech: [
      'Social Analytics', 'Content Strategy', 'A/B Testing', 'Engagement Modeling', 'Salesforce Integration',
      'Dashboarding', 'Audience Segmentation', 'Campaign Design', 'KPI Tracking', 'Reporting'
    ],
    problem: 'Limited social presence hindered lead generation and brand awareness.',
    solution: 'Built analytics pipeline, A/B testing, and targeted content strategies.',
    implementation: [
      'Engagement prediction model and timing analysis',
      'Competitor benchmarking and social listening',
      'Attribution connections from social to pipeline'
    ],
    outcomes: [
      '43% follower growth in 70 days; 8.2% avg engagement; +35% social-sourced leads'
    ],
  },

  // Research (Aerospace)
  {
    id: 'westt-research',
    title: 'WESTT: Aerospace Systems Study',
    company: 'Cal Poly — WESTT',
    date: 'Sep 2022 – Dec 2023',
    category: 'Research',
    summary: 'Research initiative exploring aerospace systems and testing methodologies.',
    tech: [
      'Systems Engineering', 'Test Planning', 'Data Collection', 'Analysis Methods', 'Protocol Design',
      'Lab Procedures', 'Safety Practices', 'Documentation', 'Results Synthesis', 'Presentation'
    ],
    problem: 'Investigate system performance and reliability under varying conditions.',
    solution: 'Defined test protocols and synthesized findings across experiments.',
    implementation: [
      'Test planning and data collection',
      'Analysis of system behaviors'
    ],
    outcomes: [
      'Consolidated insights to inform future research'
    ],
  },
] 