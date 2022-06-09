import React from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

const Contact = () => {

    const sendEmail = event => {
        event.preventDefault();
        emailjs.sendForm('service_8n37id7', 'template_5a6q3eq', event.target, 'i9a92Qa9YM4yGnRUB', 'NSDWcVsZ5INQiptdoYr_o').then(res => {
            toast.success("Thank You Sir For Your Response!!")
        }).catch(err => console.log(err));
    }

    return (
        <div className='my-20'>
            <h1 className='my-6 text-5xl font-serif font-bold text-green-300'>Contact Me</h1>
            <div className='form-container mx-auto grid grid-cols-1'>
                <form onSubmit={sendEmail} className='flex flex-col justify-center items-center py-12 gap-3'>
                    <input name='name' required type="text" placeholder="Your Name" class="input input-bordered w-96" />
                    <input name='email' required type="text" placeholder="Your Email" class="input input-bordered w-96" />
                    <input name='subject' required type="text" placeholder="Subject" class="input input-bordered w-96" />
                    <textarea name='message' type="text" placeholder="Your Message" class="input input-bordered w-96" />
                    <input type="submit" className='btn btn-xs sm:btn-sm md:btn-md lg:btn-lg' value="Send Message" />
                </form>
            </div>
        </div>

    );
};

export default Contact;