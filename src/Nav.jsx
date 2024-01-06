import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const closeMenu = () => {
        setIsMenuOpen(false);
    };
    const navLinks = [
        { to: '/home', label: 'Home' },
        { to: '/about', label: 'About' },
        { to: '/projects', label: 'Projects' },
        { to: '/contact', label: 'Contact' },
    ];
    return (
        <div className="fixed w-full">
            <div className="h-20 pl-4 md:px-10 py-2 bg-cover border-b border-solid border-gray-500  flex" style={{ backgroundImage: `url('./purple.avif')` }}>
                <div className="md:px-20 pr-4 block items-center">
                    <img src="/logo.png" alt="logo" className="h-12" />
                    <h2 className="pl-1 text-white">Mahesh</h2>
                </div>
                <div className="">
                    {navLinks.map((link) => (
                        <Link to={link.to} key={link.to}>
                            <button className="px-1 md:px-6 text-white pt-6 text-lg md:text-2xl font-bold"
                                onClick={closeMenu}  > {link.label} </button>
                        </Link>
                    ))}
                </div>
               
                <div className=" text-black absolute flex ml-[55%]  mt-6 " >
                  <input className="md:flex hidden rounded-2xl py-1 w-72 px-4" type="serch" placeholder='serch...' />
                  
                </div>
            
            </div>
        </div>
    );
}
export default Nav;
