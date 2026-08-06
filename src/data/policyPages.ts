export interface PolicySection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface PolicyPage {
  slug: string;
  badge: string;
  title: string;
  highlight: string;
  summary: string;
  seoTitle: string;
  seoDescription: string;
  updated: string;
  sections: PolicySection[];
}

const UPDATED = "1 August 2026";

export const policyPages: PolicyPage[] = [
  {
    slug: "information-security",
    badge: "Governance",
    title: "Information Security",
    highlight: "Policy",
    summary:
      "How NETREX INC protects client systems, source code and data across all nine operating regions.",
    seoTitle: "Information Security Policy | NETREX Inc",
    seoDescription:
      "NETREX Inc information security policy: ISO 27001-aligned controls, encryption standards, access management, secure SDLC and incident response commitments.",
    updated: UPDATED,
    sections: [
      {
        heading: "Scope and governance",
        paragraphs: [
          "This policy applies to every NETREX INC employee, contractor and sub-processor with access to client systems, production environments or personal data. It is owned by the Chief Technology Officer and reviewed at least annually by the leadership team.",
          "Our control framework is aligned to ISO/IEC 27001 and SOC 2 Trust Services Criteria for security, availability and confidentiality.",
        ],
      },
      {
        heading: "Technical controls",
        bullets: [
          "TLS 1.2+ in transit and AES-256 encryption at rest for all client data.",
          "Least-privilege, role-based access with mandatory multi-factor authentication.",
          "Centralised secret management; no credentials in source control.",
          "Automated dependency and container scanning on every pull request.",
          "Segregated development, staging and production environments.",
          "Encrypted, geo-redundant backups with tested restore procedures.",
        ],
      },
      {
        heading: "Secure development lifecycle",
        bullets: [
          "Peer code review required before merge to protected branches.",
          "Static analysis, linting and automated test gates in CI/CD.",
          "Annual penetration testing on flagship platforms.",
          "Threat modelling for new architectures handling personal or payment data.",
        ],
      },
      {
        heading: "Incident response",
        paragraphs: [
          "Suspected incidents are triaged within one hour of detection. Confirmed breaches involving personal data are reported to the affected controller without undue delay and within 72 hours, in line with GDPR Article 33.",
          "Report a suspected vulnerability or incident to security@netrexinc.com.",
        ],
      },
    ],
  },
  {
    slug: "accessibility-statement",
    badge: "Inclusion",
    title: "Accessibility",
    highlight: "Statement",
    summary:
      "Our commitment to WCAG 2.2 Level AA conformance across netrexinc.com and the products we build.",
    seoTitle: "Accessibility Statement | NETREX Inc",
    seoDescription:
      "NETREX Inc accessibility statement covering WCAG 2.2 AA conformance, assistive technology support, known limitations and how to request accessible alternatives.",
    updated: UPDATED,
    sections: [
      {
        heading: "Our commitment",
        paragraphs: [
          "NETREX INC is committed to making digital experiences usable by everyone, including people who rely on screen readers, keyboard navigation, magnification or reduced-motion settings.",
          "We target WCAG 2.2 Level AA as the baseline for our own website and for every client platform we design and build.",
        ],
      },
      {
        heading: "Measures we take",
        bullets: [
          "Semantic HTML structure with a single H1 and logical heading order on every page.",
          "Colour contrast of at least 4.5:1 for body text in both light and dark themes.",
          "Full keyboard operability with visible focus states.",
          "Descriptive alternative text for all meaningful imagery.",
          "Respect for the prefers-reduced-motion setting in animations.",
          "Manual audits with NVDA, VoiceOver and keyboard-only testing before release.",
        ],
      },
      {
        heading: "Known limitations",
        paragraphs: [
          "Third-party embeds such as map frames and video players may not fully meet AA criteria. Where an embed limits access, we provide an equivalent text or link alternative.",
        ],
      },
      {
        heading: "Feedback",
        paragraphs: [
          "If you encounter an accessibility barrier, email accessibility@netrexinc.com with the page URL and the assistive technology you use. We aim to respond within five working days and to remediate confirmed issues within 30 days.",
        ],
      },
    ],
  },
  {
    slug: "cookie-policy",
    badge: "Privacy",
    title: "Cookie",
    highlight: "Policy",
    summary: "What cookies netrexinc.com sets, why we set them, and how you can control them.",
    seoTitle: "Cookie Policy | NETREX Inc",
    seoDescription:
      "Learn which cookies NETREX Inc uses for essential functionality, analytics and marketing, their retention periods, and how to manage or withdraw consent.",
    updated: UPDATED,
    sections: [
      {
        heading: "What cookies are",
        paragraphs: [
          "Cookies are small text files stored on your device that help a website remember your preferences and understand how it is used.",
        ],
      },
      {
        heading: "Categories we use",
        bullets: [
          "Strictly necessary: language selection, theme preference, security and load balancing. These cannot be switched off.",
          "Analytics: aggregated page views and engagement metrics used to improve content. Set only with consent in the EEA and UK.",
          "Marketing: campaign attribution for paid channels. Set only with consent.",
        ],
      },
      {
        heading: "Retention",
        paragraphs: [
          "Session cookies expire when you close your browser. Persistent cookies used for preferences and analytics expire no later than 13 months after they are set.",
        ],
      },
      {
        heading: "Managing your choices",
        paragraphs: [
          "You can clear or block cookies at any time in your browser settings, and withdraw consent by emailing privacy@netrexinc.com. Blocking strictly necessary cookies may break site functionality such as language switching.",
        ],
      },
    ],
  },
  {
    slug: "gdpr-data-processing",
    badge: "Compliance",
    title: "GDPR & Data",
    highlight: "Processing",
    summary:
      "Our role as processor, the safeguards we apply to international transfers, and your rights as a data subject.",
    seoTitle: "GDPR & Data Processing Addendum | NETREX Inc",
    seoDescription:
      "NETREX Inc GDPR commitments: controller and processor roles, lawful bases, Standard Contractual Clauses for transfers, data subject rights and breach notification.",
    updated: UPDATED,
    sections: [
      {
        heading: "Roles",
        paragraphs: [
          "When you contact us or subscribe to our updates, NETREX INC acts as data controller. When we build, host or operate systems on your behalf, we act as data processor under your instructions and a signed Data Processing Agreement.",
        ],
      },
      {
        heading: "Lawful bases",
        bullets: [
          "Contract performance for delivery of agreed services.",
          "Legitimate interests for business communications with existing clients.",
          "Consent for marketing communications and non-essential cookies.",
          "Legal obligation for tax, accounting and statutory record keeping.",
        ],
      },
      {
        heading: "International transfers",
        paragraphs: [
          "Where personal data leaves the EEA or UK, we rely on adequacy decisions or the European Commission Standard Contractual Clauses combined with a transfer impact assessment and supplementary technical measures such as encryption and pseudonymisation.",
        ],
      },
      {
        heading: "Your rights",
        bullets: [
          "Access, rectification and erasure of your personal data.",
          "Restriction of and objection to processing.",
          "Data portability in a structured, machine-readable format.",
          "Withdrawal of consent at any time.",
          "Complaint to your local supervisory authority.",
        ],
      },
      {
        heading: "Exercising your rights",
        paragraphs: [
          "Send requests to privacy@netrexinc.com. We verify identity and respond within one calendar month, extendable by two months for complex requests with notice to you.",
        ],
      },
    ],
  },
  {
    slug: "sub-processors",
    badge: "Transparency",
    title: "Sub-processor",
    highlight: "Register",
    summary: "The categories of vendors that may process client data on our behalf.",
    seoTitle: "Sub-processors | NETREX Inc",
    seoDescription:
      "NETREX Inc sub-processor register: categories of infrastructure, communication and analytics vendors, their purpose, and how we notify clients of changes.",
    updated: UPDATED,
    sections: [
      {
        heading: "How we appoint sub-processors",
        paragraphs: [
          "Every sub-processor is assessed for security posture, data residency and contractual safeguards before appointment, and is bound by written terms no less protective than our own commitments to clients.",
        ],
      },
      {
        heading: "Current categories",
        bullets: [
          "Cloud infrastructure and hosting (AWS, Google Cloud, Microsoft Azure, Hostinger).",
          "Managed databases, storage and backup services.",
          "Transactional email and notification delivery.",
          "Error monitoring, logging and performance analytics.",
          "Customer support and ticketing platforms.",
          "Payment processing for invoicing (no card data is stored by NETREX).",
        ],
      },
      {
        heading: "Change notification",
        paragraphs: [
          "Clients under an active Data Processing Agreement receive at least 30 days notice of any new or replaced sub-processor and may object on reasonable data protection grounds. Request the itemised register at privacy@netrexinc.com.",
        ],
      },
    ],
  },
  {
    slug: "service-level-agreement",
    badge: "Delivery",
    title: "Service Level",
    highlight: "Agreement",
    summary: "Standard availability targets, support hours and response commitments for managed engagements.",
    seoTitle: "Service Level Agreement | NETREX Inc",
    seoDescription:
      "NETREX Inc standard SLA: 99.9% uptime target, severity definitions, response and resolution times, support hours across nine regions, and service credits.",
    updated: UPDATED,
    sections: [
      {
        heading: "Availability target",
        paragraphs: [
          "For managed hosting and maintenance retainers, NETREX INC targets 99.9% monthly availability of the production application layer, excluding scheduled maintenance announced at least 72 hours in advance and events outside our reasonable control.",
        ],
      },
      {
        heading: "Severity definitions and response",
        bullets: [
          "P1 critical outage or data loss: 1 hour response, continuous effort until mitigated.",
          "P2 major functional degradation: 4 business hours response, workaround targeted within 1 business day.",
          "P3 minor defect: 1 business day response, fix in the next scheduled release.",
          "P4 request or question: 2 business days response.",
        ],
      },
      {
        heading: "Support coverage",
        paragraphs: [
          "Follow-the-sun coverage is provided across our Dubai, London, New York, Singapore and Lahore delivery centres. P1 incidents are handled 24/7 for clients on Enterprise retainers.",
        ],
      },
      {
        heading: "Service credits",
        paragraphs: [
          "If monthly availability falls below the target, clients may request a service credit of 5% of the monthly retainer for each 0.5% below target, capped at 25%, by written claim within 30 days.",
        ],
      },
    ],
  },
  {
    slug: "acceptable-use",
    badge: "Usage",
    title: "Acceptable Use",
    highlight: "Policy",
    summary: "Activities that are prohibited on systems built, hosted or operated by NETREX INC.",
    seoTitle: "Acceptable Use Policy | NETREX Inc",
    seoDescription:
      "NETREX Inc acceptable use policy setting out prohibited content and activities on hosted systems, enforcement steps and how to report abuse.",
    updated: UPDATED,
    sections: [
      {
        heading: "Prohibited activity",
        bullets: [
          "Unlawful, defamatory, discriminatory or infringing content.",
          "Distribution of malware, phishing kits or unsolicited bulk email.",
          "Unauthorised penetration testing, scanning or load testing of our infrastructure.",
          "Attempts to circumvent authentication, rate limits or tenant isolation.",
          "Resale of hosting capacity without written agreement.",
          "Processing of special category or payment data outside agreed architecture.",
        ],
      },
      {
        heading: "Enforcement",
        paragraphs: [
          "We investigate reported abuse and may suspend affected workloads where there is a risk to other clients or to network integrity. Where practical we notify the account owner before suspension and provide a remediation window.",
        ],
      },
      {
        heading: "Reporting abuse",
        paragraphs: ["Report abuse to abuse@netrexinc.com with logs, timestamps and affected URLs."],
      },
    ],
  },
  {
    slug: "anti-bribery",
    badge: "Ethics",
    title: "Anti-Bribery &",
    highlight: "Anti-Corruption",
    summary: "Zero tolerance for bribery, facilitation payments and improper influence in any market.",
    seoTitle: "Anti-Bribery & Anti-Corruption Policy | NETREX Inc",
    seoDescription:
      "NETREX Inc anti-bribery and anti-corruption policy aligned to the UK Bribery Act and US FCPA, covering gifts, third parties, record keeping and reporting.",
    updated: UPDATED,
    sections: [
      {
        heading: "Standard",
        paragraphs: [
          "NETREX INC prohibits bribery in every form, whether offered, promised, given, requested or accepted, directly or through a third party. This policy is aligned to the UK Bribery Act 2010, the US Foreign Corrupt Practices Act and applicable UAE and GCC anti-corruption law.",
        ],
      },
      {
        heading: "Specific prohibitions",
        bullets: [
          "Facilitation payments to speed up routine government action.",
          "Political donations made in the name of the company.",
          "Gifts or hospitality intended to influence a business decision.",
          "Kickbacks in supplier, referral or partner arrangements.",
        ],
      },
      {
        heading: "Third parties and record keeping",
        paragraphs: [
          "Agents, resellers and referral partners are screened before appointment and contractually bound to equivalent standards. All payments must be recorded accurately in our books with supporting documentation.",
        ],
      },
      {
        heading: "Reporting",
        paragraphs: [
          "Concerns can be raised confidentially at ethics@netrexinc.com. Retaliation against anyone reporting in good faith is itself a disciplinary offence.",
        ],
      },
    ],
  },
  {
    slug: "modern-slavery",
    badge: "Human Rights",
    title: "Modern Slavery",
    highlight: "Statement",
    summary: "Steps taken to ensure slavery and human trafficking do not occur in our business or supply chain.",
    seoTitle: "Modern Slavery Statement | NETREX Inc",
    seoDescription:
      "NETREX Inc modern slavery and human rights statement: supply chain due diligence, recruitment safeguards, training and grievance mechanisms.",
    updated: UPDATED,
    sections: [
      {
        heading: "Our position",
        paragraphs: [
          "NETREX INC has zero tolerance for forced labour, child labour, debt bondage and human trafficking, in our own operations and throughout our supply chain.",
        ],
      },
      {
        heading: "Due diligence",
        bullets: [
          "Right-to-work verification for every hire in every jurisdiction.",
          "No recruitment fees charged to candidates, and no retention of original identity documents.",
          "Supplier onboarding questionnaire covering labour standards and wage practices.",
          "Contractual right to audit staffing and outsourcing partners.",
        ],
      },
      {
        heading: "Training and grievance",
        paragraphs: [
          "Managers involved in hiring and procurement receive annual training on identifying exploitation indicators. Workers and suppliers can raise concerns confidentially at ethics@netrexinc.com.",
        ],
      },
    ],
  },
  {
    slug: "code-of-conduct",
    badge: "Culture",
    title: "Business Code of",
    highlight: "Conduct",
    summary: "The standards every NETREX employee, contractor and supplier is expected to uphold.",
    seoTitle: "Business Code of Conduct | NETREX Inc",
    seoDescription:
      "NETREX Inc code of conduct: integrity, conflicts of interest, confidentiality, fair competition, respectful workplace and supplier expectations.",
    updated: UPDATED,
    sections: [
      {
        heading: "Core expectations",
        bullets: [
          "Act honestly and keep commitments made to clients and colleagues.",
          "Disclose conflicts of interest before they influence a decision.",
          "Protect client confidentiality and intellectual property at all times.",
          "Compete fairly; never misrepresent a competitor or a deliverable.",
          "Maintain a workplace free from harassment and discrimination.",
          "Use company systems and AI tools responsibly and within client agreements.",
        ],
      },
      {
        heading: "Supplier expectations",
        paragraphs: [
          "Suppliers and subcontractors are required to meet this code, applicable labour law and our information security requirements as a condition of engagement.",
        ],
      },
      {
        heading: "Consequences",
        paragraphs: [
          "Breaches are investigated by the People and Legal functions and may result in disciplinary action, contract termination or referral to authorities.",
        ],
      },
    ],
  },
  {
    slug: "quality-policy",
    badge: "Quality",
    title: "Quality Management",
    highlight: "Policy",
    summary: "How we plan, verify and continuously improve delivery quality on every engagement.",
    seoTitle: "Quality Management Policy | NETREX Inc",
    seoDescription:
      "NETREX Inc quality policy aligned to ISO 9001 principles: defined delivery lifecycle, acceptance criteria, measurable KPIs and continuous improvement.",
    updated: UPDATED,
    sections: [
      {
        heading: "Framework",
        paragraphs: [
          "Our quality management approach follows ISO 9001 principles: customer focus, leadership accountability, process approach, evidence-based decisions and continual improvement.",
        ],
      },
      {
        heading: "Delivery controls",
        bullets: [
          "Written scope, acceptance criteria and definition of done for every milestone.",
          "Two-stage review: peer technical review plus delivery lead sign-off.",
          "Automated regression, accessibility and performance checks before release.",
          "Documented handover including architecture notes and runbooks.",
        ],
      },
      {
        heading: "Measurement",
        bullets: [
          "On-time milestone delivery rate.",
          "Defect escape rate per release.",
          "Core Web Vitals and Lighthouse scores at launch.",
          "Client satisfaction score collected at every project close.",
        ],
      },
    ],
  },
  {
    slug: "environmental-policy",
    badge: "Sustainability",
    title: "Environmental",
    highlight: "Policy",
    summary: "Reducing the carbon intensity of the software we build and the offices we run.",
    seoTitle: "Environmental Policy | NETREX Inc",
    seoDescription:
      "NETREX Inc environmental policy: efficient cloud architecture, green hosting regions, sustainable web design practices and office footprint reduction.",
    updated: UPDATED,
    sections: [
      {
        heading: "Commitments",
        bullets: [
          "Prefer cloud regions with published renewable energy coverage.",
          "Right-size infrastructure and use autoscaling to cut idle compute.",
          "Apply sustainable web design: optimised media, lazy loading, minimal payloads.",
          "Default to remote-first collaboration to reduce business travel.",
          "Digital-first documentation and responsible e-waste disposal in all offices.",
        ],
      },
      {
        heading: "Measurement and review",
        paragraphs: [
          "We track page weight and transfer size as proxy sustainability metrics on delivered sites, and review this policy annually alongside our CSR reporting.",
        ],
      },
    ],
  },
  {
    slug: "whistleblower-policy",
    badge: "Governance",
    title: "Whistleblower",
    highlight: "Policy",
    summary: "A protected channel for raising concerns about wrongdoing without fear of retaliation.",
    seoTitle: "Whistleblower Policy | NETREX Inc",
    seoDescription:
      "NETREX Inc whistleblower policy: what to report, confidential reporting channels, investigation process and protection from retaliation.",
    updated: UPDATED,
    sections: [
      {
        heading: "What to report",
        bullets: [
          "Fraud, bribery, theft or misuse of company or client funds.",
          "Data protection or information security violations.",
          "Health, safety or labour rights breaches.",
          "Discrimination, harassment or abuse of authority.",
          "Deliberate concealment of any of the above.",
        ],
      },
      {
        heading: "How to report",
        paragraphs: [
          "Reports may be sent to ethics@netrexinc.com or directly to any member of the leadership team. Anonymous reports are accepted and investigated where sufficient detail is provided.",
        ],
      },
      {
        heading: "Protection and process",
        paragraphs: [
          "Reports are acknowledged within five working days and investigated by an independent reviewer with no conflict of interest. Retaliation against a good-faith reporter is a serious disciplinary offence.",
        ],
      },
    ],
  },
  {
    slug: "refund-policy",
    badge: "Commercial",
    title: "Refund & Cancellation",
    highlight: "Policy",
    summary: "How deposits, milestones and retainers are handled if an engagement changes or ends.",
    seoTitle: "Refund & Cancellation Policy | NETREX Inc",
    seoDescription:
      "NETREX Inc refund and cancellation policy covering project deposits, milestone billing, retainer notice periods and dispute resolution.",
    updated: UPDATED,
    sections: [
      {
        heading: "Project engagements",
        paragraphs: [
          "Project work is billed against agreed milestones. Deposits secure delivery capacity and are non-refundable once discovery or design work has commenced, except where NETREX fails to deliver an accepted milestone.",
        ],
      },
      {
        heading: "Retainers",
        paragraphs: [
          "Monthly retainers may be cancelled with 30 days written notice. Unused hours do not carry over beyond the following billing cycle unless stated in the contract.",
        ],
      },
      {
        heading: "Refund eligibility",
        bullets: [
          "Duplicate or incorrectly charged invoices are refunded in full.",
          "Pre-paid work not yet started is refunded less transaction fees.",
          "Completed and accepted deliverables are not refundable.",
        ],
      },
      {
        heading: "Disputes",
        paragraphs: [
          "Raise billing disputes at accounts@netrexinc.com within 30 days of the invoice date. We aim to resolve disputes within 15 working days before any escalation to the governing jurisdiction named in your contract.",
        ],
      },
    ],
  },
];

export const getPolicyPage = (slug?: string) => policyPages.find((p) => p.slug === slug);
