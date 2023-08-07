import React from 'react';

function Title({ title }) {
    return (
        <div className="title text-center border">
            <h2 className='head-line end-line text-3xl text-title-color italic font-bold tracking-normal text-center font-math relative inline-block relative'>{title}</h2>
        </div>
    )
}

export default Title;