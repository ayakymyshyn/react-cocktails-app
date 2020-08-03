export type Cocktail = {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
};

export type Ingredients = {
  ingredient: string,
  measure: string
};

export interface CocktailDetails extends Cocktail {
  strInstructions: string,
  ingredients: Array<Ingredients>
}

export type Category = {
  strCategory: string
};

export type Alco = 'alcoholic' | 'non alcoholic';
