import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        <div>
            <h1 className='skill-heading text-4xl font-sans font-bold'>My Skill Summary</h1>
            <div className='skill-container grid grid-cols-2 gap-5 px-10'>
                <div>
                    <li className='py-8 font-sans text-2xl font-semibold text-amber-300 html'>HTML</li>
                    <li className='py-8 font-sans text-2xl font-semibold  mt-6 text-amber-300 css'>CSS</li>
                    <li className='py-8 font-sans text-2xl font-semibold  mt-6 text-amber-300 bootstrap'>Bootstrap</li>
                    <li className='py-8 font-sans text-2xl font-semibold  mt-6 text-amber-300 tailwind'>Tailwind</li>
                    <li className='py-8 font-sans text-2xl font-semibold  mt-6 text-amber-300 js'>JS</li>
                </div>
                <div>
                    <li className='py-8 font-sans text-2xl font-semibold text-amber-300 react'>React JS</li>
                    <li className='py-8 font-sans text-2xl font-semibold mt-6 text-amber-300 node'>Node JS</li>
                    <li className='py-8 font-sans text-2xl font-semibold mt-6 text-amber-300 express'>Express JS</li>
                    <li className='py-8 font-sans text-2xl font-semibold mt-6 text-amber-300 mongo'>MongoDB</li>
                    <li className='py-8 font-sans text-2xl font-semibold mt-6 text-amber-300 type'>TypeScript</li>
                </div>
            </div>
        </div>
    );
};

export default Skills;