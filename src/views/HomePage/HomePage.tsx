// Core
import React, { ReactElement } from 'react';
// Material UI
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
// Components
import { Header } from '../../components/Header/Header';
import { Filter } from '../../components/Filter/Filter';
import { CocktailsGrid } from '../../components/Card/CocktailsGrid';
// Hooks
import { useHomePage } from './hooks/useHomePage';
import { usePagination } from './hooks/usePagination';

const useStyles = makeStyles(() => createStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    height: '100vh',
    alignItems: 'center',
  },
  ul: {
    margin: '25px 0',
    display: 'flex',
    justifyContent: 'center',
  },
  container: {
    marginTop: 100,
  },
}));

export const HomePage = (): ReactElement => {
  const classes = useStyles();
  const { cocktails, loading } = useHomePage();
  const { setCurrentPage, currentPosts, amountOfPages } = usePagination(cocktails);
  return loading ? (
    <div className={classes.root}>
      <CircularProgress color="secondary" />
    </div>
  ) : (
    <>
      <Header />
      <Container className={classes.container}>
        <Grid container spacing={1}>
          <Grid item md={4} sm={10} xs={12}>
            <Filter />
          </Grid>
          <Grid item md={8} sm={10} xs={12}>
            <CocktailsGrid cocktails={currentPosts} />
            <Pagination
              count={amountOfPages}
              color="secondary"
              onChange={(event, page) => setCurrentPage(page)}
              className={classes.ul}
              size="large"
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
