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
            <div className="h-20 pl-4 md:px-10 py-2 bg-zinc-800 flex">
                <div className="md:px-20 pr-4 block items-center">
                    <img src="/logo.png" alt="logo" className="h-12" />
                    <h2 className="pl-1 text-white">Mahesh</h2>
                </div>
                <div className="md:flex hidden">
                    {navLinks.map((link) => (
                        <Link to={link.to} key={link.to}>
                            <button className="px-1 md:px-6 text-white pt-6 text-xs md:text-lg font-bold"
                                onClick={closeMenu}  > {link.label} </button>
                        </Link>
                    ))}
                </div>
                <input type="search" placeholder='Serch...' className="h-8 mt-6 md:ml-20 rounded-2xl pb-3 pt-2 px-4 md:w-96 w-1/2" />
                <button className="md:hidden text-white pl-6 absolute ml-[69%]  mt-6 p-1" onClick={toggleMenu}>
                    <img className="h-7 " src="/mrnu.png" alt="menu" />
                </button>
                {isMenuOpen && (
                    <div className="grid relative mt-14 bg-gray-300 h-32 rounded-2xl">
                        {navLinks.map((link) => (
                            <div key={link.to}>
                                <Link to={link.to}> <button className="px-4 py-2 text-xs md:text-lg font-bold" onClick={closeMenu} > {link.label}
                                </button>  </Link>
                                <hr />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
export default Nav;
