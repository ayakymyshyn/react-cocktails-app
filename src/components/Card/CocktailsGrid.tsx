// Core
import React, { ReactElement } from 'react';
// Material UI
import Grid from '@material-ui/core/Grid';
// Components
import { MediaCard } from './MediaCard';
// Types
import { Cocktail } from '../../types/cocktailsTypes';

type PropTypes = {
  cocktails: Array<Cocktail>
};

export const CocktailsGrid = ({ cocktails }: PropTypes): ReactElement => (
  <>
    <Grid container spacing={3} justify="center">
      {cocktails && cocktails.map((cocktail: Cocktail) => (
        <Grid item xs={12} sm={6} key={cocktail.idDrink}>
          <MediaCard
            title={cocktail.strDrink}
            image={cocktail.strDrinkThumb}
            id={cocktail.idDrink}
          />
        </Grid>
      ))}
    </Grid>
  </>
);
