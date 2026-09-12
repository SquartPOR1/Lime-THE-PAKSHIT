import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import AddStudent from './pages/AddStudent.jsx'
import Home from './pages/Home.jsx'
import StudentDetails from './pages/StudentDetails.jsx'
import Students from './pages/Students.jsx'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="portal">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/students/add" element={<AddStudent />} />
          <Route path="/students/:id" element={<StudentDetails />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
