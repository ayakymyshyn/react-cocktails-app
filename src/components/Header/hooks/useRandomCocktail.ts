import { useSelector } from 'react-redux';
// Types
import { AppState } from '../../../redux/reducers/rootReducer';

export const useRandomCocktail = () => {
  const cocktails = useSelector((state: AppState) => state.cocktailReducer.cocktails);
  const randomCocktail = cocktails[Math.floor(Math.random() * cocktails.length)];
  return randomCocktail;
};
