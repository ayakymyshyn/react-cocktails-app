// Core
import React, { useRef, ReactElement } from 'react';
// Material UI
import InputBase from '@material-ui/core/InputBase';
import {
  createStyles, Theme, makeStyles,
} from '@material-ui/core/styles';
// Types
import { Cocktail } from '../../types/cocktailsTypes';
// Components
import { ResultsList } from './ResultsList';
// Hooks
import { useAutocomplete } from './hooks/useAutocomplete';
import { useOutsideAlert } from './hooks/useOutsideAlert';

const useStyles = makeStyles((theme: Theme) => createStyles({
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
      width: '15ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export const SearchAutocomplete = ({ data }: { data: Cocktail[] }): ReactElement => {
  const classes = useStyles();
  const { handleSearch, results, query } = useAutocomplete(data, { strDrink: '' });
  const inputRef = useRef(null);
  const clickedOutside = useOutsideAlert(inputRef);
  const resultsListJSX = ((query !== '' && results.length > 0 && !clickedOutside) && (<ResultsList results={results} />));
  return (
    <div ref={inputRef}>
      <InputBase
        placeholder="Type to search..."
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        onChange={handleSearch}
        inputProps={{ 'aria-label': 'search' }}
      />
      {resultsListJSX}
    </div>

  );
};
