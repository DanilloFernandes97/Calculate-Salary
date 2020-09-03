import React, { Component } from 'react'

export default class ReadOnlyInput extends Component {
    render() {
        return (
            <div>
                <input readOnly value={this.props.value}></input>
            </div>
        )
    }
}
