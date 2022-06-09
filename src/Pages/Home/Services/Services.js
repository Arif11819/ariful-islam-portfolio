import React from 'react';

const Services = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 pl-16'>
            <div class="card w-96 bg-gray-500 shadow-xl">
                <figure><img src="https://i.ibb.co/7QWpkJk/48fc724173a5.jpg" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">
                        Plain HTML and CSS Website
                    </h2>
                    <p>I can develop</p>
                    <div class="card-actions justify-end">
                        <div class="badge badge-outline">Fashion</div>
                        <div class="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
            <div class="card w-96 bg-gray-500 shadow-xl">
                <figure><img src="https://i.ibb.co/5M3hxTg/dbc631c76245baabe08c31d016a94de2-2.jpg" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">
                        Shoes!
                        <div class="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end">
                        <div class="badge badge-outline">Fashion</div>
                        <div class="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
            <div class="card w-96 bg-gray-500 shadow-xl">
                <figure><img src="https://i.ibb.co/B2JGwz1/large.jpg" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">
                        Shoes!
                        <div class="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end">
                        <div class="badge badge-outline">Fashion</div>
                        <div class="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;