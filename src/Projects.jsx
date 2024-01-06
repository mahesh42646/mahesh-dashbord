import React from 'react';
import ProjectList from './ProjectList';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function Projects() {
  const closeMenu = () => {
    // Implement any logic you need when the menu should close
  };

  return (
    <div className="flex flex-col  ">
      <ProjectList />
      <div className="md:px-52 py-6 ">
        <div className="md:flex rounded-3xl">
          <div className="md:w-1/2 bgcard h-72 rounded-2xl left p-4 my-4">
            <img className="h-full" src="./bookstore.png" alt="project1" />
          </div>
          <div className="md:w-1/2 bgcard h-72 p-4 my-4 right">
          <h1 className="text-2xl">Project 1</h1>
            <h1 className="text-2xl">React Online Bookstore:</h1>
            <p>
              Developed a dynamic online bookstore using React, featuring seamless navigation and a visually appealing interface.
              The project highlights proficiency in React development and a focus on user-centric design.
            </p>
          
            <Link to="/Project1">
              <button className='bg-red-400 px-4 py-1 mt-4 rounded-2xl'>View</button>
            </Link>
          </div>
        </div>
    
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
