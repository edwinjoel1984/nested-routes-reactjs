import React from 'react'
import {ButtonToolbar,DropdownButton, MenuItem, Dropdown} from 'react-bootstrap';
import './NavBar.css';

const NavBar = (props) => {
    console.error(props.props);
    const menu=<h5>Edwin Ulloa<img style={{borderRadius:"50%"}} src={'https://avatars3.githubusercontent.com/u/16127460?s=40&v=4'}/></h5>
    return(
        <div className="navbar">
            <div className="desplegable">
            <ButtonToolbar>
                <DropdownButton
                    bsStyle="default"
                    title={menu}
                    noCaret
                    id="dropdown-no-caret"
                >
                    <MenuItem eventKey="1">Action</MenuItem>
                    <MenuItem eventKey="2">Another action</MenuItem>
                    <MenuItem eventKey="3">Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="4" onClick={()=>props.logout()} >Logout</MenuItem>
                </DropdownButton>
            </ButtonToolbar>
            </div>
        </div>
    )
}

export default NavBar;