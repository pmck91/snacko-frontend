import React, {Component} from 'react';
import http from "../services/http";
import urls from "../configs/urls";

export default class RecipePage extends Component{

    state = {
        recipe: {
            steps: [],
            ingredients: []
        }
    };

    componentDidMount() {
        http.get(urls.get_recipe + this.props.match.params.slug)
            .then(response => this.setState(() => ({recipe: response.data})));
    }

    render() {
        const {recipe} = this.state;
        return(
            <div>
                <h2>{recipe.title}</h2>
                <p>{recipe.description}</p>
                <p>Serves: {recipe.serves}</p>
                <p>difficulty: {recipe.difficulty}</p>
                <hr />
                <h3>Ingredients</h3>
                {recipe.ingredients.map(ingredient =>
                    <div key={ingredient.id}>
                        <h5>{ingredient.name}</h5>
                        <p>{ingredient.quantity}:{ingredient.measurement}</p>
                        <p>-----</p>
                    </div>
                )}
                <hr />
                <h3>Steps</h3>
                {recipe.steps.map(step =>
                    <div key={step.position}>
                        <h5>{step.title}</h5>
                        <p>{step.body}</p>
                        <p>-----</p>
                    </div>
                )}
            </div>
        );
    }

}