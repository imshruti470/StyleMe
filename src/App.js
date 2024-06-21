import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Services from './components/services';


import Footer from './components/footer';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
          
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
