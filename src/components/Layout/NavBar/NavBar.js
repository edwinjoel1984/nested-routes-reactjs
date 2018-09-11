import React from 'react'
import './NavBar.css';

const NavBar = (props) => {
    console.error(props.props);
    return(
        <div className="navbar">
            <button onClick={()=>props.logout()} >Cerrar Sesion</button>
        </div>
    )
}

export default NavBar;