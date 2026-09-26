import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  Database,
  FileSpreadsheet,
  GraduationCap,
  LineChart,
  Mail,
  Sparkles,
} from 'lucide-react'

const experience = [
  {
    period: 'Jan 2023 — Sep 2025',
    role: 'Data Monitoring & Evaluation Officer',
    organization: 'Monitoring, reporting & performance insights',
    summary:
      'Turned information from multiple sources into clear decision support, partnering with technical and non-technical stakeholders to shape reporting around real business needs.',
    highlights: [
      'Built and maintained interactive Power BI dashboards for KPI and service-delivery monitoring.',
      'Automated recurring reporting with advanced Excel and Power Query formulas.',
      'Prepared performance reports and helped improve data accessibility, reporting quality and processes.',
    ],
  },
  {
    period: 'Feb 2021 — Sep 2022',
    role: 'Data Administrator',
    organization: 'Data quality, governance & operations',
    summary:
      'Maintained structured operational datasets and produced reliable management reporting to support performance and continuous improvement.',
    highlights: [
      'Analysed performance data to identify organizational trends.',
      'Maintained high standards for data quality and system governance.',
      'Supported more effective administrative operations through analysis and reporting.',
    ],
  },
  {
    period: 'Aug 2020 — Oct 2020',
    role: 'Graduate Intern',
    organization: 'Dataville Research LLC',
    summary:
      'Supported research and monitoring projects with careful data preparation and analysis.',
    highlights: [
      'Contributed to data collection, cleaning, validation and analysis.',
      'Helped maintain accurate datasets and improve reporting reliability.',
    ],
  },
]

const skills = [
  {
    title: 'Data & analysis',
    icon: LineChart,
    items: ['SQL · joins, CTEs, aggregations', 'Statistical analysis', 'Trend interpretation', 'Data cleaning & validation'],
  },
  {
    title: 'Reporting & BI',
    icon: BarChart3,
    items: ['Power BI · DAX & Power Query', 'Data modelling', 'Dashboard development', 'KPI & performance reporting'],
  },
  {
    title: 'Data operations',
    icon: Database,
    items: ['ETL / ELT reporting processes', 'Dataset validation', 'Data quality assurance', 'Governance'],
  },
  {
    title: 'Business partnership',
    icon: BriefcaseBusiness,
    items: ['Stakeholder engagement', 'Requirements gathering', 'Operational reporting', 'Insight communication'],
  },
]

const education = [
  { degree: 'Master of Management in Data Science', dates: 'Sep 2023 — Sep 2025' },
  { degree: 'Master of Science in Agronomy · Soil Fertility', dates: 'Jun 2018 — Feb 2020' },
  { degree: 'Bachelor of Agriculture · Soil Science & Land Management', dates: 'Oct 2010 — Nov 2015' },
]

const certifications = [
  { name: 'Introduction to Securities & Investment (International) English', year: '2025' },
  { name: 'SQL', year: '2025' },
  { name: 'Power BI', year: '2025' },
  { name: 'Business Analyst with Excel: From Beginner to Advanced', year: '2024' },
]

function SectionHeading({
  number,
  label,
  title,
}: {
  number: string
  label: string
  title: string
}) {
  return (
    <div className="section-heading">
      <span className="section-number">{number}</span>
      <div>
        <p className="eyebrow">{label}</p>
        <h2>{title}</h2>
      </div>
    </div>
  )
}

function SiteHeader() {
  return (
    <header className="site-header">
      <a aria-label="Dickson Samuel Akinnawo — home" className="wordmark" href="#top">
        <span className="wordmark-mark">DS</span>
        <span className="wordmark-name">Dickson Akinnawo</span>
      </a>
      <nav aria-label="Main navigation" className="main-nav">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#expertise">Expertise</a>
        <a href="#education">Education</a>
      </nav>
      <a className="header-cta" href="#contact">
        Get in touch <ArrowUpRight aria-hidden="true" size={15} />
      </a>
    </header>
  )
}

function Hero() {
  return (
    <section aria-labelledby="hero-title" className="hero" id="top">
      <div className="hero-copy">
        <div className="availability"><span /> BUSINESS ANALYST · DATA PROFESSIONAL</div>
        <h1 id="hero-title">
          Better decisions
          <br />
          begin with <em>better</em>
          <br />
          questions.
        </h1>
        <p className="hero-intro">
          I&apos;m Dickson Samuel Akinnawo — I bring business needs and data together to make the complex clear, useful, and ready for action.
        </p>
        <div className="hero-actions">
          <a className="button button-dark" href="#experience">
            Explore my experience <ArrowDown aria-hidden="true" size={16} />
          </a>
          <a className="button button-light" download href="/dickson-samuel-akinnawo-cv.pdf">
            <FileSpreadsheet aria-hidden="true" size={16} /> Download CV
          </a>
        </div>
      </div>
      <aside aria-label="Professional snapshot" className="hero-panel">
        <div className="panel-topline"><span>ANALYST&apos;S NOTEBOOK</span><span>01 / 04</span></div>
        <div aria-hidden="true" className="data-visual">
          <div className="visual-label"><span>RAW DATA</span><span>→</span><span>REAL-WORLD ACTION</span></div>
          <div className="bar-chart">
            {[36, 53, 43, 71, 60, 86, 68, 100, 78, 91, 73, 112].map((height, index) => (
              <span key={index} style={{ height: `${height}px` }} />
            ))}
          </div>
          <div className="chart-baseline"><span>Collect</span><span>Connect</span><span>Clarify</span><span>Improve</span></div>
        </div>
        <div className="panel-note">
          <Sparkles aria-hidden="true" size={17} />
          <p>From scattered information to a story stakeholders can use.</p>
        </div>
        <div className="panel-bottom"><span>SQL</span><span>POWER BI</span><span>EXCEL</span><span>INSIGHT</span></div>
      </aside>
      <div aria-hidden="true" className="hero-index">PORTFOLIO / 2025</div>
    </section>
  )
}

function AboutSection() {
  return (
    <section className="content-section about-section" id="about">
      <SectionHeading number="01" label="A little about me" title="I make data make sense." />
      <div className="about-copy">
        <p className="about-lede">
          I&apos;m a business analyst and data professional who helps teams move from questions to confident decisions.
        </p>
        <p>
          My work spans requirements gathering, data analysis, reporting and process improvement. I&apos;ve worked closely with people across technical and non-technical teams to understand what they need, find the story in complex datasets, and deliver practical solutions that support better service and stronger operations.
        </p>
        <p>
          I bring an analytical mindset, clear communication and a commitment to continuous improvement — with a background that connects data science, agriculture and real-world operational work.
        </p>
      </div>
      <div className="principles-row">
        <div><span>01</span><strong>Start with the need</strong><p>Understand the question before building the report.</p></div>
        <div><span>02</span><strong>Make insight accessible</strong><p>Give every stakeholder a clear way into the data.</p></div>
        <div><span>03</span><strong>Turn insight into action</strong><p>Focus analysis on practical, lasting improvement.</p></div>
      </div>
    </section>
  )
}

function ExperienceSection() {
  return (
    <section className="content-section experience-section" id="experience">
      <SectionHeading number="02" label="Where I&apos;ve contributed" title="Experience that adds up." />
      <div className="experience-list">
        {experience.map((item, index) => (
          <article className="experience-item" key={item.role}>
            <div className="experience-meta">
              <span className="experience-index">0{index + 1}</span>
              <span>{item.period}</span>
            </div>
            <div className="experience-details">
              <h3>{item.role}</h3>
              <p className="experience-org">{item.organization}</p>
              <p className="experience-summary">{item.summary}</p>
              <ul>
                {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function ExpertiseSection() {
  return (
    <section className="content-section expertise-section" id="expertise">
      <SectionHeading number="03" label="What I bring to the table" title="Tools, thinking & teamwork." />
      <div className="skills-grid">
        {skills.map(({ title, icon: Icon, items }, index) => (
          <article className="skill-card" key={title}>
            <div className="skill-card-top"><span>0{index + 1}</span><Icon aria-hidden="true" size={20} strokeWidth={1.6} /></div>
            <h3>{title}</h3>
            <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
        ))}
      </div>
    </section>
  )
}

function EducationSection() {
  return (
    <section className="content-section education-section" id="education">
      <SectionHeading number="04" label="Learning & development" title="A foundation built on learning." />
      <div className="education-layout">
        <div className="education-list">
          {education.map((item) => (
            <article className="education-item" key={item.degree}>
              <GraduationCap aria-hidden="true" size={20} strokeWidth={1.6} />
              <div><h3>{item.degree}</h3><p>{item.dates}</p></div>
            </article>
          ))}
        </div>
        <div className="certifications">
          <h3>Professional certificates</h3>
          {certifications.map((item) => (
            <div className="certification-item" key={item.name}><span>{item.name}</span><span>{item.year}</span></div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-kicker"><Mail aria-hidden="true" size={16} /> OPEN TO PROFESSIONAL CONVERSATIONS</div>
      <div className="contact-content">
        <h2>Have a question<br />worth <em>exploring?</em></h2>
        <div className="contact-aside">
          <p>I&apos;d be glad to connect about business analysis, data, reporting, or a role where clear thinking can make a difference.</p>
          <a className="button button-paper" download href="/dickson-samuel-akinnawo-cv.pdf">
            <FileSpreadsheet aria-hidden="true" size={16} /> View my CV <ArrowUpRight aria-hidden="true" size={15} />
          </a>
          <p className="contact-note">References available on request. Connect with me through your preferred professional network.</p>
        </div>
      </div>
      <div className="contact-decoration" aria-hidden="true">DS</div>
    </section>
  )
}

export function Portfolio() {
  return (
    <main className="portfolio-shell">
      <SiteHeader />
      <Hero />
      <AboutSection />
      <ExperienceSection />
      <ExpertiseSection />
      <EducationSection />
      <ContactSection />
      <footer className="site-footer">
        <a className="footer-mark" href="#top">DS<span>.</span></a>
        <p>Thoughtful analysis. Practical outcomes.</p>
        <a href="#top">Back to top <ArrowUpRight aria-hidden="true" size={14} /></a>
        <span className="copyright">© {new Date().getFullYear()} Dickson Samuel Akinnawo</span>
      </footer>
    </main>
  )
}

export default Portfolio
