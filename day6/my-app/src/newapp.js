import React, {Component} from 'react'

export default class Hw1 extends Component {
    render() {
        let i = [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10
        ]
        let Hello = () => {
            return (
                <div className="col-md-2">hello</div>
            )
        }
        let Mydiv = i.map(i => (
            <div className="col-xs-1" key={i}>
                <p>{i}</p>
            </div>
        ))

        return (
            <div className="container">
                <br/>
                <h1>HW6-1</h1>
                <br/>
                <div className="row">
                    <Hello/> {Mydiv}
                </div>
            </div>
        )
    }
}