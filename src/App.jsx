import React from 'react';
import {BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom'

import './styles/App.css';
import HomePage from "./components/HomeComponent";
import RecipesListPage from "./components/ListPageComponent";
import NotFound from "./components/errorPages/404Component";
import RecipePage from "./components/RecipeComponent";
import CategoriesPage from "./components/CategoriesPage";
import NavPanelComponent from "./components/NavPanelComponent";

function App() {
    return (
        <div className="App">
            <Router>
                <NavPanelComponent />
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/recipes/category/:tag" component={CategoriesPage}/>
                    <Route path="/recipes/:slug" component={RecipePage}/>
                    <Route path="/recipes" component={RecipesListPage}/>
                    <Route component={NotFound}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
