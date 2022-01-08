import React, { Component } from 'react';

class Counter extends React.Component {
    render() {
        const { id, value, handleDecrement, handleIncrement, handleRemove, handleAdd } = this.props;
        return (
            <>
                <h2>Quantity</h2>
                <div style={{ margin: '20px' }}>
                    <button onClick={() => handleAdd(id)} >Add</button>
                    <button
                        className='btn btn-primary'
                        onClick={() => handleIncrement(id)}
                    >+ </button>
                    <p className='text'>{value}</p>
                    <button
                        className='btn btn-primary'
                        onClick={() => handleDecrement(id)}
                    >-</button>
                    <button onClick={() => handleRemove(id)} >Remove</button>
                </div>
            </>
        );
    }
}

export default Counter;