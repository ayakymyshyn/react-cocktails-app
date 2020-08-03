// Types
import {
  Cocktail, CocktailDetails, Category,
} from './cocktailsTypes';

// Store
export type CocktailState = {
  cocktails: Cocktail[],
  cocktailDetails: CocktailDetails,
  loading: boolean,
  detailsLoading: boolean,
  error: string,
  categories: Array<Category>,
  ingredientsList: Array<string>
};

// Actions
export const GET_COCKTAILS = 'GET_COCKTAILS';
type GetCocktails = {
  type: typeof GET_COCKTAILS,
  cocktails: Array<Cocktail>,
  loading: boolean,
  url: string
};

export const GET_COCKTAIL_DETAILS = 'GET_COCKTAIL_DETAILS';
type GetCocktailDetails = {
  type: typeof GET_COCKTAIL_DETAILS,
  cocktail: CocktailDetails,
  id: string,
  detailsLoading: boolean,
};

export const SET_ERROR = 'SET_ERROR';
type SetError = {
  type: typeof SET_ERROR,
  error: string
};

export const FILTER_BY_ALCOHOLIC = 'FILTER_BY_ALCOHOLIC';
type FilterByAlcoholic = {
  type: typeof FILTER_BY_ALCOHOLIC,
  property: string,
  cocktails: Array<Cocktail>
};

export const FILTER_BY_CATEGORY = 'FILTER_BY_CATEGORY';
type FilterByCategory = {
  type: typeof FILTER_BY_CATEGORY,
  category: string,
  cocktails: Array<Cocktail>
};

export const GET_CATEGORIES = 'GET_CATEGORIES';
type GetCategories = {
  type: typeof GET_CATEGORIES,
  categories: Array<Category>
};

export const GET_INGREDIENTS = 'GET_INGREDIENTS';
type GetIngredients = {
  type: typeof GET_INGREDIENTS;
  ingredientsList: Array<string>
};

export type CocktailAction = GetCocktails |
GetCocktailDetails |
SetError |
FilterByAlcoholic |
GetCategories |
FilterByCategory |
GetIngredients;
