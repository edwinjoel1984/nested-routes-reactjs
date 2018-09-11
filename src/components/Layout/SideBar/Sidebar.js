import React, { Component } from 'react'
import './Sidebar.css';
import {NavLink} from 'react-router-dom';
class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            menus:[
                { id : 'inicio', name: "Home"},
                { id : 'users', name: "Usuarios"},
                { id : 'company', name: "Empresas", component: <h1>Empresas</h1>},
                { id : 'login', name: "Logout", parent:true},
            ]
          };
    }
    renderMenus(){
        return (
            this.state.menus.map((menu)=>{
                let rootParent = (menu.parent)?'':'dashboard/';
                return(
                    <li key={menu.id}>
                        <NavLink key={menu.id} to={`/${rootParent}${menu.id}`} activeClassName="active">{menu.name}</NavLink>
                    </li>
                )
                
            }))
    }
    render() {
        return (
            <div className="sidebar">
                <div className="profile">
                </div>
                <div className="content-menu">
                    <ul>
                        {this.renderMenus()}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sidebar;