import React from 'react';

const Logo = () => {
    return (
        <div className='mt-32 w-full px-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8'>
            <div><img className='w-32' src="https://i.ibb.co/k6jYgRw/html-5.png" alt="" /></div>
            <div> <img className='w-32' src="https://i.ibb.co/tsBwZyt/css-3.png" alt="" /> </div>
            <div> <img className='w-32' src="https://i.ibb.co/DDN0xbm/bootstrap.png" alt="" /> </div>
            <div> <img className='w-32' src="https://i.ibb.co/nDGBJRS/js.png" alt="" /> </div>
            <div> <img className='w-32' src="https://i.ibb.co/jDPx1CN/physics.png" alt="" /> </div>
            <div> <img className='w-32' src="https://i.ibb.co/c6vhyvJ/nodejs.png" alt="" /> </div>
            <div> <img className='w-32' src="https://i.ibb.co/x2BpQd8/figma.png" alt="" /> </div>
            <div> <img className='w-32' src="https://i.ibb.co/mT6vMKJ/typescript.png" alt="" /> </div>
        </div>
    );
};

export default Logo;