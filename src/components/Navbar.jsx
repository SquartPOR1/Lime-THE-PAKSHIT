import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink className="navbar-brand" to="/" end>
        <strong>Student Portal</strong>
        <span>Management workspace</span>
      </NavLink>
      <div className="navbar-links">
        <NavLink to="/students">Students</NavLink>
        <NavLink to="/students/add">Add Student</NavLink>
      </div>
    </nav>
  )
}

export default Navbar
