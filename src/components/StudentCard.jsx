import { Link } from 'react-router-dom'

function StudentCard({ student }) {
  const initials = student.name
    .split(' ')
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()

  return (
    <li className="student-card">
      <div className="student-card-header">
        <div className="student-avatar">{initials}</div>
        <span className="summary-pill">#{student.id}</span>
      </div>

      <div className="student-card-body">
        <h3>{student.name}</h3>

        <div className="student-card-badges">
          <span className="card-tag">@{student.username}</span>
        </div>

        <div className="student-card-meta">
          <div className="meta-row">
            <span>Email</span>
            <strong>{student.email}</strong>
          </div>
          <div className="meta-row">
            <span>Phone</span>
            <strong>{student.phone}</strong>
          </div>
        </div>
      </div>

      <Link className="button-card" to={`/students/${student.id}`}>
        View Details
      </Link>
    </li>
  )
}

export default StudentCard
