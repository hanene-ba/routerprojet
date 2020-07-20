import React from 'react'
import {NavLink} from "react-router-dom";

const Navigation = () => {

    return (
        <ul style={{display: 'flex'}}>
            <NavLink exact activeClassName ="current" to="/">
                <li style={{ marginLeft: 10, listStyle:'none'}}>Accueil</li>
            </NavLink>

            <NavLink exact activeClassName ="current" to="/Projets">
                <li style={{ marginLeft: 10, listStyle:'none'}}>Projets</li>
            </NavLink>

            <NavLink exact activeClassName ="current" to="/Contact">
                <li style={{ marginLeft: 10, listStyle:'none'}}>Contact</li>
            </NavLink>
        </ul>
    )
}

export default Navigation; 
