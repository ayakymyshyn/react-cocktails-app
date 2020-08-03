// Types
import {
  GET_COCKTAILS,
  GET_COCKTAIL_DETAILS,
  SET_ERROR,
  FILTER_BY_ALCOHOLIC,
  GET_CATEGORIES,
  FILTER_BY_CATEGORY,
  GET_INGREDIENTS,
  CocktailState,
  CocktailAction,
} from '../../types/reduxTypes';

const initialState: CocktailState = {
  cocktails: [],
  cocktailDetails: {
    strDrink: '',
    strDrinkThumb: '',
    strInstructions: '',
    idDrink: '',
    ingredients: [],
  },
  loading: true,
  detailsLoading: false,
  error: '',
  categories: [],
  ingredientsList: [],
};

export const cocktailReducer = (
  state = initialState,
  action: CocktailAction,
): CocktailState => {
  switch (action.type) {
    case GET_COCKTAILS:
      return {
        ...state,
        cocktails: action.cocktails,
        loading: action.loading,
      };
    case GET_COCKTAIL_DETAILS:
      return {
        ...state,
        cocktailDetails: action.cocktail,
        detailsLoading: action.detailsLoading,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case FILTER_BY_ALCOHOLIC:
      return {
        ...state,
        cocktails: action.cocktails,
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
      };
    case FILTER_BY_CATEGORY:
      return {
        ...state,
        cocktails: action.cocktails,
      };
    case GET_INGREDIENTS:
      return {
        ...state,
        ingredientsList: action.ingredientsList,
      };
    default:
      return state;
  }
};
