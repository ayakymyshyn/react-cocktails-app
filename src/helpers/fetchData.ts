import { Cocktail } from "../types/cocktailsTypes";

const headers: HeadersInit = new Headers();
headers.set('Content-Type', 'application/json');
headers.set('x-rapidapi-host', 'the-cocktail-db.p.rapidapi.com');
headers.set('x-rapidapi-key', `${process.env.REACT_APP_API_KEY}`);

// creating a link which allow
// to fetch cocktails with different ingredients
// every time user goes to main page
// and set it as default parameter

// (async () => {
//   const res = await fetch('https://the-cocktail-db.p.rapidapi.com/list.php?i=list', { headers });
//   const ingredients = await res.json();
//   const random = ingredients[Math.floor(Math.random() * ingredients.length)];
// })();

const link = 'https://the-cocktail-db.p.rapidapi.com/filter.php?i=Gin';
type Data<T> = {
  drinks: Array<T>
};
type Response<T> = {
  data: Data<T>,
  error: boolean,
  loading: boolean
};

export const fetchData = async <T>(url: string = link): Promise<Response<T>> => {
  let loading = true;
  let error = false;
  let data: Data<T>;
  try {
    const responce = await fetch(url, { headers });
    const info = await responce.json();
    data = info;
  } catch (err) {
    error = err;
    throw new Error(err);
  }
  if (data) loading = false;
  return { data, error, loading };
};
