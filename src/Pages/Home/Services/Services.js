import React from 'react';

const Services = () => {
    return (
        <div className='mt-16'>
            <h1 className='text-5xl font-serif font-extrabold mb-12 text-black'>My <span className='text-green-300'>Services</span> </h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 pl-16'>
                <div class="card w-96  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-xl">
                    <figure><img src="https://i.ibb.co/7QWpkJk/48fc724173a5.jpg" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title text-green-400 font-sans font-bold text-2xl">
                            Plain HTML and CSS Website
                        </h2>
                        <p className='font-sans font-semibold'>I can develop pixel perfect responsive websites with HTML and CSS from provided figma design</p>
                        <div class="card-actions justify-end mt-6">
                            <div class="badge badge-outline">HTML</div>
                            <div class="badge badge-outline">CSS</div>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-gradient-to-r from-cyan-500 to-blue-500  shadow-xl">
                    <figure><img src="https://i.ibb.co/5M3hxTg/dbc631c76245baabe08c31d016a94de2-2.jpg" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title text-amber-700 font-sans font-bold text-2xl pl-16">
                            SPA with REACT
                        </h2>
                        <p className='font-sans font-semibold'>I can develop fast and fully responsive single page React web apps with routing(protected and nested) authentication etc.</p>
                        <div class="card-actions justify-end mt-6">
                            <div class="badge badge-outline">JavaScript</div>
                            <div class="badge badge-outline">React</div>
                            <div class="badge badge-outline">Firebase</div>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-xl">
                    <figure><img src="https://i.ibb.co/B2JGwz1/large.jpg" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title text-green-400 font-sans font-bold text-2xl pl-4">
                            MERN stack web application
                        </h2>
                        <p>I can develop full stack web app with authorization features like JWT, Admin Role, Payment System etc.</p>
                        <div class="card-actions justify-end mt-6">
                            <div class="badge badge-outline">React</div>
                            <div class="badge badge-outline">Node</div>
                            <div class="badge badge-outline">Express</div>
                            <div class="badge badge-outline">MongoDB</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;