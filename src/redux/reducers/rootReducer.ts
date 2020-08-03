import { combineReducers } from 'redux';
import { cocktailReducer } from './cocktailReducer';

export const rootReducer = combineReducers({ cocktailReducer });

export type AppState = ReturnType<typeof rootReducer>;
