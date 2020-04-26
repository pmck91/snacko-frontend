import React, {Component} from 'react';
import http from "../services/http";
import urls from "../configs/urls";
import RecipeListItem from "./RecipeListItemComponent";

export default class CategoriesPage extends Component {

    state = {
        recipes: []
    };

    componentDidMount() {
        http.get(urls.list_recipes_by_tag + this.props.match.params.tag)
            .then(response => this.setState(() => ({recipes: response.data})));
    }

    render() {
        const {recipes} = this.state;

        return (
            <div>
                {recipes.map(recipe =>
                    <RecipeListItem recipe={recipe}/>
                )}
            </div>
        );
    }

}