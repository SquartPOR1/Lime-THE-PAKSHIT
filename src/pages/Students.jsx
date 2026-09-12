import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import StudentCard from '../components/StudentCard.jsx'

function Students() {
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [search, setSearch] = useState('')

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase()),
  )

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/users',
        )
        setStudents(response.data)
      } catch {
        setError('Unable to load students.')
      } finally {
        setLoading(false)
      }
    }

    fetchStudents()
  }, [])

  const stats = [
    { value: students.length, label: 'Total students' },
    { value: filteredStudents.length, label: 'Visible now' },
    { value: search ? 'Filtered' : 'Ready', label: 'Search status' },
  ]

  return (
    <section className="students-page">
      <div className="page-header">
        <p className="eyebrow">Directory</p>
        <h1>Students</h1>
        <p className="lede">Browse and search the current student records.</p>
      </div>

      <div className="toolbar-panel">
        <div className="toolbar-top">
          <label className="student-search">
            Search Students
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by name"
            />
          </label>

          <Link className="button-primary" to="/students/add">
            Add Student
          </Link>
        </div>

        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {loading && <p className="state-message">Loading students...</p>}
      {error && <p className="state-message error">{error}</p>}

      {!loading && !error && (
        <>
          {filteredStudents.length === 0 ? (
            <p className="state-message empty">No students match your search.</p>
          ) : (
            <ul className="student-list">
              {filteredStudents.map((student) => (
                <StudentCard key={student.id} student={student} />
              ))}
            </ul>
          )}
        </>
      )}
    </section>
  )
}

export default Students
