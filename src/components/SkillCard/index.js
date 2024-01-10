import React from 'react';
import Atropos from 'atropos/react';
import 'atropos/atropos.css';

function SkillCard({skill, logo, text}) {
    return (
        <Atropos className="my-atropos w-1/4 max-w-[160px] min-h-[150px] max-h-[160px] mx-5 mt-12 relative" activeOffset={50} shadow={false}>
            {/* inner content */}
            <div>
                <img className='absolute w-[130%] h-[130%] max-w-none left-[-15%] top-[-15%]' src="https://images.unsplash.com/photo-1579492450119-80542d516179?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="back-ground" data-atropos-offset="-2" />
                <img className='absolute w-full max-h-full' src={logo} alt={skill + '_Logo'} data-atropos-offset="1" />
                <img className='absolute top-[15%] left-0' src={text} alt={skill + '_Text'} data-atropos-offset="7" />
            </div>
        </Atropos>
    )
}

export default SkillCard;