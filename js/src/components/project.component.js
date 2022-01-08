import React, { Component } from 'react';

class Project extends React.Component {

    //I am a child
    // I have access the data only to show
    // i cant delete the data
    // cause data is in my parent
    // at most i can raise an event which is passed to me by my parents

    render() {

        return (
            <>
                <h3>{this.props.name}</h3>
                <button onClick={this.props.handleDeleteProject}> Remove </button>
                <hr />
            </>
        );
    }
}

export default Project;