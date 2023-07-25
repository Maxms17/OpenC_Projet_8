import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client'; // Utiliser le chemin correct ici

import Home from './pages/Home/Home';
import Logement from './pages/Logement/Logement';
import Propos from './pages/Propos/Propos';
import Erreur from './pages/Erreur/Erreur';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement); // Utiliser createRoot depuis "react-dom/client"

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement/:id" element={<Logement />} /> {/* id pour trouver le logement à montrer */}
        <Route path="/propos" element={<Propos />} />
        <Route path="*" element={<Erreur />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
