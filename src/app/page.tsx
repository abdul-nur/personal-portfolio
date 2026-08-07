const facts = [
  {
    label: "Education",
    value: "Boston University",
    detail: "B.A. Computer Science, Minor in Data Science",
  },
  {
    label: "Focus",
    value: "Backend & Distributed Systems",
    detail: "APIs, platform tooling, observability",
  },
  {
    label: "Experience",
    value: "3+ years",
    detail: "Adobe, Harvard Business Publishing, BU research",
  },
  {
    label: "Currently",
    value: "Software Engineer @ Adobe",
    detail: "Agent Nexus · AJO Core Services",
  },
  { label: "Location", value: "San Jose, CA" },
];

const experience = [
  {
    role: "Software Engineer",
    company: "Adobe Inc.",
    location: "San Jose, CA",
    dates: "07/2025 — Present",
    bullets: [
      "Built and own core platform capabilities for Agent Nexus, a production system used daily by 500+ engineers, CSMs, and operations teams to automate incident analysis, customer insights, and engineering triage across Adobe Journey Optimizer (AJO).",
      "Designed backend services and API-driven integrations in TypeScript, Node.js, and Python, connecting Jira, Wiki, Slack, Splunk, Grafana, and Dynamics for business-critical operational workflows.",
      "Developed Java-based AJO Core Services and supported onboarding into new cloud regions, sustaining 99.95% availability across multi-region production services.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Adobe Inc.",
    location: "Austin, TX",
    dates: "05/2024 — 08/2024",
    bullets: [
      "Built a TypeScript developer CLI backed by AWS Lambda and S3, reducing developer task completion time by 50% compared to console workflows.",
      "Redesigned backend components of the Schema Management Service (SMS) in Node.js and TypeScript, improving maintainability and debugging workflows.",
      "Optimized Cloudflare Workers API performance by 25%, consistently supporting sub-50ms response times.",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "Harvard Business Publishing",
    location: "Boston, MA",
    dates: "05/2023 — 08/2023",
    bullets: [
      "Developed and launched Flask REST APIs supporting real-time analytics for 2 client applications, reducing data retrieval latency by 50%.",
      "Automated TestRail–Jira sync pipelines in Python, improving processing efficiency by 30%.",
    ],
  },
  {
    role: "AI Research Assistant",
    company: "BU Neurophotonics Lab",
    location: "Boston, MA",
    dates: "03/2024 — 12/2024",
    bullets: [
      "Built reproducible PyTorch model pipelines for diffractive neural network research, improving prediction accuracy by 20% through architecture and data-pipeline optimization.",
    ],
  },
];

const projects = [
  {
    title: "Distributed Order Server",
    tech: "C, POSIX Threads, TCP Sockets, Queueing",
    description:
      "A multithreaded TCP backend with worker threads, bounded request queues, and synchronization primitives. Measured throughput, response time, utilization, and saturation under concurrent workloads.",
  },
];

const stackGroups = [
  {
    label: "Languages",
    items: [
      "Python",
      "Java",
      "Kotlin",
      "Go",
      "TypeScript",
      "JavaScript",
      "C++",
      "C",
      "Rust",
      "SQL",
    ],
  },
  {
    label: "Backend & Systems",
    items: [
      "REST APIs",
      "Node.js",
      "Flask",
      "Distributed Systems",
      "Microservices",
      "API Design",
      "Data Modeling",
      "Automated Testing",
      "Production Debugging",
      "Incident Response",
      "Root Cause Analysis",
    ],
  },
  {
    label: "Data, Cloud & Observability",
    items: [
      "PostgreSQL",
      "MySQL",
      "Redis",
      "DynamoDB",
      "MongoDB",
      "AWS Lambda",
      "S3",
      "Splunk",
      "Grafana",
      "Jenkins",
      "Docker",
      "Jira",
      "Postman",
    ],
  },
];

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="mx-auto flex max-w-6xl flex-col px-6 sm:px-8">
      <header className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 bg-white/95 py-4 text-sm">
        <a href="#top" className="font-semibold text-gray-900">
          Abdul Nur
        </a>
        <nav className="flex gap-6 text-gray-500">
          <a href="#experience" className="hover:text-gray-900">
            Experience
          </a>
          <a href="#projects" className="hover:text-gray-900">
            Projects
          </a>
          <a href="#stack" className="hover:text-gray-900">
            Stack
          </a>
          <a href="#contact" className="hover:text-gray-900">
            Contact
          </a>
        </nav>
      </header>

      <main id="top" className="flex flex-col">
        {/* Intro */}
        <section className="grid grid-cols-1 gap-10 py-16 sm:py-20 md:grid-cols-2 md:gap-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-gray-400">
              Software Engineer
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Hi, I&apos;m Abdul.
            </h1>
            <p className="mt-4 max-w-lg leading-relaxed text-gray-600">
              I&apos;m a backend-focused software engineer building
              distributed systems and internal platforms at Adobe, where I
              work on Agent Nexus — a production system used daily by 500+
              engineers and operations teams.
            </p>

            <div className="mt-6 flex flex-wrap gap-x-2 gap-y-1 text-sm text-gray-500">
              <a href="mailto:anur2110@gmail.com" className="text-blue-600 hover:underline">
                anur2110@gmail.com
              </a>
              <span>·</span>
              <a
                href="https://github.com/abdul-nur"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                GitHub
              </a>
              <span>·</span>
              <a
                href="https://www.linkedin.com/in/a-nur"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-gray-200 bg-gray-200">
              {facts.map((fact, i) => (
                <div
                  key={fact.label}
                  className={`flex flex-col gap-1 bg-white p-4 ${
                    i === facts.length - 1 && facts.length % 2 === 1
                      ? "col-span-2"
                      : ""
                  }`}
                >
                  <dt className="font-mono text-[11px] uppercase tracking-widest text-gray-400">
                    {fact.label}
                  </dt>
                  <dd className="text-sm font-medium text-gray-900">
                    {fact.value}
                  </dd>
                  {fact.detail && (
                    <dd className="text-xs leading-relaxed text-gray-500">
                      {fact.detail}
                    </dd>
                  )}
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Experience */}
        <section
          id="experience"
          className="grid scroll-mt-[var(--header-h)] grid-cols-1 gap-10 border-t border-gray-200 py-16 md:grid-cols-4 md:gap-12"
        >
          <div className="md:col-span-1">
            <h2 className="text-lg font-semibold text-gray-900">Experience</h2>
            <p className="mt-2 text-sm text-gray-500">Where I&apos;ve worked.</p>
          </div>

          <div className="flex flex-col divide-y divide-gray-200 md:col-span-3">
            {experience.map((job) => (
              <div key={`${job.role}-${job.company}-${job.dates}`} className="py-6 first:pt-0">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-medium text-gray-900">
                    {job.role} · {job.company}
                  </h3>
                  <span className="shrink-0 font-mono text-xs text-gray-400">
                    {job.dates}
                  </span>
                </div>
                <p className="text-sm text-gray-500">{job.location}</p>
                <ul className="mt-3 list-outside list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-gray-600">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="grid scroll-mt-[var(--header-h)] grid-cols-1 gap-10 border-t border-gray-200 py-16 md:grid-cols-4 md:gap-12"
        >
          <div className="md:col-span-1">
            <h2 className="text-lg font-semibold text-gray-900">Projects</h2>
            <p className="mt-2 text-sm text-gray-500">Things I&apos;ve built on my own.</p>
          </div>

          <div className="flex flex-col divide-y divide-gray-200 md:col-span-3">
            {projects.map((project) => (
              <div key={project.title} className="py-6 first:pt-0">
                <h3 className="font-medium text-gray-900">{project.title}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-600">
                  {project.description}
                </p>
                <p className="mt-3 font-mono text-xs text-gray-400">
                  {project.tech}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Stack */}
        <section
          id="stack"
          className="grid scroll-mt-[var(--header-h)] grid-cols-1 gap-10 border-t border-gray-200 py-16 md:grid-cols-4 md:gap-12"
        >
          <div className="md:col-span-1">
            <h2 className="text-lg font-semibold text-gray-900">Stack</h2>
            <p className="mt-2 text-sm text-gray-500">Tools I reach for most.</p>
          </div>

          <div className="flex flex-col gap-6 md:col-span-3">
            {stackGroups.map((group) => (
              <div key={group.label}>
                <p className="mb-2 font-mono text-[11px] uppercase tracking-widest text-gray-400">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-gray-200 px-3 py-1 font-mono text-xs text-gray-600"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="grid min-h-[calc(100vh-var(--header-h))] scroll-mt-[var(--header-h)] grid-cols-1 gap-10 border-t border-gray-200 py-16 md:grid-cols-4 md:gap-12"
        >
          <div className="md:col-span-1">
            <h2 className="text-lg font-semibold text-gray-900">Contact</h2>
            <p className="mt-2 text-sm text-gray-500">Always happy to chat.</p>
          </div>

          <div className="md:col-span-3">
            <p className="max-w-md leading-relaxed text-gray-600">
              Have a project in mind or just want to say hi? My inbox is open.
            </p>
            <a
              href="mailto:anur2110@gmail.com"
              className="mt-4 inline-block text-2xl font-medium text-gray-900 hover:underline"
            >
              anur2110@gmail.com
            </a>
            <div className="mt-4 flex gap-x-2 text-sm text-gray-500">
              <a
                href="https://github.com/abdul-nur"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                GitHub
              </a>
              <span>·</span>
              <a
                href="https://www.linkedin.com/in/a-nur"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex items-center justify-between border-t border-gray-200 py-8 text-xs text-gray-400">
        <span>© {year} Abdul Nur</span>
        <a href="#top" className="hover:text-gray-900">
          Back to top
        </a>
      </footer>
    </div>
  );
}
