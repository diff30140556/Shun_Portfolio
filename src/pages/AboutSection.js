import React from 'react';
import Title from '../components/Title';
import SkillCard from '../components/SkillCard';
import skillData from '../utils/SkillData.json'
import 'atropos/atropos.css';

function AboutSection() {
    return (
        <section className="AboutSection min-h-screen border container mx-auto max-w-7xl py-14">
            <Title title={'About Me'}></Title>

            <div className="about-`container` py-20 px-16 grid grid-cols-7 gap-10 items-start">

                <div className="avatarContainer col-span-3 sticky top-24 pt-6">
                    <div className="flex justify-center avatar-border relative">
                        <img src="https://i.imgur.com/OI0xSTG.jpg" alt="avatar" className='w-[90%] translate-x-[-5%] translate-y-[-5%] z-10' />
                    </div>
                </div>

                <div className="paragraph-container col-span-4 text-white">
                    <div className="paragraph">
                        <h3 className='mb-8 text-3xl font-monospace'>I <span className='text-greeting-color/90'>Code../Design../Solve Bugs..</span></h3>

                        <p className='first-letter:font-bold first-letter:text-5xl first-letter:text-white/90 text-lg first-letter:float-left first-letter:mr-2 tracking-widest'>Hello world, this is Wayne.
                            A web developer who is fascinated by creation and relishing the process of building something from scratch. Transforming wild ideas into real-world solutions for every challenge is where I find my joy. Completing a project gives me a sense of accomplishment, and seeing people impressed by my work brings me so much joy and satisfied.
                            <br></br><br></br>As a developer, I will always be on a journey to continue writing my adventure story in code.</p>
                    </div>


                    <div className="skill-container mt-16 text-3xl">
                        <h2>My Skill Sets</h2>
                        <div className="skill-cards flex flex-wrap">
                            {skillData.map((skill, index) => <SkillCard skill={skill.name} logo={skill.logo} text={skill.text} key={index}></SkillCard>)}
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default AboutSection;