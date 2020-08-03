/* eslint-disable no-plusplus */
import { takeLeading, put, call } from 'redux-saga/effects';
// Types
import { AnyAction } from 'redux';
import { SagaIterator } from '@redux-saga/core';
import { Ingredients } from '../types/cocktailsTypes';
// Action creators
import {
  getCocktails,
  getCocktailDetails,
  setError,
  getCategories,
  filterByCategory,
  filterByAlcoholic,
  getIngredients,
} from '../redux/actions';
// Actions
import {
  GET_COCKTAILS,
  GET_COCKTAIL_DETAILS,
  FILTER_BY_ALCOHOLIC,
  GET_CATEGORIES,
  FILTER_BY_CATEGORY,
  GET_INGREDIENTS,
} from '../types/reduxTypes';
// Helpers
import { fetchData } from '../helpers/fetchData';

// Workers
export function* loadCocktails(action: AnyAction): SagaIterator {
  const cocktails = sessionStorage.getItem('cocktails');
  if (cocktails && !action.url) {
    yield put(getCocktails(JSON.parse(cocktails), false));
  } else {
    const { loading, data: { drinks } } = action.url ? yield call(fetchData, action.url)
      : yield call(fetchData);
    yield put(getCocktails(drinks, loading));
    sessionStorage.setItem('cocktails', JSON.stringify(drinks));
  }
}

export function* loadCocktailDetail(action: AnyAction): SagaIterator {
  const url = action.random ? 'https://the-cocktail-db.p.rapidapi.com/random.php'
    : `https://the-cocktail-db.p.rapidapi.com/lookup.php?i=${action.id}`;
  try {
    const { loading, data: { drinks } } = yield call(fetchData, url);
    const ingredients: Array<Ingredients> = [];
    for (let i = 1; i < 15; i++) {
      if (drinks[0][`strIngredient${i}`] !== null) {
        ingredients.push({
          ingredient: drinks[0][`strIngredient${i}`],
          measure: drinks[0][`strMeasure${i}`],
        });
      }
    }
    const [{
      strDrink, strDrinkThumb, strInstructions, idDrink,
    }] = drinks;
    yield put(setError(''));
    yield put(getCocktailDetails({
      strDrink, strDrinkThumb, strInstructions, idDrink, ingredients,
    }, action.id, loading));
  } catch (error) {
    yield put(setError(error.message));
  }
}

export function* filterByCategories(action: AnyAction): SagaIterator {
  const url = `https://the-cocktail-db.p.rapidapi.com/filter.php?c=${action.category}`;
  try {
    const { data: { drinks } } = yield call(fetchData, url);
    yield put(filterByCategory(action.category, drinks));
    sessionStorage.setItem('cocktails', JSON.stringify(drinks));
  } catch (err) {
    put(setError(err.message));
  }
}

export function* proceedFilterByAlcoholic(action: AnyAction): SagaIterator {
  const url = `https://the-cocktail-db.p.rapidapi.com/filter.php?a=${action.property}`;
  try {
    const { data: { drinks } } = yield call(fetchData, url);
    yield put(filterByAlcoholic(action.property, drinks));
    sessionStorage.setItem('cocktails', JSON.stringify(drinks));
  } catch (err) {
    yield put(setError(err.message));
  }
}

export function* getCategoriesList(): SagaIterator {
  const url = 'https://the-cocktail-db.p.rapidapi.com/list.php?c=list';
  try {
    const { data: { drinks } } = yield call(fetchData, url);
    yield put(getCategories(drinks));
    yield put(setError(''));
  } catch (error) {
    yield put(setError(error.message));
  }
}

export function* getIngredientsList(): SagaIterator {
  const url = 'https://the-cocktail-db.p.rapidapi.com/list.php?i=list';
  const ingredients: Array<string> = [];
  type IngredientObj = {
    strIngredient1: string
  };
  try {
    const { data: { drinks } } = yield call(fetchData, url);
    drinks.forEach((drink: IngredientObj) => ingredients.push(drink.strIngredient1));
    yield put(getIngredients(ingredients));
  } catch (err) {
    yield put(setError(err.message));
  }
}

// Watchers
export function* watchLoadCocktails(): SagaIterator {
  yield takeLeading(GET_COCKTAILS, loadCocktails);
}

export function* watchLoadCocktailDetails(): SagaIterator {
  yield takeLeading(GET_COCKTAIL_DETAILS, loadCocktailDetail);
}

export function* watchFilterByAlcoholic(): SagaIterator {
  yield takeLeading(FILTER_BY_ALCOHOLIC, proceedFilterByAlcoholic);
}

export function* watchCategoriesList(): SagaIterator {
  yield takeLeading(GET_CATEGORIES, getCategoriesList);
}

export function* watchFilterByCategory(): SagaIterator {
  yield takeLeading(FILTER_BY_CATEGORY, filterByCategories);
}

export function* watchGetIngredients(): SagaIterator {
  yield takeLeading(GET_INGREDIENTS, getIngredientsList);
}
