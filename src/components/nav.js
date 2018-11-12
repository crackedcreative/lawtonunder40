import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class Nav extends Component{
    render(){
        const navitems = [
            { item: "About", url: "/about" },
            { item: "Nominations", url: "/nominations" },
            { item: "Sponsors", url: "/sponsors" },
            { item: "Contact", url: "/contact" },
        ]
        return(
            <nav className="headerNavigation">
                <ul>
                    {navitems.map((navitem, i) => (
                            <li key={i}><NavLink to={navitem.url}>{navitem.item}</NavLink></li>
                        )
                    )}
                </ul>
            </nav>      
        )
    }
}