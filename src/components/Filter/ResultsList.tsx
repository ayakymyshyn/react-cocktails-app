/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable react/no-array-index-key */
// Core
import React, { ReactElement, Ref, RefObject } from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';
// Actions
// Material UI
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import { getCocktails } from '../../redux/actions';
// Types
import { AppState } from '../../redux/reducers/rootReducer';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: 'absolute',
    zIndex: 100,
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
}));

export const ResultsList = ({ ingredients }: {ingredients: Array<string>}): ReactElement => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { cocktails, loading } = useSelector((state: AppState) => ({
    cocktails: state.cocktailReducer.cocktails,
    loading: state.cocktailReducer.loading,
  }));
  return (
    <List
      component="nav"
      className={classes.root}
      aria-label="search results"
    >
      <>
        {ingredients?.map((ingredient, idx) => (
          <>
            <ListItem key={idx}>
              <a
                href="#"
                onClick={(e) => {
                  const target = e.target as HTMLLinkElement;
                  e.preventDefault();
                  dispatch(getCocktails(cocktails,
                    loading,
                    `https://the-cocktail-db.p.rapidapi.com/filter.php?i=${target.innerHTML}`))
                }}
              >
                {ingredient}
              </a>
            </ListItem>
            <Divider />
          </>
        ))}
      </>
    </List>
  );
};
