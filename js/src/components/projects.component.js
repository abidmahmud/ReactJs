import React, { Component } from 'react';
import Project from './project.component'


class Projects extends React.Component {
    state = {
        projects: ["React", "ReactDom", "Galapagos", "Mecidonia"]
    }
    // I have to remove from here
    // because i am parent

    handleDeleteProject = (projectIndex) => {
        const del = this.state.projects;
        del.splice(projectIndex, 1);
        this.setState({ projects: del });
    }

    render() {
        return (
            <>
                <h1>My Projects</h1>
                {
                    this.state.projects.map((name, index) => {
                        return <Project
                            key={index}
                            handleDeleteProject={this.handleDeleteProject}
                            name={name}
                        />
                    })
                }
            </>
        );
    }
}

export default Projects;

