import type { Project } from '../components/ProjectCard'

export const projects: Project[] = [
  {
    id: 'tesla-valet-automation',
    title: 'Valet Operations Automation',
    category: 'Internship',
    summary: 'Automated valet scheduling, routing, and real-time dashboards for Tesla service centers.',
    tech: ['Python', 'OR-Tools', 'NetworkX', 'PostgreSQL', 'Tableau', 'APIs'],
    problem: 'Manual valet scheduling and routing caused delays and inefficiencies at service centers.',
    solution: 'Built optimization and predictive models with real-time dashboarding to automate routing and staffing decisions.',
    implementation: [
      'Routing optimization with Python (NetworkX, OR-Tools) and predictive scheduling',
      'PostgreSQL schema for real-time vehicle status tracking',
      'Time-series forecasting (ARIMA) and Monte Carlo scenario simulation',
      'Real-time KPI dashboard and API integrations for diagnostics'
    ],
    outcomes: [
      '45% increase in service throughput and 30% reduction in staff requirements',
      'Customer wait times reduced from 90 to 35 minutes',
      '369% ROI with 2.6-month payback; $587,500 annual savings'
    ],
  },
  {
    id: 'rfnr-data-warehouse',
    title: 'Multi-Client Database Unification',
    category: 'Internship',
    summary: 'Unified data warehouse and API layer across 50+ accounting clients with automated reconciliation.',
    tech: ['Python', 'PostgreSQL', 'REST APIs', 'RBAC', 'ETL'],
    problem: 'Disparate client systems and formats led to inconsistent reporting and manual reconciliation.',
    solution: 'Designed a star-schema warehouse, ETL pipelines, and reconciliation engine with role-based security.',
    implementation: [
      'Python ETL for extracting from QuickBooks, Xero, Sage and proprietary formats',
      'Dimensional modeling (star schema), change tracking and audit trail',
      'Automated nightly sync, exception handling, and backup strategy',
      'RESTful APIs for client portal integration with RBAC and encryption'
    ],
    outcomes: [
      'Monthly close reduced from 5 days to 1 day',
      '99.7% data accuracy; $200k annual savings',
      'Query times reduced by 75% via indexing strategy'
    ],
  },
  {
    id: 'rivian-supply-chain-risk',
    title: 'Supply Chain Risk Assessment & Mitigation',
    category: 'Internship',
    summary: 'Probabilistic risk modeling and real-time dashboards across multi-tier supplier network.',
    tech: ['Python', 'NetworkX', 'Tableau', 'SAP HANA', 'Snowflake'],
    problem: 'Limited visibility into disruption risks across a complex multi-tier supplier network.',
    solution: 'Built predictive risk models, network analysis, and live dashboards to enable proactive mitigation.',
    implementation: [
      'Monte Carlo simulation and supplier financial distress prediction',
      'ERP and external risk feed integration; GIS risk mapping',
      'Graph algorithms to identify critical path dependencies',
      'Automated alerting and scenario planning for disruption response'
    ],
    outcomes: [
      '85% coverage of Tier 1–3 suppliers; 72-hour early warning capability',
      '$2.3M cost avoidance and 45% faster disruption response'
    ],
  },
  {
    id: 'gensco-safety-analytics',
    title: 'Comprehensive Safety Analytics Dashboard',
    category: 'Internship',
    summary: 'Predictive safety analytics with unified data model and interactive Power BI dashboards.',
    tech: ['Power BI', 'Python', 'SQL', 'R', 'M Code'],
    problem: 'Manual incident tracking across 5 departments with no predictive capabilities or unified reporting.',
    solution: 'Integrated multi-source safety data and built predictive analytics with interactive dashboards and alerts.',
    implementation: [
      'Unified data model across incidents, employees, equipment, and environment factors',
      'Isolation Forest anomaly detection (Python) plus statistical testing (ANOVA, regression, chi-squared)',
      'T-SQL stored procedures for automated refresh and cleansing',
      '15+ interactive dashboards with real-time alerts'
    ],
    outcomes: [
      '40% reduction in incidents; 65% faster response time',
      '80% decrease in manual data entry; 100% adoption in one week',
      '87% predictive accuracy for high-risk scenarios'
    ],
  },
  {
    id: 'rovisys-control-systems',
    title: 'Process Control System Integration',
    category: 'Internship',
    summary: 'Control systems integration with alarm management, historian, and reporting for manufacturing.',
    tech: ['PLC', 'FactoryTalk View', 'OSIsoft PI', 'EtherNet/IP'],
    problem: 'Need for standardized, reliable control systems with safety and compliance across sites.',
    solution: 'Designed ISA-18.2 alarm philosophy, P&ID-based HMI, historian, and automated reporting.',
    implementation: [
      'Allen-Bradley ControlLogix with GuardLogix safety PLCs',
      'OSISoft PI historian, shift and compliance reporting',
      'EtherNet/IP network with managed switches and fiber',
      'Reusable configuration templates and troubleshooting guides'
    ],
    outcomes: [
      '25% reduced commissioning time; zero device failures at startup',
      '40% reduction in support calls via documentation and templates'
    ],
  },
  {
    id: 'netflix-value-chain',
    title: 'Netflix: A Value Chain Analysis',
    category: 'Academic',
    summary: 'Strategic and technical analysis of Netflix including ML personalization and cloud architecture.',
    tech: ['Analytics', 'ML', 'AWS', 'Hadoop/Spark'],
    problem: 'Understand drivers of value creation and tech infrastructure at Netflix.',
    solution: 'Comprehensive analysis of recommendation systems, big data stack, experimentation, and ROI.',
    implementation: [
      'Analysis of collaborative/content-based filtering and deep learning',
      'A/B testing framework and big data (Hadoop, Spark) evaluation',
      'Financial modeling with growth projections and infrastructure roadmap'
    ],
    outcomes: [
      '50+ page report with strategic recommendations and tech roadmap'
    ],
  },
  {
    id: 'biodiversity-analysis',
    title: 'National Parks Biodiversity Analysis',
    category: 'Academic',
    summary: 'Advanced Python analytics and interactive visualization of biodiversity datasets.',
    tech: ['Python', 'pandas', 'plotly', 'folium', 'scipy'],
    problem: 'Derive insights from 50k+ species records to understand diversity patterns across parks.',
    solution: 'Built statistical models, interactive maps, and dashboards to explore biodiversity signals.',
    implementation: [
      'ANOVA, regression, correlation, and effect size analysis',
      'Interactive folium maps and Plotly dashboards',
      'Vectorized pipelines and robust error handling'
    ],
    outcomes: [
      'Professional-level documentation and rigorous analysis beyond course scope'
    ],
  },
  {
    id: 'soc-tesla-ops',
    title: 'SOC: Tesla Valet Operations Optimization',
    category: 'Club Leadership',
    summary: 'Operations research, simulation, and data mining to improve valet operations at scale.',
    tech: ['VRP', 'Arena', 'Simulation', 'Process Mapping'],
    problem: 'Improve vehicle routing and staffing for multi-location service centers.',
    solution: 'Led 6-person team to apply VRP, simulation, and process redesign.',
    implementation: [
      'Agile 2-week sprints and stakeholder management',
      'Arena simulation and process mapping',
      'Data mining over 100k service records'
    ],
    outcomes: [
      'Throughput and labor efficiency gains; reusable documentation for future teams'
    ],
  },
  {
    id: 'corberosa-cold-brew',
    title: 'Corberosa Coffee: Production Line Design',
    category: 'Club Leadership',
    summary: 'Scaled cold brew production with process design, simulation, and financial modeling.',
    tech: ['AnyLogic', 'LP Optimization', 'HACCP'],
    problem: 'Scale from 50 to 500 gallons/week while ensuring quality and safety.',
    solution: 'Designed facility layout, quality system, and scheduling optimization.',
    implementation: [
      'Discrete-event simulation and capacity planning',
      'HACCP quality framework and equipment selection',
      'NPV and breakeven analysis with risk assessment'
    ],
    outcomes: [
      '80% productivity improvement and phased implementation roadmap'
    ],
  },
  {
    id: 'journeyblazers-linkedin',
    title: 'LinkedIn Content Strategy & Growth',
    category: 'Internship',
    summary: 'Data-driven content strategy using ML engagement prediction and attribution.',
    tech: ['LinkedIn API', 'ML', 'Python', 'Salesforce'],
    problem: 'Limited social presence hindered lead generation and brand awareness.',
    solution: 'Built analytics pipeline, A/B testing, and targeted content strategies.',
    implementation: [
      'Engagement prediction model and timing analysis',
      'Competitor benchmarking and social listening',
      'Attribution modeling from social to pipeline'
    ],
    outcomes: [
      '43% follower growth in 70 days; 8.2% avg engagement; +35% social-sourced leads'
    ],
  },
  {
    id: 'fungi-architecture',
    title: 'Fungi in Functional and Aesthetic Architecture',
    category: 'Research',
    summary: 'Interdisciplinary research on mycelium-based materials and sustainable design.',
    tech: ['Materials Science', 'Sustainability', 'CAD'],
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
  },
] 