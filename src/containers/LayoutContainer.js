import React, { Component } from 'react';

import NavBar from '../components/Layout/NavBar/NavBar'
import Sidebar from '../components/Layout/SideBar/Sidebar';
import Content from '../components/Layout/Content/Content';

class LayoutContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    logout () {
        console.info("Haciendo Logout")
        // console.info(this.props)
        this.props.childProps.userHasAuthenticated(false);
        this.props.history.push("/login");
    }
    render() {
        console.info(this.props)
        return (
            <div className="container-layout">
                <NavBar  logout={this.logout.bind(this)} />
                <Sidebar />
                <Content props={this.props.childProps}/>
            </div>
        );
    }
}

export default LayoutContainer;