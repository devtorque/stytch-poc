import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Authenticate } from './components/Authenticate'
import Dashboard from './components/Dashboard'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Authenticate />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
