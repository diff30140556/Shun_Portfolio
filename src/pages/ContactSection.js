import React from 'react';
import Title from '../components/Title';
import ContactForm from '../components/ContactForm';

function ContactSection() {
    return (
        <section className='ContactSection min-h-screen border container mx-auto max-w-7xl py-14'>
            <Title title={'Contact Me'}></Title>

            <div className="contact-container">
                <div className="isolate relative px-6 py-24 sm:py-28 lg:px-8 lg:flex">

                    <div className="lg:w-1/2 text-center flex flex-col justify-center text-2xl mb-10 lg:mb-0">
                        <div className='text-white '>
                            <h2 className="font-bold tracking-tight sm:first-letter:text-6xl first-letter:text-4xl first-letter:text-amber-300/90 text-xl sm:text-4xl  mb-3 tracking-wide">Looking for a collaboration?</h2>
                            <h2 className="font-bold tracking-tight sm:first-letter:text-6xl first-letter:text-4xl first-letter:text-red-400/90 text-xl sm:text-4xl  mb-3 tracking-wide">Need a developer?</h2>
                            <h2 className="font-bold tracking-tight sm:first-letter:text-6xl first-letter:text-4xl first-letter:text-green-500/90 text-xl sm:text-4xl  mb-3 tracking-wide">Let's connect</h2>
                        </div>
                    </div>

                    <ContactForm></ContactForm>
                </div>
            </div>
        </section>
    )
}

export default ContactSection;