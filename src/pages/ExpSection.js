import React from 'react';
import Title from '../components/Title';
import Exp from '../components/Exp';

function ExpSection() {

    const expData = [
        {
            title: 'xxxsx',
            describe: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolore ipsa nobis natus,
            non illum ipsam eveniet dignissimos perspiciatis quia beatae vero culpa nemo vel
            exercitationem corporis suscipit? Fugit, debitis? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Incidunt`
        },
        {
            title: 'xxxdx',
            describe: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolore ipsa nobis natus,
            non illum ipsam eveniet dignissimos perspiciatis quia beatae vero culpa nemo vel
            exercitationem corporis suscipit? Fugit, debitis? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Incidunt`
        },
        {
            title: 'xxxfx',
            describe: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolore ipsa nobis natus,
            non illum ipsam eveniet dignissimos perspiciatis quia beatae vero culpa nemo vel
            exercitationem corporis suscipit? Fugit, debitis? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Incidunt`
        },
        {
            title: 'xxxtx',
            describe: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolore ipsa nobis natus,
            non illum ipsam eveniet dignissimos perspiciatis quia beatae vero culpa nemo vel
            exercitationem corporis suscipit? Fugit, debitis? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Incidunt`
        },
    ]
    return (
        <section className='ExpSection min-h-screen border container mx-auto max-w-7xl py-14'>
            <Title title={'Experience'}></Title>
            <div className="expContainer text-white">
                <div className="relative mt-16 timeline py-2">
                    {expData.map( (exp) => <Exp title={exp.title} describe={exp.describe} key={exp.title}></Exp>)}
                </div>

            </div>
        </section>
    )
}

export default ExpSection;