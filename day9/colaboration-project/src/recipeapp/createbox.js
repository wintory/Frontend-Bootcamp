import React, { Component } from 'react'
import { log } from 'util';

export default class CreateBox extends Component {

    state = {
        title: '',
        ingredient: [],
        instruction: '',
        pic: ''
    }

    chgState = (obj, val) => {
        if (obj === 'title') {
            this.setState({
                title: val
            })
        } else if (obj === 'ingredient') {
            this.setState({
                ingredient: [...this.state.ingredient, val]
            })
        } else if (obj === 'instruction') {
            this.setState({
                instruction: val
            })
        } else if (obj === 'pic') {
            this.setState({
                pic: val
            })
        }
        console.log(this.state);


    }


    addCard = () => {
        if (this.state.title !== '' && this.state.ingredient !== [] && this.state.instruction !== '' && this.state.pic !== '') {
            return {
                title: this.state.title,
                ingredient: this.state.ingredient,
                instruction: this.state.instruction,
                pic: this.state.pic
            }

        } else {
            alert('please input form')
        }
    }

    render() {
        return (<div className="col-md-6 offset-3" style={{
            backgroundColor: 'black', color: 'yellow', padding: 10, marginTop: 10
        }}><form >
                title: <input type="text" name="title" onBlur={(e) => this.chgState(e.target.name, e.target.value)} require />
                ingredient: <input type="text" name="ingredient" onBlur={(e) => this.chgState(e.target.name, e.target.value)} require />
                <ul>{this.state.ingredient.map((e, i) => { return (<li key={i}>{e}</li>) })}</ul>
                <br />
                instruction: <input type="text" name="instruction" onBlur={(e) => this.chgState(e.target.name, e.target.value)} require />
                pic: <input type="text" name="pic" onBlur={(e) => this.chgState(e.target.name, e.target.value)} require />

            </form>
        </div>)
    }
}