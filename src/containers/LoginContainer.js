import React, { Component } from 'react'
import Login from '../components/Login'

class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            email: "",
            password: ""
          };
        // this.onSubmit= this.onSubmit.bind(this);
    }
    onSubmit(event,data){
        event.preventDefault();
        
        setTimeout(function(){
            this.props.childProps.userHasAuthenticated(true);
            this.props.history.push('dashboard/inicio')
        }.bind(this),500);
        
    }
    setLoading(value){
        this.setState({isLoading:value})
    }
    componentWillUnmount(){
        console.info("Destroying")
    }
    render() {
        console.info("----->",this.props)
        return (
            <div className="login">
                <Login submit={this.onSubmit.bind(this)} setLoading={this.setLoading.bind(this)} parentState={this.state} />
            </div>
        );
    }
}

export default LoginContainer;