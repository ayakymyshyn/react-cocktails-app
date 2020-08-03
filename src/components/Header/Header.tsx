import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
// Material UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {
  createStyles, fade, Theme, makeStyles,
} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
// Redux
import { useSelector } from 'react-redux';
// Types
import { AppState } from '../../redux/reducers/rootReducer';
// Components
import { SearchAutocomplete } from '../SearchAutocomplete/SearchAutocomplete';
// Hooks
import { useRandomCocktail } from './hooks/useRandomCocktail';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export const Header = (): ReactElement => {
  const classes = useStyles();
  const cocktails = useSelector((state: AppState) => state.cocktailReducer.cocktails);
  const randomCocktail = useRandomCocktail();
  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        style={{ backgroundColor: '#EC407A', marginBottom: '50px' }}
      >
        <Toolbar>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <SearchAutocomplete data={cocktails} />
          </div>
          <Button
            variant="contained"
            color="secondary"
            style={{ margin: '0 10px 0 10px' }}
          >
            <Link
              to={`/cocktail/${randomCocktail?.idDrink}`}
              style={{ color: '#fff' }}
            >
              Random cocktail
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
