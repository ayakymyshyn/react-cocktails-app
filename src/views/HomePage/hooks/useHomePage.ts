import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Action creators
import { getCocktails } from '../../../redux/actions';
// Types
import { Cocktail } from '../../../types/cocktailsTypes';
import { AppState } from '../../../redux/reducers/rootReducer';

type UseHomePage = {
  cocktails: Array<Cocktail>,
  loading: boolean
};

export const useHomePage = (): UseHomePage => {
  const dispatch = useDispatch();
  const { cocktails, loading } = useSelector((state: AppState) => ({
    cocktails: state.cocktailReducer.cocktails,
    loading: state.cocktailReducer.loading,
  }));
  useEffect(() => {
    dispatch(getCocktails(cocktails, loading));
  }, []);
  return { cocktails, loading };
};
