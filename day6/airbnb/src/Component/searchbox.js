import React, {Component} from 'react'

export default class SearchBox extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="input-group offset-6">
                            <input type="text" className="form-control" placeholder="Search for..."/>
                            <span className="input-group-btn">
                                <button className="btn btn-default" type="button">Go!</button>
                            </span>
                        </div>
                    </div>
                    <p className="col-md-6 offset-3">Lorem, ipsum dolor sit amet consectetur
                        adipisicing elit. Consectetur illum mollitia consequuntur eos exercitationem
                        eligendi expedita fugit suscipit? Quia fugiat error nemo voluptates nostrum? In
                        ipsum harum laboriosam aspernatur distinctio!
                    </p>
                </div>
            </div>

        )
    }
}