import { useState } from "react";
import "./App.css";

const projects = [
  {
    number: "01",
    name: "WSF Attendance",
    type: "Operations platform",
    description:
      "A production-ready full-stack attendance and member management system built for secure organizational workflows. It brings member administration, attendance operations, reporting, audit history, and automated communication into one protected platform.",
    tags: ["React", "Node.js", "MongoDB"],
    features: [
      "JWT authentication and role-based access",
      "Member and organizational management",
      "Attendance workflows and reporting",
      "Audit logging and automated email",
      "Protected REST APIs",
    ],
    github: "https://github.com/alexemeluedev/WSF-AMS",
    liveDemo: "https://wsf-ams.vercel.app/login",
    image: "/projects/wsf-dashboard.PNG",
    accent: "coral",
  },
  {
    number: "02",
    name: "PMS",
    type: "Project management system",
    description:
      "A full-stack project management application for organizing projects, tasks, and team activity. The system connects interactive frontend workflows with secure backend services, MongoDB persistence, REST APIs, and real-time communication.",
    tags: ["React", "Node.js", "MongoDB"],
    features: [
      "Project and task workflows",
      "Secure authentication",
      "REST API architecture",
      "MongoDB data persistence",
      "Real-time activity synchronization",
    ],
    github: "https://github.com/alexemeluedev/PMS",
    liveDemo: "https://pms-p0bu.onrender.com",
    image: "/projects/pms-dashboard.PNG",
    gallery: ["/projects/pms-login.PNG", "/projects/pms-onprogress.PNG"],
    accent: "lime",
  },
  {
    number: "03",
    name: "NovaLedger",
    type: "Expense tracker",
    description:
      "A mobile expense tracking application built with React Native and Expo. NovaLedger uses PostgreSQL for structured data, Clerk for authentication, and a dedicated backend API to connect mobile clients with real-world expense workflows.",
    tags: ["React Native", "PostgreSQL", "Node.js"],
    features: [
      "Expense recording and management",
      "Clerk authentication",
      "PostgreSQL data storage",
      "Dedicated backend API integration",
      "Expo mobile application workflow",
    ],
    github: "https://github.com/alexemeluedev/taskTracker-reactNative-api",
    liveDemo:
      "https://expo.dev/accounts/alexemelue.dev/projects/nova-ledger/builds/88577e5e-7228-47da-9075-04a44a1b0dcf",
    image: "/projects/nov-dashboard.png",
    gallery: ["/projects/nov-login.png", "/projects/nov-transaction.png"],
    accent: "yellow",
  },
  {
    number: "04",
    name: "Banking App",
    type: "Mobile banking experience",
    description:
      "A full-stack mobile banking application built with React Native, Node.js, Express, and MongoDB. It combines secure account and transaction management with financial insights, currency conversion, and network-aware transaction processing.",
    tags: ["React Native", "Node.js", "MongoDB"],
    features: [
      "Secure and biometric authentication",
      "Push notifications",
      "Account and transaction management",
      "Financial statistics and expenditure analysis",
      "USD, NGN, and EUR conversion",
      "Offline transactions sync when connectivity returns",
    ],
    github: "https://github.com/alexemeluedev/banking-react-native-mongodb",
    localOnly: true,
    image: "/projects/banking-dashboard.png",
    gallery: [
      "/projects/banking-login.png",
      "/projects/banking-sendTransaction.png",
      "/projects/banking-review.png",
    ],
    accent: "blue",
  },
];
const Arrow = () => <span aria-hidden="true">↗</span>;

function App() {
  const [activeProject, setActiveProject] = useState(projects[3]);
  const [menuOpen, setMenuOpen] = useState(false);
  const selectProject = (project) => {
    setActiveProject(project);
    document
      .querySelector("#details")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top">
          AE<span>.</span>
        </a>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          type="button"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"}>
          <a href="#work" onClick={() => setMenuOpen(false)}>
            Work
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#services" onClick={() => setMenuOpen(false)}>
            Services
          </a>
          <a
            href="#contact"
            className="nav-cta"
            onClick={() => setMenuOpen(false)}
          >
            Let&apos;s talk <Arrow />
          </a>
        </nav>
      </header>
      <main id="top">
        <section className="hero section-grid">
          <div className="hero-copy reveal-up">
            <p className="eyebrow">
              Alex Emelue / Full-Stack Web &amp; React Native Developer
            </p>
            <h1>
              I build the part
              <br />
              people <em>remember.</em>
            </h1>
            <p className="hero-intro">
              Web products, mobile experiences, and backend systems with enough
              character to feel human and enough structure to last.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">
                Explore the work <Arrow />
              </a>
              <a className="text-link" href="#contact">
                Have a project? <Arrow />
              </a>
            </div>
          </div>
          <div className="hero-case reveal-up delay-one">
            <div className="hero-case-meta">
              <span>Selected case / {activeProject.number}</span>
              <span>{activeProject.tags.join(" · ")}</span>
            </div>
            <div className="hero-case-image">
              <img
                src={activeProject.image}
                alt={`${activeProject.name} project preview`}
              />
              <div className="hero-case-overlay">
                <span>{activeProject.name}</span>
                <strong>
                  {activeProject.name === "Banking App" ? (
                    <>
                      Move money
                      <br />
                      <em>with confidence.</em>
                    </>
                  ) : (
                    <>
                      {activeProject.type}
                      <br />
                      <em>made useful.</em>
                    </>
                  )}
                </strong>
                <small>VIEW CASE ↗</small>
              </div>
            </div>
            <div className="hero-case-footer">
              <span>{activeProject.number} — 04</span>
              <span>Currently shipping useful things</span>
            </div>
            <div className="hero-case-rail">
              {projects.map((project) => (
                <button
                  className={`hero-case-thumb ${project.number === activeProject.number ? "is-active" : ""}`}
                  key={project.number}
                  onClick={() => setActiveProject(project)}
                  aria-label={`Show ${project.name} case study`}
                  aria-current={project.number === activeProject.number ? "true" : undefined}
                  type="button"
                >
                  <img src={project.image} alt="" />
                  <span>{project.number}</span>
                  <strong>{project.name}</strong>
                </button>
              ))}
            </div>
          </div>
        </section>
        <section className="marquee" aria-label="How I build">
          <div>
            <span>01</span> Product thinking <b>✳</b>
            <span>02</span> Interface craft <b>✳</b>
            <span>03</span> Mobile first <b>✳</b>
            <span>04</span> Systems that scale <b>✳</b>
          </div>
        </section>
        <section className="work section" id="work">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2>
                Things I&apos;ve
                <br />
                <em>shipped.</em>
              </h2>
            </div>
            <p className="section-note">
              A few products, systems, and experiments from the desk of Alex
              Emelue.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <button
                className={`project-card accent-${project.accent} ${activeProject.name === project.name ? "is-selected" : ""}`}
                key={project.name}
                onClick={() => selectProject(project)}
                aria-label={`View ${project.name} project details`}
                type="button"
              >
                <div className="project-image">
                  <img src={project.image} alt="" />
                  <span className="project-number">{project.number}</span>
                  <span className="view-mark">↗</span>
                </div>
                <div className="project-card-copy">
                  <p>{project.type}</p>
                  <h3>{project.name}</h3>
                  <div className="tag-row">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>
        <section className="details section" id="details">
          <div className="details-visual">
            <img
              src={activeProject.image}
              alt={`${activeProject.name} project preview`}
            />
            <div className="details-label">
              CASE
              <br />
              {activeProject.number}
            </div>
            {activeProject.gallery && (
              <div className="details-gallery">
                {activeProject.gallery.map((image) => (
                  <img
                    key={image}
                    src={image}
                    alt={`${activeProject.name} project screen`}
                  />
                ))}
              </div>
            )}
            {activeProject.name === "WSF Attendance" && (
              <div className="details-gallery">
                {[
                  "/projects/wsf-history.PNG",
                  "/projects/wsf-admin.PNG",
                  "/projects/wsf-members.PNG",
                ].map((image) => (
                  <img key={image} src={image} alt="WSF project screen" />
                ))}
              </div>
            )}
          </div>
          <div className="details-copy">
            <p className="eyebrow">Project details</p>
            <h2>
              {activeProject.name}
              <br />
              <em>{activeProject.type}</em>
            </h2>
            <p>{activeProject.description}</p>
            <ul>
              {activeProject.features.map((feature) => (
                <li key={feature}>
                  <span>+</span>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="details-actions">
              <a
                className="button button-dark"
                href={activeProject.liveDemo || activeProject.github}
                target="_blank"
                rel="noreferrer"
              >
                {activeProject.liveDemo ? "Live demo" : "Run locally"} <Arrow />
              </a>
              <a
                className="text-link"
                href={activeProject.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub <Arrow />
              </a>
            </div>
            {activeProject.liveDemo && (
              <p className="access-note">
                Some features require authentication. Access credentials are
                available upon request.
              </p>
            )}
            {activeProject.localOnly && (
              <p className="access-note">
                This app runs locally. Setup and access details are available
                through the GitHub repository upon request.
              </p>
            )}
          </div>
        </section>
        <section className="about section section-grid" id="about">
          <div>
            <p className="eyebrow">A little context</p>
            <h2>
              Good work is
              <br />
              <em>felt.</em>
            </h2>
          </div>
          <div className="about-copy">
            <p className="large-copy">
              I design and engineer digital experiences that feel clear, useful,
              and unmistakably human.
            </p>
            <p>
              From the first sketch to the last API route, I care about the
              invisible decisions that make a product feel effortless. My
              toolkit spans web, mobile, and the backend systems that keep them
              moving.
            </p>
            <div className="stats">
              <div>
                <strong>4+</strong>
                <span>Products built</span>
              </div>
              <div>
                <strong>3</strong>
                <span>Core disciplines</span>
              </div>
              <div>
                <strong>∞</strong>
                <span>Curiosity</span>
              </div>
            </div>
          </div>
        </section>
        <section className="services section" id="services">
          <div className="section-heading">
            <div>
              <p className="eyebrow">What I build</p>
              <h2>
                From problem to
                <br />
                <em>product.</em>
              </h2>
            </div>
            <p className="section-note">
              The kind of work behind WSF Attendance, PMS, NovaLedger, and
              Banking App.
            </p>
          </div>
          <div className="service-list">
            <article>
              <span>01</span>
              <h3>Operations systems</h3>
              <p>
                Attendance tools that turn daily people and shift data into
                clear, dependable workflows.
              </p>
              <b>↗</b>
            </article>
            <article>
              <span>02</span>
              <h3>Product workspaces</h3>
              <p>
                Project management experiences that make ownership, progress,
                and delivery visible.
              </p>
              <b>↗</b>
            </article>
            <article>
              <span>03</span>
              <h3>Finance products</h3>
              <p>
                Expense and banking experiences designed for clearer decisions
                across web and mobile.
              </p>
              <b>↗</b>
            </article>
          </div>
        </section>
        <section className="contact section" id="contact">
          <p className="eyebrow">Have a good one?</p>
          <h2>
            Let&apos;s make
            <br />
            <em>something real.</em>
          </h2>
          <a className="contact-email" href="mailto:alexemelue.dev@gmail.com">
            alexemelue.dev@gmail.com <Arrow />
          </a>
          <div className="socials">
            <a
              href="https://github.com/alexemeluedev/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/public-profile/settings/?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BuQQpdzFVTBe3y1YeFUvqgg%3D%3D"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://www.fiverr.com/sellers/alex_emelue/edit"
              target="_blank"
              rel="noreferrer"
            >
              Fiverr
            </a>
            <a
              href="https://www.upwork.com/freelancers/~0141bbc0b626a3064e?viewMode=1"
              target="_blank"
              rel="noreferrer"
            >
              Upwork
            </a>
            <a
              href="https://contra.com/alex_emelue_jcl2mq1o/work?r=alex_emelue_jcl2mq1o"
              target="_blank"
              rel="noreferrer"
            >
              Contra
            </a>
          </div>
        </section>
      </main>
      <footer>
        <span>© 2026 Alex Emelue</span>
        <span>Built with care, React &amp; coffee.</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}
export default App;
