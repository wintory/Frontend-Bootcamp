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
            .get(url)
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
                    width: 120,
                    height: 80
                }}
                    className="col-md-1"/>
                <button className="btn btn-light col-md-1 offset-4">Become host</button>
                <button className="btn btn-light col-md-1">Saved</button>
                <button className="btn btn-light col-md-1">Trip</button>
                <button className="btn btn-light col-md-1">Message</button>
                <button className="btn btn-light col-md-1">Help</button>

                <img
                    style={{
                    borderRadius: 50,
                    width: 50,
                    heigh: 50
                }}
                    src="https://scontent.fbkk1-6.fna.fbcdn.net/v/t31.0-8/26232458_10210703188887035_7575587764506639012_o.jpg?_nc_cat=0&_nc_eui2=v1%3AAeF8hc2cLXIGgMHZOXdGor6nOBXMB-pCoBKfzrt9hWrxg9OZ1EBGByAR4MLeGYMSd0xvDUpKKz6bXdB_QEqu5VbUQgxVme5ZYZKyrHZSp-f70g&oh=bb51940775b525a59099e03ea72930e7&oe=5B3CD15D"></img>
            </nav>

        )
    }
}

export default Navbar