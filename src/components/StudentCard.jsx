import { Link } from 'react-router-dom'

function StudentCard({ student }) {
  return (
    <li className="student-card">
      <p><strong>{student.name}</strong></p>
      <p><strong>ID:</strong> {student.id}</p>
      <p><strong>Username:</strong> {student.username}</p>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Phone:</strong> {student.phone}</p>
      <Link to={`/students/${student.id}`}>View Details</Link>
    </li>
  )
}

export default StudentCard
