import React, { Component } from 'react';

import NavBar from '../components/Layout/NavBar/NavBar'
import Sidebar from '../components/Layout/SideBar/Sidebar';
import Content from '../components/Layout/Content/Content';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {verifyUser} from '../actions/session.actions'


class LayoutContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    componentWillMount(){
        this.props.verifyUser();
    }
    logout () {
        console.info("Haciendo Logout")
        // console.info(this.props)
        this.props.childProps.userHasAuthenticated(false);
        this.props.history.push("/login");
    }
    render() {
        return (
            <div className="container-layout">
                <NavBar  logout={this.logout.bind(this)} currentUser={this.props.currentUser} />
                <Sidebar />
                <Content props={this.props.childProps}/>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        currentUser : state.currentUser,
    }   
}

const mapDispatchToProps = (dispatch) => {
    return {
      verifyUser: bindActionCreators(verifyUser,dispatch)
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(LayoutContainer);