import React,{ Component } from 'react'
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import LoginContainer from '../containers/LoginContainer'
import LayoutContainer from '../containers/LayoutContainer'
import NotFound from '../components/NotFound'

import AppliedRoute from './AppliedRoute'

class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
  
    render() {
        const childProps = this.props;
        return (
            <Router>
                <Switch>
                    <AppliedRoute exact path="/login" component={LoginContainer}  props={childProps} />
                    <AppliedRoute path="/dashboard" component={LayoutContainer}  props={childProps} />
                    <AppliedRoute exact path="/" component={LoginContainer} props={childProps}/>
                    <AppliedRoute path="*" component={NotFound} />
                </Switch> 
            </Router>
        );
    }
}

export default Routes;