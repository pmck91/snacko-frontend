import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

export default class HomePage extends Component {

    render() {
        return (
            <nav>
                <ul>
                    <li><NavLink to={"/"}>Home</NavLink></li>
                    <li><NavLink to={"/recipes"}>Recipes</NavLink></li>
                </ul>
            </nav>
        );
    }
}