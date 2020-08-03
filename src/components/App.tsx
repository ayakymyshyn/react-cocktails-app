// Core
import React, { ReactElement } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
// Material UI
import CssBaseline from '@material-ui/core/CssBaseline';
// Components
import { CocktailsGrid } from './Card/CocktailsGrid';
import { HomePage } from '../views/HomePage/HomePage';
import { CocktailDetails } from '../views/CoctailDetails/CocktailDetails';
// Styles
import './App.css';

const App = (): ReactElement => (
  <>
    <CssBaseline />
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/cocktail/:cocktailId">
          <CocktailDetails />
        </Route>
        <Route exact path="/cocktail/:ingredient" />
        <Route path="*">
          <p>404</p>
        </Route>
      </Switch>
    </Router>
  </>
);

export default App;
