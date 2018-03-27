import React, {Component} from 'react'
import {button} from 'react-bootstrap'
import axios from 'axios'

class Navbar extends Component {

    state = {
        persons: []
    }

    componentDidMount() {
        const url = 'https://swapi.co/api/people/1/'
        axios
            .get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const persons = res.data;
                this.setState({persons: persons});
                console.log(this.state.persons);
            })
    }

    render() {

        return (

            <nav className="navbar navbar-light bg-light">
                <img
                    src="http://logok.org/wp-content/uploads/2014/07/airbnb-logo-belo.png"
                    style={{
                    width: 100,
                    height: 80
                }}/>
                <button className="btn btn-light">Be come a host</button>
                <button className="btn btn-light">Saved</button>
                <button className="btn btn-light">Trip</button>
                <button className="btn btn-light">Message</button>
                <button className="btn btn-light">Help</button>
                {this
                    .state
                    .persons
                    .map(persons =>< p > {
                        persons.id
                    } < /p>)}
                <img style={{
                    borderRadius: 50
                }} src=""/>
            </nav>

        )
    }
}

export default Navbar