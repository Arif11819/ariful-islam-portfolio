import React from 'react';

const Banner = () => {
    const background = 'https://i.ibb.co/b5k4jFX/279926739-1322176401592416-7681994299822122901-n-removebg.jpg';
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse px-10">
                <div className='ml-32'>
                    <img className="mask mask-decagon" src={background} />
                </div>
                <div>
                    <h1 className="mb-5 text-5xl font-bold"><span className='text-amber-500'>I'm</span> a Junior <span className='text-green-300'>Web Developer</span></h1>
                    <p className="mb-5 text-amber-400 font-sans font-semibold">This is me Ariful a web developer working for the last 6 months. I have completed all kinds of things that are needed for web development.</p>
                    <a href="https://drive.google.com/file/d/1ApwS3OWff0KZ23lqhZUNeJ0G01rKDud7/view?usp=sharing" target="_blank"><button
                        className="btn btn-xs bg-gray-500 text-amber-300 font-sans font-bold sm:btn-sm md:btn-md lg:btn-lg">My Resume</button></a>
                </div>
            </div>
        </div>
    );
};

export default Banner;