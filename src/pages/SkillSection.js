import React from 'react';
import Title from '../components/Title';

function SkillSection() {
    return (
        <section className='SkillSection min-h-screen border container mx-auto max-w-7xl mb-14 py-14 bg-slate-400/50'>
            {/* <Title title={'Skills I Have'}></Title> */}

            <div className="skill-container flex">
                <div className="title sticky top-14 h-[70vh] flex justify-center items-center w-1/2 border">
                    <h2 className='text-greeting-color/90 text-4xl'>My Skill Set</h2>
                </div>

                <div className="list-container w-1/2">

                    <div className="front-end">
                        <h2>Front End</h2>
                        <div className="skill-list flex flex-wrap justify-around">
                            <div className='border w-[300px] h-[300px]'>1</div>
                            <div className='border w-[300px] h-[300px]'>1</div>
                            <div className='border w-[300px] h-[300px]'>1</div>
                            <div className='border w-[300px] h-[300px]'>1</div>
                            <div className='border w-[300px] h-[300px]'>1</div>
                            <div className='border w-[300px] h-[300px]'>1</div>
                        </div>
                    </div>

                    <div className="back-end">
                        <h2>Back End</h2>
                        <div className="skill-list flex flex-wrap justify-around">
                            <div className='border w-[300px] h-[300px]'>1</div>
                            <div className='border w-[300px] h-[300px]'>1</div>
                            <div className='border w-[300px] h-[300px]'>1</div>
                            <div className='border w-[300px] h-[300px]'>1</div>
                            <div className='border w-[300px] h-[300px]'>1</div>
                            <div className='border w-[300px] h-[300px]'>1</div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default SkillSection;