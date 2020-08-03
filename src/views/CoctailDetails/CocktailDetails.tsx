// Core
import React, { ReactElement } from 'react';
import { Link, Redirect } from 'react-router-dom';
// Material UI
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import 'fontsource-roboto';
// Components
import { Header } from '../../components/Header/Header';
// Hooks
import { useCocktailDetails } from './hooks/useCocktailDetails';

type PropTypes = {
  title: string,
  image: string,
  description: string,
  id: string
};
export const CocktailDetails = (): ReactElement => {
  const {
    title, recipe, image, error, detailsLoading, ingredients,
  } = useCocktailDetails();
  const loadingJSX = (detailsLoading && <CircularProgress color="secondary" />);
  const errorJSX = (error && <Redirect to="/error" />);
  return (
    <>
      {loadingJSX}
      {errorJSX}
      <Header />
      <Container style={{ marginTop: 100 }}>
        <h1>{title}</h1>
        <Grid container spacing={3} justify="flex-start">
          <Grid item md={4}>
            <div>
              <img
                src={image}
                alt="Margarita"
                style={{ maxWidth: '100%' }}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <h2>Ingredients: </h2>
            {ingredients?.map(({ ingredient, measure }) => (
              <Chip
                label={`${ingredient} - ${measure}`}
                color="secondary"
                component="a"
                href="/"
                clickable
                style={{ margin: '0 10px 10px 0' }}
              />
            ))}
            <div>
              <h2>Recipe: </h2>
              <p>
                {recipe}
              </p>
            </div>
          </Grid>
        </Grid>
        <Link to="/">
          <Button variant="contained" color="primary">
            Go to main page
          </Button>
        </Link>
      </Container>
    </>
  );
};
