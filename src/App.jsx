import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Nav from './Nav';
import Projects from './Projects';
import Contact from './Contact';

import Project1 from './Project1';
import ProjectList from './ProjectList';
import Project2 from './Project2';
import Project3 from './Project3';
import Project4 from './Project4';
import Project5 from './Project5';
function App() {
  return (
    <Router>
      <div className="text-white  bg-cover" style={{ backgroundImage: `url('./purple.avif')` }}>
        <Nav />
        <div className=" w-full ">
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Projects" element={<Projects/>}/>
            <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Project1" element={<Project1/>}/>
      <Route path="/Project2" element={<Project2/>}/>
      <Route path="/Project3" element={<Project3/>}/>
      <Route path="/Project4" element={<Project4/>}/>
      <Route path="/Project5" element={<Project5/>}/>
      <Route path="/ProjectList" element={<ProjectList/>}/>
          </Routes>
        </div>
       
        
        </div> 
    </Router>
    
  );
}

export default App;
