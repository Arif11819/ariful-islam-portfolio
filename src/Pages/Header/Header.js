import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div class="navbar">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link className='px-4 text-amber-500 font-sans' to='/'>Home</Link></li>
                        <li><Link className='px-4 text-amber-500' to='/project'>Project</Link></li>
                        <li> <Link className='px-4 text-amber-500' to='/skills'>Skills</Link></li>
                    </ul>
                </div>
                <h2 className='text-amber-500 text-4xl font-serif font-bold pl-32'>ARIFUL</h2>
            </div>
            <div class="navbar-center hidden lg:flex pl-52">
                <ul class="menu menu-horizontal p-0">
                    <li><Link className='px-8 text-amber-500 font-sans font-semibold' to='/'>Home</Link></li>
                    <li><Link className='px-8 text-amber-500 font-sans font-semibold' to='/project'>Project</Link></li>
                    <li> <Link className='px-8 text-amber-500 font-sans font-semibold' to='/skills'>Skills</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;