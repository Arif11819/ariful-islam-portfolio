import React from 'react';

const Project = ({ project, setDetails }) => {
    const { name, picture } = project;
    return (
        <div className="card bg-slate-600">
            <figure className="pt-10">
                <img className='w-32 rounded-xl' src={picture} alt="" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-green-300 font-serif font-bold">{name}</h2>
                <div className="card-actions">
                    <label onClick={() => setDetails(project)}
                        for="detail-modal"
                        className="btn btn-xs btn-info sm:btn-sm md:btn-md lg:btn-lg">Details</label>
                </div>
            </div>
        </div>
    );
};

export default Project;