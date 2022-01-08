import React, { Component } from "react";
import Counters from "./counters.component";

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" >
                        navbar
                    </a>
                    <a className="navbar-brand" >
                        Abid
                    </a>
                </div>
            </nav>,
            <Counters />
        );
    }
}

export default Navbar;
