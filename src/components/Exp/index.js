import React from 'react';

function Exp({title, describe}) {
    return (
        <div className="flex justify-center px-4 mb-10 relative circle arrow even:flex-row-reverse even:arrow-right odd:text-end">
            <div className="w-1/2 py-6 px-12" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                <h2>{title}</h2>
                <p>{describe}</p>
            </div>
            <div className="w-1/2">
            </div>
        </div>
    )
}

export default Exp;