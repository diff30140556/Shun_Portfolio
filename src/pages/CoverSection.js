import React from 'react';

function CoverSection() {
    return (
        <section className="CoverSection min-h-screen bg-[url('https://i.imgur.com/LTJLw1B.jpg')] bg-center bg-cover bg-no-repeat flex items-center">
            <div className="container max-w-7xl mx-auto">
                <h2 className='greeting text-greeting-color/25 font-impact'>Hi, my name is <br></br> Wayne <br></br> a passionate <br></br> web developer </h2>

            </div>
        </section>
    )
}

export default CoverSection;