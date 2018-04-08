import React, { Component } from 'react'
import './App.css'

export default class Card extends Component {
    render() {
        return (
            <div
                className="bgcard col-md-2"
                style={{
                    backgroundColor: this.props.color
                }} onClick={() => alert(this.props.color)}>{this.props.color}</div>
        )
    }
}