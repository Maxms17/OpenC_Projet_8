import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home/Home'
import Logement from './pages/Logement/Logement'
import Propos from './pages/Propos/Propos'
import Erreur from './pages/Erreur/Erreur'

import Header from './components/Header/Header.jsx'
import Body from './components/Body/Body.jsx'
import Footer from './components/Footer/Footer.jsx'


ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logement" element={<Logement />} />
          <Route path="/propos" element={<Propos />} />
          <Route path="*" element={<Erreur />} />
        </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
