import React, { Component } from 'react'
import Card from './card'
import { logo } from './logo.svg'
import { log } from 'util';
import CreateBox from './createbox'
import './App.css'

export default class Hw3 extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        card: [
            {
                title: 'aabbbbb',
                ingredient: [
                    'ing1', 'ing2'
                ],
                instruction: 'bb',
                pic: 'http://www.theamazingpics.com/includes/img/pics/captivating-pic-of-rotterdam-in-' +
                    'a-bubble.jpg'
            }, {
                title: 'aasfddsfdsf',
                ingredient: [
                    'ing1', 'ing2'
                ],
                instruction: 'bb',
                pic: 'http://www.theamazingpics.com/includes/img/pics/captivating-pic-of-rotterdam-in-' +
                    'a-bubble.jpg'
            }, {
                title: 'asdfsdfdsfdsfdf',
                ingredient: [
                    'ing1', 'ing2'
                ],
                instruction: 'bb',
                pic: 'http://www.theamazingpics.com/includes/img/pics/captivating-pic-of-rotterdam-in-' +
                    'a-bubble.jpg'
            }

        ],
        copyText: [],
        searchRe: [],
        hidden: 'hidden'
    }

    deleteCard = (titleid) => {
        this.setState({
            copyText: this.state.copyText
                .filter(card => card.title != titleid),
            card: this.state.card
                .filter(card => card.title != titleid)
        })
    }

    componentDidMount() {
        this.setState({
            copyText: this.state.card
        })
    }

    getcopyText = (e) => {
        let val = e.target.value.toLowerCase()
        if (val === null || val === '') {
            this.setState({
                card: this.state.copyText
            })
        } else {
            this.setState({
                card: this.state.copyText
                    .filter(card => card.title.indexOf(val) !== -1)
            })
        }
    }

    handleClick = () => {
        let re = this.user.addCard()
        if (re !== null) {
            this.setState({
                copyText: [...this.state.copyText, re],
                card: [...this.state.card, re]
            })
        }
    }
    handleChange() {
        this.setState({ hide: true });
    }

    render() {

        let Thisnav = () => {
            return (
                <nav
                    style={{
                        backgroundColor: 'green',
                        color: 'white',
                        height: 80
                    }}>
                    <p className="">Recipe App</p>
                    <button className="btn btn-primary offset-8" onClick={() => this.setState({ hidden: '' })}>add card</button>
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

        return (
            <div className="container">
                <br />
                <h1>HW7-2</h1>
                <br />
                <header>{Thisnav()}</header>
                <br />
                <div className="row">
                    <br />
                    <div className="col-md-12">Search
                        <input
                            type="text"
                            onChange={
                                this.getcopyText
                            } />
                        <br />
                        <div className={this.state.hidden ? 'hidden' : ''}>
                            <CreateBox addCard={this.addCard} ref={(user) => this.user = user} />
                            <button onClick={this.handleClick}>add Card</button>
                            <button className="btn btn-light " onClick={() => this.setState({ hidden: 'hidden' })}>x</button>
                        </div>
                    </div>

                    {this
                        .state
                        .card
                        .map((card, i) => {
                            return < Card title={
                                card.title
                            }
                                key={
                                    i
                                }
                                ing={
                                    card.ingredient
                                }
                                ins={
                                    card.instruction
                                }
                                pic={
                                    card.pic
                                }
                                deleteCard={
                                    this.deleteCard
                                }
                            />
                        })}

                    <br />

                    <br />
                </div>

                <br /><br />
                <footer>{Thisfooter()}</footer>
            </div>
        )
    }
}