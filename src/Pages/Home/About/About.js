import React from 'react';

const About = () => {
    return (
        <div className='mt-24 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5'>
                <div className="card w-96 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-7xl font-sans font-bolder pl-28">5+</h2>
                        <p>Months of Experience</p>
                    </div>
                </div>
                <div className="card w-96 bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-red-500 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-7xl font-sans font-bolder pl-28">20+</h2>
                        <p>Complete Projects</p>
                    </div>
                </div>
                <div className="card w-96 bg-gradient-to-r from-green-400 to-blue-500 hover:from-white hover:to-yellow-500 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-7xl font-sans font-bolder pl-28">48+</h2>
                        <p>Working Hours</p>
                    </div>
                </div>
                <div className="card w-96 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-7xl font-sans font-bolder pl-28">1+</h2>
                        <p className='font-serif'>Awards Won</p>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-5xl mt-16 text-green-400 font-serif font-extrabold'>About Me</h1>
                <p className='text-amber-500 font-serif pl-4'>I try to build up my career as a Web Developer. My superior focus and attention <br /> to detail combined with my extensive knowledge of HTML, CSS, Bootstrap, Tailwind, Javascript, React, <br /> Daisy UI, React Bootstrap, and comfortable  with NodeJS,<br /> ExpressJS, MongoDB, API, Firebase, and Heroku. I have done 20+ projects with that language and framework. <br /> All of my skills make me an outstanding candidate for the Junior Web Developer position.</p>
            </div>
        </div>
    );
};

export default About;