/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Types
import { AppState } from '../../../redux/reducers/rootReducer';
// Action creators
import {
  getCategories, filterByAlcoholic, filterByCategory, getIngredients,
} from '../../../redux/actions';

export const useFilter = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [header, setHeader] = useState('');
  const {
    cocktails, error, categories, ingredients,
  } = useSelector((state: AppState) => ({
    cocktails: state.cocktailReducer.cocktails,
    error: state.cocktailReducer.error,
    categories: state.cocktailReducer.categories,
    ingredients: state.cocktailReducer.ingredientsList,
  }));
  useEffect(() => {
    dispatch(getCategories(categories));
    dispatch(getIngredients(ingredients));
  }, []);
  const handleCheckAlcoFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    error ? setOpen(false) : setOpen(true);
    dispatch(filterByAlcoholic(e.target.value, cocktails));
    setHeader(e.target.value);
  };
  const handleCheckCategoryFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    error ? setOpen(false) : setOpen(true);
    dispatch(filterByCategory(e.target.value, cocktails));
    setHeader(e.target.value);
  };

  return {
    open,
    setOpen,
    handleCheckAlcoFilter,
    handleCheckCategoryFilter,
    error,
    categories,
    header,
    ingredients,
  };
};
