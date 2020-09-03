import React, { Component } from 'react'

export default class Input extends Component {
    
    handleChangeValue = (event) => {
        
        this.props.onChange(event.target.value);

    }

    render() {
        return (
            <div>
                <input value={this.props.initialValue} onChange={this.handleChangeValue} ></input>
            </div>
        )
    }
}
