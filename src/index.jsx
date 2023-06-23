import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home/'
import Logement from './pages/Logement'
import Propos from './pages/Propos'
import Erreur from './pages/Erreur'

import Header from './components/Header'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Logement />} />
        <Route path="/" element={<Propos />} />
        <Route path="/" element={<Erreur />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
