import React, {Component} from 'react'
import SearchBox from './searchbox'
class Header extends Component {
    render() {
        return (
            <header>

                <div className="jumbotron">
                    <div className="container">
                        <div className="row">
                            <h3 className="col-md-8 offset-2">Book unique homes and experiences all over the world.</h3>
                            <SearchBox/>

                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default Header