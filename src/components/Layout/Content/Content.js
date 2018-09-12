import React, { Component } from 'react'
import AppliedRoute from '../../../config/AppliedRoute'

import NewNote from '../../../scenes/NewNote'

import './Content.css'

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const testContainer = () => <h1>Test Users</h1>
        const testContainer2 = () => <h1>Test Empresa</h1>
        console.info(this.props)
        return (
            <div className="body-content">
                <AppliedRoute  path="/dashboard/users" component={testContainer}  props={this.props}/>
                <AppliedRoute  path="/dashboard/company" component={testContainer2} props={this.props}/>
                <AppliedRoute exact path="/dashboard/inicio" component={NewNote} props={this.props}/>
            </div>
        );
    }
}

export default Content;