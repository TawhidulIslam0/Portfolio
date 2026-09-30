import {
  ArrowUpRight,
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  Github,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Server,
  Sparkles,
  Sun,
  Terminal,
  X,
} from "lucide-react";
import { useState } from "react";

const projects = [
  {
    number: "01",
    title: "IntelliDoc",
    subtitle: "AI-powered document management",
    description:
      "A full-stack document system built around semantic, contextual file search. It combines embeddings, vector search, a FastAPI backend, PostgreSQL, and a responsive React interface.",
    stack: [
      "React",
      "Vite",
      "FastAPI",
      "PostgreSQL",
      "pgvector",
      "PyTorch",
      "AWS S3",
    ],
    href: "https://github.com/TawhidulIslam0/IntelliDoc",
    featured: true,
  },
  {
    number: "02",
    title: "Journey",
    subtitle: "AI-assisted fitness tracking",
    description:
      "A cross-platform mobile application focused on workout safety, form correction, and commitment tracking, with real-time AI guidance powered by the OpenAI API.",
    stack: [
      "Flutter",
      "Dart",
      "Flask",
      "Supabase",
      "PostgreSQL",
      "OpenAI API",
    ],
    href: "https://github.com/NumaanQureshi/Journey",
    featured: false,
  },
  {
    number: "03",
    title: "Full-Stack CRUD Application",
    subtitle: "Client + server web application",
    description:
      "A complete full-stack CRUD application built with a separate client and server, featuring a responsive frontend, REST APIs, database integration, and full create, read, update, and delete functionality.",
    stack: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "Node.js",
      "REST APIs",
      "PostgreSQL",
    ],
    href: "https://github.com/TawhidulIslam0/final-project-client",
    serverHref:
      "https://github.com/TawhidulIslam0/final-project-server",
    featured: false,
  },
];

const skillGroups = [
  {
    icon: Code2,
    label: "Languages",
    items: [
      "Python",
      "TypeScript",
      "JavaScript",
      "Java",
      "C++",
      "Dart",
      "SQL",
    ],
  },
  {
    icon: Terminal,
    label: "Web & Frameworks",
    items: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "Flask",
      "FastAPI",
      "REST APIs",
    ],
  },
  {
    icon: Database,
    label: "Data & Messaging",
    items: [
      "PostgreSQL",
      "Supabase",
      "pgvector",
      "SQLAlchemy",
      "Alembic",
      "Redis",
      "Kafka",
    ],
  },
  {
    icon: Cloud,
    label: "Cloud & Tools",
    items: [
      "AWS S3",
      "GCP",
      "Firebase",
      "Docker",
      "Git",
      "GitHub",
      "PyTorch",
      "OpenAI API",
    ],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const closeMenu = () => setMenuOpen(false);

  const toggleTheme = () => {
    setDarkMode((value) => !value);
  };

  return (
    <div className={`site-shell ${darkMode ? "dark-mode" : "light-mode"}`}>
      <div className="noise" aria-hidden="true" />

      <header className="nav">
        <a href="#top" className="brand" onClick={closeMenu}>
          <span className="brand-mark">TI</span>
          <span>Tawhidul Islam</span>
        </a>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
            title={darkMode ? "Light mode" : "Dark mode"}
          >
            {darkMode ? <Sun size={19} /> : <Moon size={19} />}
          </button>

          <button
            className="menu-button"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#work" onClick={closeMenu}>
            Work
          </a>

          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>

          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#contact" className="nav-cta" onClick={closeMenu}>
            Let's talk <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" />
              Available for opportunities
            </div>

            <h1>
              Building software
              <span> that matters.</span>
            </h1>

            <p className="hero-text">
              I'm Tawhidul — a full-stack developer focused on AI-powered
              products,frontend development, resilient backends, and thoughtful user experiences.
            </p>

            <div className="hero-actions">
              <a className="button primary" href="#work">
                View my work <ArrowUpRight size={17} />
              </a>

              <a
                className="button secondary"
                href="mailto:islam100tawhidul@gmail.com"
              >
                Get in touch <Mail size={16} />
              </a>
            </div>

            <div className="social-row">
              <a
                href="https://github.com/TawhidulIslam0"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={18} /> GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/tawhidul-islam-990751413"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>

          <div className="hero-terminal">
            <div className="terminal-top">
              <div className="terminal-dots">
                <i />
                <i />
                <i />
              </div>

              <span>tawhidul.ts</span>

              <span className="terminal-status">● live</span>
            </div>

            <pre>
              <code>
                <span className="code-muted">const</span> developer = {"{"}
                {"\n  "}name:{" "}
                <span className="code-string">"Tawhidul Islam"</span>,{"\n  "}
                role: <span className="code-string">"Full-Stack Engineer"</span>
                ,{"\n  "}focus: [{"\n    "}
                <span className="code-string">"Frontend Development"</span>,
                {"\n    "}
                <span className="code-string">"Backend Systems"</span>,{"\n    "}
                <span className="code-string">"AI/ML"</span>,{"\n    "}
                <span className="code-string">"Cloud Architecture"</span>
                {"\n  "}],{"\n  "}ships:{" "}
                <span className="code-number">true</span>
                {"\n"}
                {"}"};
              </code>
            </pre>

            <div className="terminal-footer">
              <span>
                <span className="pulse" /> open to building
              </span>

              <span>NYC/InPerson/Remote</span>
            </div>
          </div>
        </section>

        <section id="work" className="section">
          <div className="section-heading">
            <div>
              <span className="section-kicker">Selected work</span>
              <h2>Projects I've built.</h2>
            </div>

            <a
              className="text-link"
              href="https://github.com/TawhidulIslam0"
              target="_blank"
              rel="noreferrer"
            >
              Explore GitHub <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article
                key={project.title}
                className={
                  project.featured
                    ? "project-card featured"
                    : "project-card"
                }
              >
                <div className="project-top">
                  <span className="project-number">{project.number}</span>

                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.title}`}
                  >
                    <ArrowUpRight size={19} />
                  </a>
                </div>

                <div className="project-icon">
                  {project.title === "IntelliDoc" ? (
                    <BrainCircuit size={23} />
                  ) : project.title === "Journey" ? (
                    <Sparkles size={23} />
                  ) : (
                    <Code2 size={23} />
                  )}
                </div>

                <span className="project-subtitle">
                  {project.subtitle}
                </span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tag-list">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="project-repo-link"
                  >
                    {project.title === "Full-Stack CRUD Application"
                      ? "Client repo"
                      : "View repository"}{" "}
                    <ArrowUpRight size={14} />
                  </a>

                  {"serverHref" in project && project.serverHref && (
                    <a
                      href={project.serverHref}
                      target="_blank"
                      rel="noreferrer"
                      className="project-repo-link"
                    >
                      Server repo <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section experience-section">
          <div className="section-heading">
            <div>
              <span className="section-kicker">Experience</span>
              <h2>From product UI to distributed systems.</h2>
            </div>
          </div>

          <div className="experience-card">
            <div className="experience-meta">
              <span className="timeline-dot" />

              <div>
                <span className="date">AUG 2026 — SEP 2026</span>

                <h3>Full Stack Engineer Intern</h3>

                <p>Zetheta Algorithms Private Limited · Remote</p>
              </div>
            </div>

            <div className="experience-content">
              <div className="experience-item">
                <span>01</span>

                <p>
                  Engineered a production-grade 8-step loan application flow
                  with schema validation, conditional rendering, secure
                  document uploads, compression, and e-signature capture.
                </p>
              </div>

              <div className="experience-item">
                <span>02</span>

                <p>
                  Built an SAP S/4HANA integration framework using OAuth 2.0
                  and ETL transformations for a financial analytics platform.
                </p>
              </div>

              <div className="experience-item">
                <span>03</span>

                <p>
                  Architected active-active disaster recovery across AWS
                  regions using Aurora PostgreSQL global replication and Kafka
                  streaming.
                </p>
              </div>

              <div className="experience-item">
                <span>04</span>

                <p>
                  Developed an event-driven notification backend using Kafka
                  and Redis, routing 25+ event types across 5 channels with
                  compliance, retries, and rate limiting.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-heading">
            <div>
              <span className="section-kicker">Toolkit</span>
              <h2>Technologies I work with.</h2>
            </div>
          </div>

          <div className="skills-grid">
            {skillGroups.map(({ icon: Icon, label, items }) => (
              <div className="skill-card" key={label}>
                <div className="skill-icon">
                  <Icon size={20} />
                </div>

                <h3>{label}</h3>

                <div className="skill-list">
                  {items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="about-mark">TI</div>

          <div className="about-copy">
            <span className="section-kicker">A little about me</span>

            <h2>Curious about the whole stack.</h2>

            <p>
              I earned my B.A. in Computer Science from Hunter College, CUNY.
              I enjoy moving between product design, application code, data
              systems, and infrastructure — especially when the problem
              requires more than one layer.
            </p>

            <p>
              My recent work spans AI integration, semantic search,
              event-driven architecture, cloud systems, and cross-platform
              applications.
            </p>

            <a
              className="text-link"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              View my resume <ArrowUpRight size={16} />
            </a>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-glow" />

          <span className="section-kicker">Let's build something</span>

          <h2>Have a problem worth solving?</h2>

          <p>
            I'm always interested in ambitious software, AI, frontend and backend
            engineering work.
          </p>

          <a
            className="button primary large"
            href="mailto:islam100tawhidul@gmail.com"
          >
            Say hello <Mail size={18} />
          </a>

          <div className="contact-links">
            <a href="mailto:islam100tawhidul@gmail.com">
              islam100tawhidul@gmail.com
            </a>

            <span>·</span>

            <a
              href="https://github.com/TawhidulIslam0"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <span>·</span>

            <a
              href="https://www.linkedin.com/in/tawhidul-islam-990751413"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Tawhidul Islam</span>

        <span>Built with React + TypeScript</span>
      </footer>
    </div>
  );
}

export default App;