import React from 'react';
import Title from '../components/Title';

function AboutSection() {
    return (
        <section className="AboutSection min-h-screen border container mx-auto max-w-7xl">
            <Title title='About Me'></Title>

            <div className="about-container py-24 px-16 grid grid-cols-7 gap-10 items-center">
                <div className="avatar-container col-span-3 flex justify-center avatar-border relative">
                    <img src="https://i.imgur.com/T92uDfl.jpg" alt="avatar" className='w-3/4 translate-x-[-5%] translate-y-[-5%] z-10' />
                </div>

                <div className="paragraph-container col-span-4 text-white">
                    <h3 className='mb-8 text-3xl font-monospace'>I <span className='text-greeting-color/90'>Code../Design../Solve Bugs..</span></h3>

                    <p className='mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo doloremque mollitia ex eos voluptatum perspiciatis odit repellendus aliquid reiciendis nihil ipsa vitae, aspernatur labore sapiente facilis natus voluptas provident consequatur excepturi harum deserunt accusantium suscipit necessitatibus. Optio atque laudantium alias nulla est debitis, veniam rerum similique, aliquam sunt error eveniet?</p>

                    <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo doloremque mollitia ex eos voluptatum perspiciatis odit repellendus aliquid reiciendis nihil ipsa vitae, aspernatur labore sapiente facilis natus voluptas provident consequatur excepturi harum deserunt accusantium suscipit necessitatibus. Optio atque laudantium alias nulla est debitis, veniam rerum similique, aliquam sunt error eveniet?</p>

                </div>
            </div>
        </section>
    )
}

export default AboutSection;