import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  Download,
  LineChart,
  ScanSearch,
} from 'lucide-react'

const strengths = [
  'SQL & data transformation',
  'Power BI & DAX',
  'Advanced Excel',
  'KPI reporting',
  'Data quality & validation',
  'Stakeholder engagement',
  'Business process analysis',
  'Statistical analysis',
]

const roles = [
  {
    dates: 'Jan 2023 — Sep 2025',
    title: 'Data Monitoring and Evaluation Officer',
    organization: '',
    details: [
      'Analyzed data from multiple sources to support day-to-day and long-term decision-making.',
      'Built and maintained interactive Power BI dashboards to monitor KPIs and service delivery.',
      'Automated reporting workflows with advanced Excel and Power Query formulas.',
      'Partnered with technical and non-technical stakeholders to improve reporting quality and streamline processes.',
    ],
  },
  {
    dates: 'Feb 2021 — Sep 2022',
    title: 'Data Administrator',
    organization: '',
    details: [
      'Maintained structured datasets for performance, attendance, and operational activity.',
      'Analyzed organizational performance data to identify trends and support continuous improvement.',
      'Produced management reports while upholding data quality and system governance.',
    ],
  },
  {
    dates: 'Aug 2020 — Oct 2020',
    title: 'Graduate Intern',
    organization: 'Dataville Research LLC',
    details: [
      'Supported data collection, cleaning, validation, and analysis for research and monitoring projects.',
      'Helped maintain accurate datasets and improve reporting reliability.',
    ],
  },
]

const education = [
  {
    degree: 'Master of Management in Data Science',
    dates: 'Sep 2023 — Sep 2025',
  },
  {
    degree: 'Master of Science in Agronomy',
    focus: 'Soil Fertility',
    dates: 'Jun 2018 — Feb 2020',
  },
  {
    degree: 'Bachelor of Agriculture',
    focus: 'Soil Science and Land Management',
    dates: 'Oct 2010 — Nov 2015',
  },
]

const training = [
  { name: 'Introduction to Securities & Investment (International) English', year: '2025' },
  { name: 'SQL', year: '2025' },
  { name: 'Power BI', year: '2025' },
  { name: 'Business Analyst with Excel: From Beginner to Advanced', year: '2024' },
]

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  )
}

function InsightCard() {
  return (
    <div className="insight-card" aria-label="Illustration representing a data-to-decisions workflow">
      <div className="insight-card-top">
        <span className="insight-mark"><LineChart aria-hidden="true" /></span>
        <span className="insight-label">A clearer view</span>
        <span className="insight-dots" aria-hidden="true">•••</span>
      </div>
      <div className="insight-title">From data to direction</div>
      <div className="insight-subtitle">A thoughtful approach to better decisions</div>
      <div className="insight-visual" aria-hidden="true">
        <div className="chart-y-labels"><span>INSIGHT</span><span>CONTEXT</span><span>IMPACT</span></div>
        <div className="chart-area">
          <div className="chart-lines"><i /><i /><i /><i /></div>
          <svg viewBox="0 0 340 115" preserveAspectRatio="none" role="presentation">
            <path className="chart-fill" d="M0 93 C34 86 38 62 79 72 S126 91 158 54 S211 70 238 38 S285 47 340 12 L340 115 L0 115 Z" />
            <path className="chart-stroke" d="M0 93 C34 86 38 62 79 72 S126 91 158 54 S211 70 238 38 S285 47 340 12" />
            <circle cx="340" cy="12" r="4" />
          </svg>
          <div className="chart-x-labels"><span>ASK</span><span>ANALYZE</span><span>ACT</span></div>
        </div>
      </div>
      <div className="insight-footer">
        <span><span className="footer-dot" />Clarity in every step</span>
        <span className="footer-icon"><ArrowUpRight aria-hidden="true" /></span>
      </div>
      <div className="floating-chip chip-one"><BarChart3 aria-hidden="true" /><span>Useful reporting</span></div>
      <div className="floating-chip chip-two"><ScanSearch aria-hidden="true" /><span>Better questions</span></div>
    </div>
  )
}

export function PortfolioPage() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Dickson Akinnawo, home">
          <span className="wordmark-mark">DA</span>
          <span>DICKSON AKINNAWO</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Capabilities</a>
          <a href="#education">Education</a>
        </nav>
        <a className="nav-cta" href="/dickson-samuel-akinnawo-cv.pdf" download>
          Download CV <Download aria-hidden="true" />
        </a>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <div className="hero-kicker"><span className="kicker-line" /> BUSINESS ANALYST · DATA PROFESSIONAL</div>
          <h1>Turning complex data into <span>clearer decisions.</span></h1>
          <p className="hero-description">
            I connect business needs with meaningful analysis—helping teams understand performance,
            improve reporting, and find practical ways forward.
          </p>
          <div className="hero-actions">
            <a className="button-primary" href="#experience">Explore my experience <ArrowRight aria-hidden="true" /></a>
            <a className="button-text" href="#about">A little about me <ArrowDown aria-hidden="true" /></a>
          </div>
          <div className="hero-note"><span className="note-star">✳</span> Analytical thinking. Collaborative work. Actionable insight.</div>
        </div>
        <div className="hero-art-wrap">
          <div className="hero-art-ornament ornament-top" aria-hidden="true">DATA<br />WITH<br />PURPOSE</div>
          <InsightCard />
          <div className="hero-art-ornament ornament-bottom" aria-hidden="true">MEASURE<br />WHAT MATTERS</div>
        </div>
        <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
      </section>

      <section className="about-section section-shell" id="about">
        <div className="about-aside">
          <p className="eyebrow">01 — THE PERSON BEHIND THE DATA</p>
          <div className="monogram" aria-label="Dickson Samuel Akinnawo initials">D<span>.</span>A<span>.</span></div>
          <div className="aside-caption">BUSINESS<br />MEETS DATA</div>
        </div>
        <div className="about-copy">
          <SectionHeading eyebrow="A PRACTICAL, PEOPLE-FIRST APPROACH" title="Good analysis starts with understanding the question." />
          <p>
            I&apos;m <strong>Dickson Samuel Akinnawo</strong>, a business analyst and data professional who enjoys
            making complex information easier to use. My work brings together business requirements,
            structured data, and thoughtful reporting to help teams make informed decisions.
          </p>
          <p>
            From gathering stakeholder needs to validating datasets and presenting findings, I focus on
            clear communication and solutions that work in practice. I bring experience across monitoring
            and evaluation, administration, and research—alongside postgraduate study in data science.
          </p>
          <div className="approach-row">
            <div><span>01</span><p>Understand the need</p></div>
            <div><span>02</span><p>Make data trustworthy</p></div>
            <div><span>03</span><p>Communicate what matters</p></div>
          </div>
        </div>
      </section>

      <section className="experience-section section-shell" id="experience">
        <SectionHeading
          eyebrow="02 — CAREER JOURNEY"
          title="Experience built around better information."
          description="A career spanning monitoring and evaluation, data administration, and research support."
        />
        <div className="experience-list">
          {roles.map((role, index) => (
            <article className="experience-item" key={role.title}>
              <div className="experience-index">0{index + 1}</div>
              <div className="experience-date">{role.dates}</div>
              <div className="experience-detail">
                <h3>{role.title}</h3>
                {role.organization ? <p className="organization">{role.organization}</p> : null}
                <ul>
                  {role.details.map((detail) => <li key={detail}><Check aria-hidden="true" />{detail}</li>)}
                </ul>
              </div>
              <span className="experience-arrow" aria-hidden="true"><ArrowUpRight /></span>
            </article>
          ))}
        </div>
      </section>

      <section className="capabilities-section" id="skills">
        <div className="section-shell capabilities-layout">
          <div>
            <SectionHeading
              eyebrow="03 — WHAT I BRING"
              title="The tools are only part of the toolkit."
              description="I pair hands-on data skills with the communication and problem-solving needed to make them useful."
            />
            <div className="skills-list">
              {strengths.map((skill) => <span className="skill-pill" key={skill}><span />{skill}</span>)}
            </div>
          </div>
          <div className="capabilities-note">
            <div className="note-icon"><ScanSearch aria-hidden="true" /></div>
            <p className="eyebrow">HOW I WORK</p>
            <h3>Insight should lead somewhere.</h3>
            <p>Whether it&apos;s a dashboard, a performance report, or a process review, I aim to make the next step easier to see.</p>
            <div className="note-rule" />
            <span>ANALYZE <i>→</i> EXPLAIN <i>→</i> IMPROVE</span>
          </div>
        </div>
      </section>

      <section className="education-section section-shell" id="education">
        <div className="education-column">
          <SectionHeading eyebrow="04 — EDUCATION" title="A foundation in data and the natural sciences." />
          <div className="education-list">
            {education.map((item) => (
              <article className="education-item" key={item.degree}>
                <span className="education-dot" />
                <div><h3>{item.degree}</h3>{item.focus ? <p>{item.focus}</p> : null}<span>{item.dates}</span></div>
              </article>
            ))}
          </div>
        </div>
        <div className="training-column">
          <SectionHeading eyebrow="05 — CONTINUOUS LEARNING" title="Certifications & training." />
          <div className="training-list">
            {training.map((item) => (
              <div className="training-item" key={item.name}>
                <span className="training-check"><Check aria-hidden="true" /></span>
                <span>{item.name}</span>
                <span className="training-year">{item.year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="closing-section" id="contact">
        <div className="closing-inner">
          <p className="eyebrow">LET&apos;S MAKE THE NEXT DECISION A BETTER ONE</p>
          <h2>Looking for a thoughtful analyst<br />for your team?</h2>
          <p className="closing-description">Explore my experience in more detail with the full CV.</p>
          <a className="button-light" href="/dickson-samuel-akinnawo-cv.pdf" download>
            Download Dickson&apos;s CV <Download aria-hidden="true" />
          </a>
          <p className="references-note">Professional references available on request.</p>
        </div>
        <div className="closing-decoration" aria-hidden="true">D<span>.</span>A<span>.</span></div>
      </section>

      <footer className="site-footer">
        <a className="wordmark footer-wordmark" href="#home"><span className="wordmark-mark">DA</span><span>DICKSON AKINNAWO</span></a>
        <span>Business Analyst · Data Professional</span>
        <a href="#home" className="back-to-top">BACK TO TOP ↑</a>
      </footer>
    </main>
  )
}

export default PortfolioPage
