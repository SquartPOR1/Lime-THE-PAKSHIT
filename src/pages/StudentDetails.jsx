import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

function StudentDetails() {
  const { id } = useParams()
  const [student, setStudent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchStudent = async () => {
      setLoading(true)
      setError('')
      setStudent(null)

      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${id}`,
        )
        setStudent(response.data)
      } catch {
        setError('Unable to load student details.')
      } finally {
        setLoading(false)
      }
    }

    fetchStudent()
  }, [id])

  const initials = student
    ? student.name
        .split(' ')
        .slice(0, 2)
        .map((part) => part[0])
        .join('')
        .toUpperCase()
    : ''

  return (
    <section className="student-details">
      <div className="page-header">
        <p className="eyebrow">Student record</p>
        <h1>Student Details</h1>
        <p className="lede">A closer look at one student in the directory.</p>
      </div>

      {loading && <p className="state-message">Loading student details...</p>}
      {error && <p className="state-message error">{error}</p>}

      {!loading && !error && student && (
        <div className="details-shell">
          <div className="detail-hero">
            <div className="student-avatar large">{initials}</div>
            <div>
              <p className="eyebrow subtle">Student profile</p>
              <h2>{student.name}</h2>
              <p className="lede">{student.email}</p>
            </div>
          </div>

          <div className="student-details-card">
            <p><strong>ID:</strong> {student.id}</p>
            <p><strong>Username:</strong> {student.username}</p>
            <p><strong>Email:</strong> {student.email}</p>
            <p><strong>Phone:</strong> {student.phone}</p>
            <p><strong>Website:</strong> {student.website}</p>
            <p>
              <strong>Address:</strong> {student.address.street},{' '}
              {student.address.suite}, {student.address.city},{' '}
              {student.address.zipcode}
            </p>
            <p><strong>Company:</strong> {student.company.name}</p>
            <p><strong>Catchphrase:</strong> {student.company.catchPhrase}</p>
          </div>

          <div className="detail-actions">
            <Link className="button-primary" to="/students">
              Back to Students
            </Link>
          </div>
        </div>
      )}
    </section>
  )
}

export default StudentDetails
