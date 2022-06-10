import React, { useState } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [textarea, setTextarea] = useState('');

    const sendEmail = event => {
        event.preventDefault();
        emailjs.sendForm('service_8n37id7', 'template_5a6q3eq', event.target, 'i9a92Qa9YM4yGnRUB', 'NSDWcVsZ5INQiptdoYr_o').then(res => {
            toast.success("Thank You Sir For Your Response!!")
        }).catch(err => console.log(err));
        setName('');
        setEmail('');
        setSubject('');
        setTextarea('');
    }

    return (
        <div className='my-20'>
            <h1 className='my-6 text-5xl font-serif font-bold text-green-300'>Contact Me</h1>
            <div className='form-container mx-auto grid grid-cols-1'>
                <form onSubmit={sendEmail} className='flex flex-col justify-center items-center py-12 gap-3'>
                    <input onChange={event => setName(event.target.value)} value={name} name='name' required type="text" placeholder="Your Name" className="input input-bordered w-96" />
                    <input onChange={event => setEmail(event.target.value)} value={email} name='email' required type="text" placeholder="Your Email" className="input input-bordered w-96" />
                    <input onChange={event => setSubject(event.target.value)} value={subject} name='subject' required type="text" placeholder="Subject" className="input input-bordered w-96" />
                    <textarea onChange={event => setTextarea(event.target.value)} value={textarea} name='message' required type="text" placeholder="Your Message" className="input input-bordered w-96" />
                    <input type="submit" className='btn btn-xs sm:btn-sm md:btn-md lg:btn-lg' value="Send Message" />
                </form>
            </div>
        </div>

    );
};

export default Contact;