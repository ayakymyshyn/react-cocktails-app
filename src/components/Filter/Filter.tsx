// Core
import React, { ReactElement, useRef } from 'react';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import Snackbar from '@material-ui/core/Snackbar';
import TextField from '@material-ui/core/TextField';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import CategoryIcon from '@material-ui/icons/Category';
// Hooks
import { useFilter } from './hooks/useFilter';
import { useAutocomplete } from '../SearchAutocomplete/hooks/useAutocomplete';
import { useOutsideAlert } from '../SearchAutocomplete/hooks/useOutsideAlert';
// Component
import { ResultsList } from './ResultsList';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  block: {
    display: 'block',
  },
});

const Alert = (props: AlertProps) => <MuiAlert elevation={6} variant="filled" {...props} />;

export const Filter = (): ReactElement => {
  const classes = useStyles();
  const resultRef = useRef(null);
  const {
    open,
    setOpen,
    handleCheckAlcoFilter,
    handleCheckCategoryFilter,
    error,
    categories,
    header,
    ingredients,
  } = useFilter();
  const clickedOutsideInput = useOutsideAlert(resultRef);
  const { handleSearch, query, results } = useAutocomplete(ingredients);
  const resultsJSX = (query !== '' && !clickedOutsideInput && (<ResultsList ingredients={results} />));
  const errorJSX = error && (
  <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
    <Alert onClose={() => setOpen(false)} severity="error">
      There is no cocktails matching filter:
      {header}
    </Alert>
  </Snackbar>
  );
  return (
    <div className={classes.root}>
      {errorJSX}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions1-content"
          id="additional-actions1-header"
        >
          <div style={{ display: 'flex' }}>
            <LocalBarIcon color="secondary" style={{ marginRight: '5px' }} />
            Filter alcoholic
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <RadioGroup style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Radio
              value="alcoholic"
              name="radio-button-demo"
              onChange={handleCheckAlcoFilter}
            />
            Alcoholic drinks
            <Radio
              name="radio-button-demo"
              value="non alcoholic"
              onChange={handleCheckAlcoFilter}
            />
            Non-alcoholic drinks
          </RadioGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions1-content"
          id="additional-actions1-header"
        >
          <div style={{ display: 'flex' }}>
            <CategoryIcon color="secondary" style={{ marginRight: '5px' }} />
            Filter by category
          </div>
        </AccordionSummary>
        <AccordionDetails className={classes.block}>
          <RadioGroup style={{ alignItems: 'flex-start' }}>
            {categories.map((category) => (
              <div>
                <Radio
                  value={category.strCategory}
                  onChange={handleCheckCategoryFilter}
                />
                {category.strCategory}
              </div>
            ))}
          </RadioGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions1-content"
          id="additional-actions1-header"
        >
          <div style={{ display: 'flex' }}>
            <CategoryIcon color="secondary" style={{ marginRight: '5px' }} />
            Search by Ingredients
          </div>
        </AccordionSummary>
        <AccordionDetails className={classes.block}>
          <div ref={resultRef}>
            <TextField
              id="outlined-basic"
              label="Type ingredient..."
              variant="outlined"
              onChange={handleSearch}
            />
            {resultsJSX}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
