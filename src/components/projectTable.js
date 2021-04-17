import React from 'react';
import {projectData} from './projectData';

class ProjectTable extends React.Component{
    render(){
        return(
            <section>
                <div className="slider">
                    <div>
                        <div className="columns is-multiline is-centered">
                            {projectData.map((project) =>{
                                return (
                                    <div className="column box is-one-third has-text-centered">
                                        {project.project_name}
                                        <p>{project.project_desc}</p>
                                        <span class="icon">
                                            <i class={project.icon}></i>
                                        </span>
                                    </div>
                                )
                            })}
                            <div className="column box is-one-third selectable-box has-text-centered">Ver Más</div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ProjectTable