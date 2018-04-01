import React, { Component } from 'react'

export default class CreateBox extends Component {
    render() {
        return (<div className="col-md-6 offset-3" style={{
            backgroundColor: 'black', color: 'yellow', padding: 10, marginTop: 10
        }}><form onSubmit={() => this.addCard()}>
                title: <input type="text" name="title" />
                ingredient: <input type="text" name="ingredient" />
                instruction: <input type="text" name="ingredient" />
                pic: <input type="text" name="ingredient" />
                <button type="submit" className="btn btn-light">add card</button>
            </form>
        </div>)
    }
}