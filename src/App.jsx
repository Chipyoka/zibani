import { React, useState } from 'react'
import './App.css'
import ScrollToTop from './components/ScrollToTop';
import CookieConsent from './components/CookieConsent';


import LandingPage from './pages/Landing'
import Legal from './pages/Legal'
import Register from './pages/Register'

import MainApp from './pages/MainApp'; 

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {

  return (
    <>
    <ScrollToTop />

    {/* Routing logic */}
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/register" element={<Register />} />
          <Route path="/app" element={<MainApp />} />
          
          {/* Add more routes as needed */}
          <Route path="*" element={<LandingPage />} /> {/* Fallback route */}
        </Routes>
      </Router>

      {/* Cookie Consent Component */}
      {/* This should be at the bottom of the app to ensure it doesn't block other content */}
      <CookieConsent />
    </>
  )
}


export default App
