import React from 'react';

const DetailModal = ({ details }) => {
    const { name, description, live_site } = details;
    return (
        <div>
            <input type="checkbox" id="detail-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="detail-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-3xl text-green-500 font-serif font-bold">{name}</h3>
                    <p className="py-4 text-black font-serif">{description}</p>
                    <button className='btn btn-xs btn-info sm:btn-sm md:btn-md lg:btn-lg'><a href={live_site} target='_blank'>Live Site</a></button>
                </div>
            </div>
        </div>
    );
};

export default DetailModal;