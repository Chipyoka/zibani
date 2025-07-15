import { React, useState } from 'react'
import './App.css'
import ScrollToTop from './components/ScrollToTop';
import CookieConsent from './components/CookieConsent';


import LandingPage from './pages/Landing'
import Legal from './pages/Legal'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ScrollToTop />

    {/* Routing logic */}
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/legal" element={<Legal />} />
        </Routes>
      </Router>

      {/* Cookie Consent Component */}
      {/* This should be at the bottom of the app to ensure it doesn't block other content */}
      <CookieConsent />
    </>
  )
}


export default App
