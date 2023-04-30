import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/navbar';
import Home from './pages/home';
import StandingsPage from './pages/standings';
import PredictionPage from './pages/predictions';
import ScoresPage from './pages/scores';
import LeaguePage from './pages/league';

function App() {
  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/standings" element={<StandingsPage/>} />
        <Route path="/predictions" element={<PredictionPage/>} />
        <Route path="/scores" element={<ScoresPage/>} />
        <Route path="/leagues/:league" element={<LeaguePage/>} />
      </Routes>
      <Analytics />
    </div>
  );
}

export default App;
