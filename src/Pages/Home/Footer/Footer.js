import React from 'react';

const Footer = () => {
    return (
        <footer class="footer footer-center grid grid-cols-2 mt-10 text-primary-content">
            <div className='my-16'>
                <p className='text-2xl text-green-300 font-serif font-bold'>Created By <span className='text-amber-500'>Ariful Islam</span> || All Right Reserved-2022</p>
            </div>
            <div className='my-16'>
                <div class="grid grid-flow-col gap-8">
                    <a href='https://www.linkedin.com/in/md-ariful-islam-032243241/' target='_blank'><img className='w-12 border-rounded' src="https://i.ibb.co/VDs4cYV/linkedin.png" alt="" /></a>
                    <a href='https://github.com/Arif11819' target='_blank'><img className='w-12 border-rounded' src="https://i.ibb.co/T8yNggC/github.png" alt="" /></a>
                    <a href='https://www.facebook.com/profile.php?id=100014002066391' target='_blank'><img className='w-12 border-rounded' src="https://i.ibb.co/NxNsKHp/facebook.png" alt="" /></a>
                    <a href='https://www.instagram.com/arif11819/' target='_blank'><img className='w-12 border-rounded' src="https://i.ibb.co/wwjL4jJ/instagram.png" alt="" /></a>

                </div>
            </div>
        </footer>
    );
};

export default Footer;