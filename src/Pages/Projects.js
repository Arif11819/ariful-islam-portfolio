import React, { useEffect, useState } from 'react';
import DetailModal from './DetailModal';
import Project from './Project';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [details, setDetails] = useState(null);
    useEffect(() => {
        fetch('project.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, []);
    return (
        <div>
            <h1 className='text-5xl text-green-400 font-serif font-bold my-12'>My Projects</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-16 pb-20'>
                {
                    projects.map(project => <Project
                        key={project.id}
                        project={project}
                        setDetails={setDetails}
                    >

                    </Project>)
                }
            </div>
            {details && <DetailModal details={details}></DetailModal>}
        </div>
    );
};

export default Projects;