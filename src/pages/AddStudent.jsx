import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const initialFormData = {
  name: '',
  username: '',
  email: '',
  phone: '',
  website: '',
}

const checklist = [
  'Capture the student name and username.',
  'Add correct email and contact information.',
  'Store the website for a complete profile.',
]

function AddStudent() {
  const [formData, setFormData] = useState(initialFormData)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [submittedStudent, setSubmittedStudent] = useState(null)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')
    setSuccess('')

    const hasEmptyField = Object.values(formData).some(
      (value) => value.trim() === '',
    )

    if (hasEmptyField) {
      setError('Please complete all fields.')
      return
    }

    try {
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/users',
        formData,
      )
      setSubmittedStudent(response.data)
      setSuccess('Student submitted successfully.')
      setFormData(initialFormData)
    } catch {
      setError('Unable to submit student.')
    }
  }

  return (
    <section className="add-student">
      <div className="page-header">
        <p className="eyebrow">Directory</p>
        <h1>Add Student</h1>
        <p className="lede">Create a new student record in the demo workspace.</p>
      </div>

      <div className="add-student-layout">
        <aside className="add-student-side">
          <div className="side-panel">
            <p className="eyebrow subtle">Quick note</p>
            <h2>Create a student entry</h2>
            <ul className="check-list">
              {checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </aside>

        <form className="add-student-form" onSubmit={handleSubmit}>
          <label htmlFor="student-name">
            Name
            <input id="student-name" name="name" value={formData.name} onChange={handleChange} />
          </label>
          <label htmlFor="student-username">
            Username
            <input
              id="student-username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="student-email">
            Email
            <input id="student-email" name="email" value={formData.email} onChange={handleChange} />
          </label>
          <label htmlFor="student-phone">
            Phone
            <input id="student-phone" name="phone" value={formData.phone} onChange={handleChange} />
          </label>
          <label htmlFor="student-website">
            Website
            <input
              id="student-website"
              name="website"
              value={formData.website}
              onChange={handleChange}
            />
          </label>

          <button type="submit">Add Student</button>
        </form>
      </div>

      {error && <p className="state-message error form-error">{error}</p>}
      {success && <p className="form-success">{success}</p>}

      {submittedStudent && (
        <div className="submitted-student">
          <h2>Submitted Student</h2>
          <p><strong>Name:</strong> {submittedStudent.name}</p>
          <p><strong>Username:</strong> {submittedStudent.username}</p>
          <p><strong>Email:</strong> {submittedStudent.email}</p>
          <p><strong>Phone:</strong> {submittedStudent.phone}</p>
          <p><strong>Website:</strong> {submittedStudent.website}</p>
        </div>
      )}

      <Link to="/students">Back to Students</Link>
    </section>
  )
}

export default AddStudent
