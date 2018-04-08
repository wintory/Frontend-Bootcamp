import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <div
                className="card col-md-4"
                style={{
                    marginTop: 20
                }}>
                <img className="card-img-top" src={this.props.pic} />
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>

                    <ul>
                        {
                            this.props.ing.map((ing, i) => {
                                return <li key={i}>{ing}</li>
                            })
                        }

                    </ul>

                    <h5 className="card-title">{this.props.ins}
                    </h5>
                    <button className="btn btn-primary" onClick={() => { this.props.deleteCard(this.props.title) }}>delete</button>
                </div>
            </div >
        )
    }
}