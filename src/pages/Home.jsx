import { Link } from 'react-router-dom'

const stats = [
  { value: '250+', label: 'Student profiles tracked' },
  { value: '12', label: 'Departments synced' },
  { value: '99.9%', label: 'Demo uptime' },
]

const features = [
  {
    icon: '01',
    title: 'Student Directory',
    description: 'Browse, search, and quickly explore student records from one clean dashboard.',
  },
  {
    icon: '02',
    title: 'Fast Search',
    description: 'Filter the list by name to locate any student in seconds.',
  },
  {
    icon: '03',
    title: 'Add New Records',
    description: 'Create new student entries with a smooth, guided form experience.',
  },
]

function Home() {
  return (
    <section className="home-page">
      <div className="hero-panel">
        <div className="page-header hero-header">
          <p className="eyebrow">Student Management Portal</p>
          <h1>Keep every student detail within reach.</h1>
          <p className="lede">
            Browse the student directory, find a record by name, or add a new
            student to the demo workspace with a more polished experience.
          </p>
        </div>

        <div className="home-actions">
          <Link className="button-primary" to="/students">
            View Students
          </Link>
          <Link className="button-secondary" to="/students/add">
            Add Student
          </Link>
        </div>
      </div>

      <div className="stats-grid">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-card">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>

      <div className="feature-grid">
        {features.map((feature) => (
          <article key={feature.title} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Home
