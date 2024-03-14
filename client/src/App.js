import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import "./fonts/Montserrat-Regular.ttf"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact Component={Home} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
