import React, { Component } from 'react'
// import {Route} from "react-router-dom";
import AppliedRoute from '../../../config/AppliedRoute'

import './Content.css'

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const testContainer = () => <h1>Test Users</h1>
        const testContainer2 = () => <h1>Test Empresa</h1>
        const testContainer3 = () => <h1>Exact</h1>
        console.info(this.props)
        return (
            <div className="body-content">
                <AppliedRoute  path="/dashboard/users" component={testContainer}  props={this.props}/>
                <AppliedRoute  path="/dashboard/company" component={testContainer2} props={this.props}/>
                <AppliedRoute exact path="/dashboard/inicio" component={testContainer3} props={this.props}/>
            </div>
        );
    }
}

export default Content;