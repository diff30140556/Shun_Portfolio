import React from 'react';

function Exp({ company, location, title, year, description }) {
    return (
        <div className="flex justify-center px-4 mb-10 relative circle arrow even:flex-row-reverse even:arrow-right odd:text-end">
            <div className="w-1/2 py-6 px-12">
                <div className="expCompany flex justify-between">
                    <h2 className='text-[1.5rem]'>{company}</h2>
                    <h3 className='text-sm'>{location}</h3>
                </div>
                <div className="expTitle flex justify-between mb-2">
                    <h2 className='text-base'>{title}</h2>
                    <h3 className='text-sm'>{year}</h3>
                </div>
                <p className='text-justify'>{description}</p>
            </div>
            <div className="w-1/2">
            </div>
        </div>
    )
}

export default Exp;