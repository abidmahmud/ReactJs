import React, { Component } from 'react';
import Counter from './counter.component';

class Counters extends React.Component {

    state = {
        counters: [
            {
                id: "idNo0",
                value: 0
            }
        ]
    }
    constructor() {
        console.log("first");
        super();
    }

    componentDidMount() {
        console.log("third");
    }

    componentDidUpdate() {
        console.log("ami ekhn call hobo");
    }
    componentWillUpdate() {

    }

    handleIncrement = (id) => {
        const counters = [...this.state.counters];
        const counter = counters.find(counter => counter.id === id);
        counter.value += 1;

        this.setState({ counters });
    }
    handleDecrement = (id) => {
        const counters = [...this.state.counters];
        const counter = counters.find(counter => counter.id === id);
        if (counter.value === 0) return;
        counter.value -= 1;

        this.setState({ counters });
    }
    disableDecrementButton = () => this.state.counters === 0 ? true : false;

    handleRemove = (id) => {
        const counters = [...this.state.counters];
        const updatedCounters = counters.filter(counter => counter.id != id);

        this.setState({ counters: updatedCounters });
    }
    // handleAdd = () => {
    //     const counters = [this.state.counters];
    //     const addCounter = {
    //         id: `idNo${counters.length}`,
    //         value: 0,
    //     },
    //     this.setState({ counters: addCounter,counters });
    // }

    showTouchedCounters = () => {
        let count = 0;
        this.state.counters.forEach(counter => {
            if (counter.value > 0) count++;
        })
        return count;
    }

    render() {
        console.log("second");
        return (
            <>
                <div>
                    {this.showTouchedCounters()}
                </div>
                {
                    this.state.counters.map(counter => {
                        return (
                            <React.Fragment key={counter.id}>
                                <Counter
                                    key={counter.id}
                                    id={counter.id}
                                    value={counter.value}
                                    handleIncrement={this.handleIncrement}
                                    handleDecrement={this.handleDecrement}
                                    handleRemove={this.handleRemove}
                                    handleAdd={this.handleAdd}
                                />
                                <hr />
                            </React.Fragment>
                        )
                    })
                }
            </>
        );
    }
}

export default Counters;


/*

addNewItem = () => {
let { cart, input } = this.state;
cart.push(input);
// this.state.cart.push(this.state.input); // same as above, though bad practice
};

*/

// handleRemove = (countS) => {
//     const hr = this.state.count;
//     hr.splice(countS, 1);
//     this.setState({ count: hr })
// }

// const del = this.state.projects;
//     del.splice(projectIndex, 1);
//     this.setState({ projects: del });