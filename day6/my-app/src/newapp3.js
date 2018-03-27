import React, {Component} from 'react'

export default class Hw3 extends Component {
    render() {

        let Thisnav = () => {
            return (
                <nav
                    style={{
                    backgroundColor: 'green',
                    color: 'white',
                    height: 80
                }}>
                    Recipe App
                </nav>
            )
        }

        let Thisfooter = () => {
            return (
                <div
                    style={{
                    backgroundColor: 'green',
                    color: 'white',
                    height: 80
                }}>this is Footer</div>
            )
        }

        let card = () => {
            return (
                <div className="card col-md-4">
                    <div className="card-body">
                        <img
                            className="card-img-top col-md-12"
                            src="https://www.w3schools.com/howto/img_fjords.jpg"
                            alt="Card image cap"/>
                        <h5 className="card-title">Card title</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p className="card-text">Some quick example text to build on the card title and
                            make up the bulk of the card's content.</p>
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>
                    </div>
                </div>
            )
        }

        return (
            <div className="container">
                <br/>
                <h1>HW6-3</h1>
                <br/>
                <header>{Thisnav()}</header>
                <div className="row">
                    <br/>
                    <div className="col-md-12 offset-4">Search
                        <input type="text"/></div>
                    <br/>
                    <br/>
                    <div>{card()}{card()}{card()}</div>

                </div>
                <br/><br/>
                <footer>{Thisfooter()}</footer>
            </div>
        )
    }
}