import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link className='px-4 text-amber-500 font-sans' to='/'>Home</Link></li>
                        <li><Link className='px-4 text-amber-500' to='/project'>Project</Link></li>
                        <li> <Link className='px-4 text-amber-500' to='/skills'>Skills</Link></li>
                        <li> <Link className='px-4 text-amber-500' to='/blogs'>Blogs</Link></li>
                    </ul>
                </div>
                <h2 className='text-amber-500 text-4xl font-serif heading font-bold pl-32'>ARIFUL ISLAM</h2>
            </div>
            <div className="navbar-center hidden lg:flex pl-52">
                <ul className="menu menu-horizontal p-0">
                    <li><Link className='px-8 text-amber-500 font-sans font-semibold' to='/'>Home</Link></li>
                    <li><Link className='px-8 text-amber-500 font-sans font-semibold' to='/project'>Project</Link></li>
                    <li> <Link className='px-8 text-amber-500 font-sans font-semibold' to='/skills'>Skills</Link></li>
                    <li> <Link className='px-8 text-amber-500 font-sans font-semibold' to='/blogs'>Blogs</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;