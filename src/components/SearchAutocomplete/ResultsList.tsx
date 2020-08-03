// Core
import React, { ReactElement } from 'react';
// Material UI
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
// Types
import { Cocktail } from '../../types/cocktailsTypes';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: 'absolute',
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
}));

type PropTypes = {
  results: Array<Cocktail>
};

export const ResultsList = (
  { results = [] }: PropTypes,
): ReactElement => {
  const classes = useStyles();
  const resultsJSX = results.map((result) => (
    <>
      <ListItem key={result.idDrink}>
        <Link to={`/cocktail/${result.idDrink}`} className={classes.flex}>
          <Avatar src={result.strDrinkThumb} />
          {result.strDrink}
        </Link>
      </ListItem>
      <Divider />
    </>
  ));

  return (
    <List
      component="nav"
      className={classes.root}
      aria-label="search results"
    >
      {resultsJSX}
    </List>
  );
};
