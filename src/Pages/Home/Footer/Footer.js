import React from 'react';

const Footer = () => {
    return (
        <footer class="footer footer-center grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mt-10 text-primary-content">
            <div className='my-16'>
                <p className='text-2xl text-green-300 font-serif font-bold'>Created By <span className='text-amber-500'>Ariful Islam</span> || All Right Reserved-2022</p>
                <div className='mt-8'>
                    <div className='flex gap-5 items-center py-2'>
                        <img className='w-12' src="https://i.ibb.co/T1tt2VY/bussiness-man.png" alt="" />
                        <p className='text-2xl text-green-300'>Md. Ariful Islam</p>
                    </div>
                    <div className='flex gap-5 items-center py-2'>
                        <img className='w-12' src="https://i.ibb.co/gmpQY9z/telephone.png" alt="" />
                        <p className='text-2xl text-green-300'>+8801779718396</p>
                    </div>
                    <div className='flex gap-5 items-center py-2'>
                        <img className='w-12' src="https://i.ibb.co/w0G8RWn/gmail.png" alt="" />
                        <p className='text-2xl text-green-300'>md.arifulislam11819@gmail.com</p>
                    </div>
                    <div className='flex gap-5 items-center py-2'>
                        <img className='w-12' src="https://i.ibb.co/Y8rQ96x/placeholder.png" alt="" />
                        <p className='text-2xl text-green-300'>Dinajpur-5200, Bangladesh</p>
                    </div>
                </div>
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