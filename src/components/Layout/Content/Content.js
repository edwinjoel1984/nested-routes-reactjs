import React, { Component } from 'react'
import AppliedRoute from '../../../config/AppliedRoute'

import NewNote from '../../../scenes/NewNote'
import ReduxComponent from '../../ReduxComponent'
import SegmentList from '../../SegmentList'

import './Content.css'

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        // console.info(this.props)
        return (
            <div className="body-content">
                <AppliedRoute  path="/dashboard/users" component={ReduxComponent}  props={this.props}/>
                <AppliedRoute  path="/dashboard/company" component={SegmentList} props={this.props}/>
                <AppliedRoute exact path="/dashboard/inicio" component={NewNote} props={this.props}/>
            </div>
        );
    }
}

export default Content;