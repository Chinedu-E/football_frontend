import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import StandingsPage from './pages/standings';
import PredictionPage from './pages/predictions';
import ScoresPage from './pages/scores';
import NewsPage from './pages/news';
import BottomNav from './components/bottom_nav';

function App() {
  
  return (
    <div>
      <Navbar />
      <BottomNav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/standings" element={<StandingsPage/>} />
        <Route path="/predictions" element={<PredictionPage/>} />
        <Route path="/scores" element={<ScoresPage/>} />
        <Route path="/news" element={<NewsPage/>} />
      </Routes>
    </div>
  );
}

export default App;
