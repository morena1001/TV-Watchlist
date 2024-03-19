import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import { Resource } from './components/pages/Resource';
import { CreateResource } from './components/pages/CreateResource';
import "./fonts/Montserrat-Regular.ttf"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/shows/:id' Component={Resource} />
          <Route path='/new' Component={CreateResource} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
