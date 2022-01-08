import React, { Component } from 'react';
import Navbar from './components/navbar.component';
import Profile from './components/profile.component';
import Projects from './components/projects.component';
// React -> obj , Component -> class 
class App extends Component {
    // btnStyle = {
    //     backgroundColor: 'green',
    //     color: `white`,
    //     padding: " 30px 30px",
    // }

    // makeDisable = (flag) => {
    //     if (flag === `disable-the-button`)
    //         return true;
    //     else return false;
    // }

    // arr = [`habib`, `labib`, `zabib `, `nabib`];
    render() {
        return (
            <>
                <Navbar />
                <Profile />

                <hr />

                <Projects />

                {/* <button disabled={this.makeDisable(`true` )} style={this.btnStyle}> Click Me </button> */}

            </>
        );
    }
}

export default App;

// const obj = new navbar();
// const a = obj.render()