import React from 'react';
import Title from '../components/Title';
import Project from '../components/Project';
import ProjectsData from '../utils/Projects.json';

function ProjectSection() {
    return (
        <>
            <section className='ProjectSection min-h-screen border mx-auto flex justify-center flex-col'>

                <div className='mb-6'>
                    <Title title={'Explore My Works'}></Title>
                </div>

                {/* <Project></Project>
                <Project></Project>
                <Project></Project>
                <Project></Project> */}

                {ProjectsData.map((project, index) => <Project key={index} Project={project.Project} Demo={project.Demo} Description={project.Description} Tools={project.MainTools} RWD={project.Responsive}></Project>)}
                
                {/* <div className="project-container group sticky top-28 mb-32">
                    <div className="project h-[80vh] bg-slate-400 relative overflow-hidden">
                        1111111111
                        <div className="overlay">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias perspiciatis, cumque unde, adipisci, officiis natus molestias iusto vitae explicabo sed nulla id quidem eligendi modi corrupti et earum maxime hic? Consequuntur molestiae tempora iusto modi corrupti ex distinctio, nostrum nobis ut, placeat quas officia quae excepturi eligendi exercitationem atque. Voluptatem libero harum, esse necessitatibus sit sed amet ratione rem impedit modi aliquam nihil velit magnam eligendi tempore. Sint libero enim voluptatibus possimus dolorem temporibus quae accusamus veniam iure? Accusamus, tempore? Quaerat harum, officia quo illum unde recusandae ut impedit at vero ex obcaecati non placeat laborum ipsum similique eius quis!
                        </div>
                    </div>
                </div>
                <div className="project-container group sticky top-28 mb-32">
                    <div className="project h-[80vh] bg-slate-400 relative overflow-hidden">
                        2222222222
                        <div className="overlay">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias perspiciatis, cumque unde, adipisci, officiis natus molestias iusto vitae explicabo sed nulla id quidem eligendi modi corrupti et earum maxime hic? Consequuntur molestiae tempora iusto modi corrupti ex distinctio, nostrum nobis ut, placeat quas officia quae excepturi eligendi exercitationem atque. Voluptatem libero harum, esse necessitatibus sit sed amet ratione rem impedit modi aliquam nihil velit magnam eligendi tempore. Sint libero enim voluptatibus possimus dolorem temporibus quae accusamus veniam iure? Accusamus, tempore? Quaerat harum, officia quo illum unde recusandae ut impedit at vero ex obcaecati non placeat laborum ipsum similique eius quis!
                        </div>
                    </div>
                </div>
                <div className="project-container group sticky top-28 mb-32">
                    <div className="project h-[80vh] bg-slate-400 relative overflow-hidden">
                        333333333
                        <div className="overlay">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias perspiciatis, cumque unde, adipisci, officiis natus molestias iusto vitae explicabo sed nulla id quidem eligendi modi corrupti et earum maxime hic? Consequuntur molestiae tempora iusto modi corrupti ex distinctio, nostrum nobis ut, placeat quas officia quae excepturi eligendi exercitationem atque. Voluptatem libero harum, esse necessitatibus sit sed amet ratione rem impedit modi aliquam nihil velit magnam eligendi tempore. Sint libero enim voluptatibus possimus dolorem temporibus quae accusamus veniam iure? Accusamus, tempore? Quaerat harum, officia quo illum unde recusandae ut impedit at vero ex obcaecati non placeat laborum ipsum similique eius quis!
                        </div>
                    </div>
                </div> */}

            </section>
        </>
    )
}

export default ProjectSection;