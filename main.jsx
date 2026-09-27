import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import "./style.css";

const jobs = [
  {
    id: "1",
    title: "Software Developer Intern",
    company: "TechNova",
    location: "Bangalore",
    type: "Internship",
    skills: ["JavaScript", "React", "SQL"],
    deadline: "30 Sep 2026",
    desc: "Work with a product engineering team to build responsive web features and reusable components.",
    resp: [
      "Build responsive UI components",
      "Collaborate with developers and designers",
      "Write maintainable JavaScript",
      "Test and debug features",
    ],
  },
  {
    id: "2",
    title: "Data Analyst Intern",
    company: "DataWorks",
    location: "Hyderabad",
    type: "Internship",
    skills: ["SQL", "Python", "Excel"],
    deadline: "04 Oct 2026",
    desc: "Support analytics projects by preparing data, creating reports and communicating insights.",
    resp: [
      "Prepare datasets",
      "Create SQL queries",
      "Support dashboards",
      "Communicate findings",
    ],
  },
  {
    id: "3",
    title: "Frontend Engineer",
    company: "CloudCore",
    location: "Remote",
    type: "Full-time",
    skills: ["React", "CSS", "Git"],
    deadline: "10 Oct 2026",
    desc: "Build accessible and responsive interfaces for modern cloud products.",
    resp: [
      "Develop React components",
      "Implement responsive layouts",
      "Improve accessibility",
      "Use Git workflows",
    ],
  },
  {
    id: "4",
    title: "Python Developer Intern",
    company: "InnoLabs",
    location: "Pune",
    type: "Internship",
    skills: ["Python", "Django", "SQL"],
    deadline: "15 Oct 2026",
    desc: "Assist with backend services and API development for internal applications.",
    resp: [
      "Develop Python modules",
      "Work with Django APIs",
      "Write database queries",
      "Document features",
    ],
  },
  {
    id: "5",
    title: "Cloud Engineering Associate",
    company: "SkyStack",
    location: "Bangalore",
    type: "Full-time",
    skills: ["AWS", "Linux", "Git"],
    deadline: "18 Oct 2026",
    desc: "Support cloud infrastructure and deployment workflows while learning DevOps practices.",
    resp: [
      "Assist deployments",
      "Monitor environments",
      "Document procedures",
      "Support CI/CD",
    ],
  },
  {
    id: "6",
    title: "UI Developer Intern",
    company: "DesignByte",
    location: "Remote",
    type: "Internship",
    skills: ["HTML", "CSS", "JavaScript"],
    deadline: "20 Oct 2026",
    desc: "Create polished, accessible interfaces and collaborate on user experience improvements.",
    resp: [
      "Build semantic HTML",
      "Create responsive CSS",
      "Add interactions",
      "Test across devices",
    ],
  },
];

function Nav() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="nav">
      <Link to="/" className="brand">
        <b>CP</b>
        Campus<span>Connect</span>
      </Link>

      <button
        className="hamb"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        ☰
      </button>

      <nav className={open ? "links open" : "links"}>
        <NavLink to="/" onClick={closeMenu}>Home</NavLink>
        <NavLink to="/jobs" onClick={closeMenu}>Jobs</NavLink>
        <NavLink to="/dashboard" onClick={closeMenu}>Dashboard</NavLink>
        <NavLink to="/applications" onClick={closeMenu}>Applications</NavLink>
      </nav>

      <Link className="portal" to="/dashboard">
        Student Portal
      </Link>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <div>
        <strong>CampusConnect</strong>
        <p>Student-focused campus placement management.</p>
      </div>
      <p>© 2026 CampusConnect · Internship Project</p>
    </footer>
  );
}

function Home() {
  const features = [
    [
      "Smart job discovery",
      "Search and filter roles by company, skill, type and location.",
    ],
    [
      "Application tracking",
      "Keep every application and its current status organized.",
    ],
    [
      "Student dashboard",
      "See deadlines, interviews and placement progress at a glance.",
    ],
  ];

  return (
    <>
      <section className="hero">
        <div>
          <small>CAMPUS PLACEMENT MANAGEMENT SYSTEM</small>
          <h1>
            Build your career from <em>campus to company.</em>
          </h1>
          <p>
            Discover opportunities, manage applications and stay organized
            throughout your placement journey.
          </p>

          <div className="actions">
            <Link className="btn primary" to="/jobs">
              Explore Opportunities →
            </Link>
            <Link className="btn secondary" to="/dashboard">
              Open Dashboard
            </Link>
          </div>

          <div className="trust">
            ✓ Responsive &nbsp; ✓ Accessible &nbsp; ✓ Student-focused
          </div>
        </div>

        <div className="heroCard">
          <b>Placement Overview</b>
          <div className="metrics">
            <div><strong>24</strong><small>Applications</small></div>
            <div><strong>8</strong><small>Shortlisted</small></div>
            <div><strong>5</strong><small>Interviews</small></div>
            <div><strong>12</strong><small>New roles</small></div>
          </div>
          <small>Placement readiness · 78%</small>
          <div className="bar">
            <i style={{ width: "78%" }} />
          </div>
        </div>
      </section>

      <section className="section">
        <small>WHY CAMPUSCONNECT</small>
        <h2>Everything students need in one place</h2>
        <div className="features">
          {features.map(([title, text], index) => (
            <article key={title}>
              <b>0{index + 1}</b>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta">
        <div>
          <small>READY TO START?</small>
          <h2>Find your next opportunity.</h2>
        </div>
        <Link className="btn light" to="/jobs">
          Browse Jobs
        </Link>
      </section>
    </>
  );
}

function JobCard({ job }) {
  return (
    <article className="job">
      <div className="logo">{job.company[0]}</div>

      <div className="jobbody">
        <div>
          <span className="pill">{job.type}</span>
          <small> · {job.location}</small>
        </div>
        <h3>{job.title}</h3>
        <p>{job.company}</p>
        <div className="tags">
          {job.skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </div>

      <Link className="btn small" to={`/jobs/${job.id}`}>
        View details
      </Link>
    </article>
  );
}

function Jobs() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("All");

  const filteredJobs = jobs.filter((job) => {
    const searchableText = `${job.title} ${job.company} ${job.skills.join(" ")}`;
    const matchesQuery = searchableText
      .toLowerCase()
      .includes(query.toLowerCase());
    const matchesType = type === "All" || job.type === type;
    return matchesQuery && matchesType;
  });

  return (
    <main className="page">
      <small>OPPORTUNITIES</small>
      <h1>Find the right role</h1>
      <p className="sub">Search and filter current campus opportunities.</p>

      <div className="filters">
        <input
          aria-label="Search jobs"
          placeholder="Search role, company or skill..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <select value={type} onChange={(event) => setType(event.target.value)}>
          <option>All</option>
          <option>Internship</option>
          <option>Full-time</option>
        </select>
      </div>

      <p className="muted">{filteredJobs.length} opportunities found</p>

      <div className="joblist">
        {filteredJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      {filteredJobs.length === 0 && (
        <div className="empty">No matching opportunities. Try another search.</div>
      )}
    </main>
  );
}

function Details() {
  const { id } = useParams();
  const job = jobs.find((item) => item.id === id);
  const [applied, setApplied] = useState(false);

  if (!job) {
    return (
      <main className="page">
        <h1>Job not found</h1>
      </main>
    );
  }

  return (
    <main className="page">
      <Link to="/jobs" className="back">← Back to jobs</Link>

      <div className="detail">
        <div>
          <div className="title">
            <div className="logo big">{job.company[0]}</div>
            <div>
              <span className="pill">{job.type}</span>
              <h1>{job.title}</h1>
              <p>{job.company} · {job.location}</p>
            </div>
          </div>

          <article className="card">
            <h2>About the role</h2>
            <p>{job.desc}</p>

            <h2>Responsibilities</h2>
            <ul>
              {job.resp.map((item) => <li key={item}>{item}</li>)}
            </ul>

            <h2>Required skills</h2>
            <div className="tags">
              {job.skills.map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          </article>
        </div>

        <aside className="card apply">
          <h2>Application details</h2>
          <p><small>Location</small><b>{job.location}</b></p>
          <p><small>Deadline</small><b>{job.deadline}</b></p>

          <button
            className="btn primary full"
            disabled={applied}
            onClick={() => setApplied(true)}
          >
            {applied ? "✓ Application Submitted" : "Apply Now"}
          </button>

          {applied && (
            <div className="success">
              Application recorded successfully for this demo.
            </div>
          )}

          <Link className="btn secondary full" to="/applications">
            View Applications
          </Link>
        </aside>
      </div>
    </main>
  );
}

function Dashboard() {
  const statuses = ["Applied", "Shortlisted", "Interview", "Applied"];

  return (
    <main className="page">
      <small>STUDENT DASHBOARD</small>
      <h1>Welcome back, Bhavani</h1>
      <p className="sub">Your placement activity at a glance.</p>

      <div className="stats">
        {[
          ["24", "Applications"],
          ["8", "Shortlisted"],
          ["5", "Interviews"],
          ["12", "Saved jobs"],
        ].map(([value, label]) => (
          <div key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>

      <div className="dash">
        <article className="card">
          <h2>Recent applications</h2>
          {jobs.slice(0, 4).map((job, index) => (
            <div className="row" key={job.id}>
              <div className="logo">{job.company[0]}</div>
              <div>
                <b>{job.title}</b>
                <small>{job.company} · {job.location}</small>
              </div>
              <span className="status">{statuses[index]}</span>
            </div>
          ))}
        </article>

        <article className="card">
          <h2>Placement readiness</h2>
          <strong className="percent">78%</strong>
          <p className="green">Good progress</p>
          <div className="bar"><i style={{ width: "78%" }} /></div>
          <ul>
            <li>Profile completed</li>
            <li>Resume uploaded</li>
            <li>Skills added</li>
            <li>Interview preparation</li>
          </ul>
        </article>
      </div>
    </main>
  );
}

function Applications() {
  const [filter, setFilter] = useState("All");
  const statuses = [
    "Applied",
    "Shortlisted",
    "Interview",
    "Applied",
    "Rejected",
    "Shortlisted",
  ];

  const applicationList = jobs
    .map((job, index) => ({ ...job, status: statuses[index] }))
    .filter((job) => filter === "All" || job.status === filter);

  const filters = ["All", "Applied", "Shortlisted", "Interview", "Rejected"];

  return (
    <main className="page">
      <small>APPLICATIONS</small>
      <h1>Track your applications</h1>
      <p className="sub">Monitor each opportunity from application to interview.</p>

      <div className="tabs">
        {filters.map((item) => (
          <button
            className={filter === item ? "active" : ""}
            key={item}
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <article className="card">
        {applicationList.map((job) => (
          <div className="row" key={job.id}>
            <div className="logo">{job.company[0]}</div>
            <div className="grow">
              <b>{job.title}</b>
              <small>{job.company} · {job.location}</small>
            </div>
            <span className="status">{job.status}</span>
            <small className="deadline">{job.deadline}</small>
          </div>
        ))}
      </article>
    </main>
  );
}

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:id" element={<Details />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/applications" element={<Applications />} />
      </Routes>
      <Footer />
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
