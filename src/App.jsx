import { React, useState } from 'react'
import './App.css'


import LandingPage from './pages/Landing'
import Legal from './pages/Legal'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/legal" element={<Legal />} />
        </Routes>
      </Router>
    </>
  )
}


export default App
