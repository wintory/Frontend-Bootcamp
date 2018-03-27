import React, {Component} from 'react'

export default class Hw2 extends Component {

    render() {
        let color = ['red', 'green', 'blue', 'purple', 'pink']
        let size = [20, 30, 40]
        let randomcolor = () => {
            let thiscolor = color[Math.floor(Math.random() * color.length)]
            return thiscolor
        }
        let randomsize = () => {
            let fontsize = size[Math.floor(Math.random() * size.length)]
            return fontsize
        }

        let Box = () => {
            return (
                <div
                    style={{
                    width: 200,
                    height: 200,
                    backgroundColor: randomcolor(),
                    fontSize: randomsize()
                }}
                    id="box">
                    <p>Random box</p>
                </div>
            )
        }

        return (
            <div className="container">
                <br/>
                <h1>HW6-2</h1>
                <br/>
                <div className="row">
                    <div className="col-md-2">
                        <Box/>
                    </div>

                    <div className="col-md-2">
                        <Box/>
                    </div>
                    <div className="col-md-2">
                        <Box/>
                    </div>
                    <div className="col-md-2">
                        <Box/>
                    </div>
                    <div className="col-md-2">
                        <Box/>
                    </div>
                    <div className="col-md-2">
                        <Box/>
                    </div>
                    <div className="col-md-2">
                        <Box/>
                    </div>
                    <div className="col-md-2">
                        <Box/>
                    </div>
                    <div className="col-md-2">
                        <Box/>
                    </div>
                    <div className="col-md-2">
                        <Box/>
                    </div>

                </div>
            </div>
        )
    }
}