import React from 'react';

const DetailModal = ({ details }) => {
    const { picture, name, description, live_site, client_code, server_code } = details;
    return (
        <div>
            <input type="checkbox" id="detail-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="detail-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-3xl text-green-500 font-serif font-bold">{name}</h3>
                    <figure className="pt-10 flex justify-center items-center">
                        <img className='w-48 rounded-xl' src={picture} alt="" />
                    </figure>
                    <p className="py-4 text-black font-serif">{description}</p>
                    <button className='btn btn-xs btn-info sm:btn-sm md:btn-md lg:btn-md mr-2'><a href={live_site} target='_blank'>Website</a></button>
                    <button className='btn btn-xs btn-info sm:btn-sm md:btn-md lg:btn-md mr-2'><a href={client_code} target='_blank'>Client Code</a></button>
                    <button className='btn btn-xs btn-info sm:btn-sm md:btn-md lg:btn-md'><a href={server_code} target='_blank'>Server Code</a></button>
                </div>
            </div>
        </div>
    );
};

export default DetailModal;