import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="home-page">
      <div className="page-header">
        <p className="eyebrow">Student Management Portal</p>
        <h1>Keep every student detail within reach.</h1>
        <p className="lede">
          Browse the student directory, find a record by name, or add a new
          student to the demo workspace.
        </p>
      </div>
      <Link className="button-primary" to="/students">
        View Students
      </Link>
    </section>
  )
}

export default Home
