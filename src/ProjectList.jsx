import React from 'react';
import { Link } from 'react-router-dom'; 

function ProjectList() {
  const navLinks = [
    { to: '/Project1', label: 'Project1' },
    { to: '/Project2', label: 'Project2' },
    { to: '/Project3', label: 'Project3' },
    { to: '/Project4', label: 'Project4' },
    { to: '/Project5', label: 'Project5' },
  ];

  const closeMenu = () => {
    // Add any logic you need when closing the menu
  };

  return (
    <div className="pt-20  bg-cover flex justify-center" style={{ backgroundImage: `url('./purple.avif')` }}>
      
        {navLinks.map((link) => (
          <Link to={link.to} key={link.to}>
            <button className="px-1 md:px-6 text-white text-xs md:text-lg font-bold "
        onClick={closeMenu}
>
  {link.label}
</button>

          </Link>
        ))}
      
   
    </div>
  );
}

export default ProjectList;
