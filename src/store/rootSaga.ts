import { all, fork } from 'redux-saga/effects';
import { fetchMoviesSaga } from './catalog/moviesSaga';
import { fetchFavsSaga } from './favorites/favoritesSaga';
import { fetchQuotesSaga } from './quotes/quotesSaga';

export function* rootSaga() {
    yield fork(fetchMoviesSaga);
    yield fork(fetchFavsSaga);
    yield fork(fetchQuotesSaga);
}