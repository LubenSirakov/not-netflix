import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { History } from "history";

import { CatalogReducer } from './catalog/reducer';
import { CatalogStateT } from './catalog/types';

import { FavoritesReducer } from './favorites/reducer';
import { FavoritesStateT } from './favorites/types';
import { RouterState } from 'connected-react-router';
import { QuotesStateT } from "./quotes/types";

export type ApplicationStateT = {
    favorites: FavoritesStateT,
    catalog: CatalogStateT,
    quotes: QuotesStateT,
    router: RouterState
}

export const createRootReducer = (history: History) =>
    combineReducers({
        favorites: FavoritesReducer,
        catalog: CatalogReducer,
        router: connectRouter(history)
    });