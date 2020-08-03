import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// Action creators
import { getCocktailDetails, getCocktails } from '../../../redux/actions';
// Types
import { AppState } from '../../../redux/reducers/rootReducer';

export const useCocktailDetails = () => {
  const { cocktailId } = useParams();
  const dispatch = useDispatch();
  const {
    cocktail,
    detailsLoading,
    error,
    cocktails,
    loading,
  } = useSelector((state: AppState) => ({
    cocktail: state.cocktailReducer.cocktailDetails,
    detailsLoading: state.cocktailReducer.detailsLoading,
    error: state.cocktailReducer.error,
    cocktails: state.cocktailReducer.cocktails,
    loading: state.cocktailReducer.loading,
  }));
  useEffect(() => {
    if (!cocktails.length) {
      dispatch(getCocktails(cocktails, loading));
    }
  }, []);
  useEffect(() => {
    dispatch(getCocktailDetails(cocktail, cocktailId, detailsLoading));
  }, [cocktailId]);
  const {
    strDrink: title, strInstructions: recipe, strDrinkThumb: image, ingredients,
  } = cocktail;
  return {
    title, recipe, image, error, detailsLoading, ingredients,
  };
};
