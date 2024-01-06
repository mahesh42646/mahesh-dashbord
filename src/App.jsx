import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Nav from './Nav';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
function App() {
  return (
    <Router>
      <>
        <Nav />
        <div className="h-screen w-full ">
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Projects" element={<Projects/>}/>
            <Route path="/Contact" element={<Contact/>}/>
          </Routes>
        </div>
      
      </>
    </Router>
    
  );
}

export default App;
