import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import urls from "../configs/urls";

export default class RecipeListItem extends Component {

    render() {
        const {title, difficulty, recipe_url, tags} = this.props.recipe;

        return (

            <div>
                <Link to={recipe_url}><h4>{title}</h4></Link>
                <small>{difficulty}</small>
                <ul>
                    {tags.map(tag =>
                        <li key={tag.value}>
                            <Link to={`/recipes/category/${tag.value}`}>{tag.value}</Link>
                        </li>
                    )}
                </ul>
            </div>

        );
    }

}