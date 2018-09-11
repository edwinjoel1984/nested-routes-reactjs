import React, { Component } from 'react';
import './App.css';
import Routes from './config/routes'

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      isAuthenticated: false
    };
  }
  
  
  userHasAuthenticated = authenticated => {
    console.info("CAmbiando el estado")
    this.setState({ isAuthenticated: authenticated });
  }
  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };
    return (
      <Routes childProps={childProps} />
    );
  }
}

export default (App);
