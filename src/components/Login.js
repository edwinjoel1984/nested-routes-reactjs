import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import LoaderButton from './LoaderButton/LoaderButton'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {login, verifyUser} from '../actions/session.actions'




class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading:false,
      email: "",
      password: ""
    };
  }
  componentWillMount(){
    this.props.verifyUser(true);
  }
  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.login(this.state)
    // this.props.setLoading(true);
  }
  componentWillReceiveProps(nextProps,oldProps){
    console.info("REDIRIGIANDO DESDE EL LOGIN",nextProps);
    if(nextProps.currentUser.id){
      this.props.history.push('dashboard/inicio');
    }
  }

  render() {
    // console.clear()
    // console.info(this.props)
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <LoaderButton
              block
              bsSize="large"
              disabled={!this.validateForm()}
              type="submit"
              isLoading={this.props.parentState.isLoading}
              text="Login"
              loadingText="Logging in…"
            />
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    login : bindActionCreators(login,dispatch),
    verifyUser: bindActionCreators(verifyUser,dispatch)
  }
}
const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);