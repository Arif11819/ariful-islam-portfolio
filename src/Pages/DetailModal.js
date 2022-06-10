import React from 'react';

const DetailModal = ({ details }) => {
    const { name, description } = details;
    return (
        <div>
            <input type="checkbox" id="detail-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="detail-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-3xl text-green-500 font-serif font-bold">{name}</h3>
                    <p class="py-4 text-black font-serif">{description}</p>
                    {/* <div class="modal-action">
                        <label for="detail-modal" class="btn">Yay!</label>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default DetailModal;