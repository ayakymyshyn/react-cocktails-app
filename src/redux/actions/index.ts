// Types
import {
  Cocktail, CocktailDetails, Category,
} from '../../types/cocktailsTypes';
import { CocktailAction, GET_COCKTAILS } from '../../types/reduxTypes';

export const getCocktails = (
  cocktails: Array<Cocktail>,
  loading: boolean,
  url = '',
): CocktailAction => ({
  type: GET_COCKTAILS,
  cocktails,
  loading,
  url,
});

export const getCocktailDetails = (
  cocktail: CocktailDetails,
  id: string,
  detailsLoading: boolean,
): CocktailAction => ({
  type: 'GET_COCKTAIL_DETAILS',
  cocktail,
  id,
  detailsLoading,
});

export const setError = (
  error: string,
): CocktailAction => ({
  type: 'SET_ERROR',
  error,
});

export const filterByAlcoholic = (
  property: string,
  cocktails: Array<Cocktail>,
): CocktailAction => ({
  type: 'FILTER_BY_ALCOHOLIC',
  property,
  cocktails,
});

export const filterByCategory = (
  category: string,
  cocktails: Array<Cocktail>,
): CocktailAction => ({
  type: 'FILTER_BY_CATEGORY',
  category,
  cocktails,
});

export const getIngredients = (ingredientsList: Array<string>): CocktailAction => ({
  type: 'GET_INGREDIENTS',
  ingredientsList,
});

export const getCategories = (categories: Array<Category>): CocktailAction => ({
  type: 'GET_CATEGORIES',
  categories,
});
