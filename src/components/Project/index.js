import React from 'react';

function Project({Project, Demo, Description, Tools, RWD}) {
    return (
        <div className="project-container group sticky top-20 mb-32 flex justify-center w-[90vw] mx-auto">
            <div className="project h-[80vh] w-full bg-project relative overflow-hidden" style={{backgroundImage: `url(${Demo})`}}>
                <div className="overlay">
                    {/* <div className="project-description">
                        <p>This Project is an e-commerce website. We established a startup tech company specializing in the sale of cutting-edge electronics called GearHub. Our customers can browse our products and purchase their loved ones online.</p>
                        
                    </div> */}
                    <ul className="project-description p-6">
                        <li className='mb-8'>
                            <h2 className='text-center border-b-2 border-t-2 border-solid border-black font-bold mb-2 text-white'>Project: {Project}</h2>
                            <p className='text-sky-200'>{Description}</p>
                        </li>
                        <li className='mb-8'>
                            <h2 className='text-center border-b-2 border-t-2 border-solid border-black font-bold mb-2 text-white'>Main Tools:</h2>
                            <p className='text-sky-200'>{Tools}</p>
                        </li>
                        <li className='mb-8'>
                            <h2 className='text-center border-b-2 border-t-2 border-solid border-black font-bold mb-2 text-white'>Responsive:</h2>
                            <p className='text-sky-200'>{RWD}</p>
                        </li>
                        {/* <li className='mb-6'>
                            <h2>Time Spent:</h2>
                            <p>10 Days</p>
                        </li> */}
                    </ul>

                    <div className="project-link">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;