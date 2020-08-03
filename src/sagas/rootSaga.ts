// Core
import { all } from 'redux-saga/effects';
// Sagas
import {
  watchLoadCocktails,
  watchLoadCocktailDetails,
  watchFilterByAlcoholic,
  watchCategoriesList,
  watchFilterByCategory,
  watchGetIngredients,
} from './cocktails.sagas';

export function* rootSaga() {
  yield all([
    watchLoadCocktails(),
    watchLoadCocktailDetails(),
    watchFilterByAlcoholic(),
    watchCategoriesList(),
    watchFilterByCategory(),
    watchGetIngredients(),
  ]);
}
