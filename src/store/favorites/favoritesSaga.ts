import { takeLatest, call, put, select, delay } from 'redux-saga/effects';
import { FavoriteMovieT } from './types';
import {
    fetchFavsRequest,
    fetchFavsSuccess,
    fetchFavsError,
} from './action';

import { ApplicationStateT } from '..';
import { AxiosResponse } from 'axios';

const getFavorites = (state: ApplicationStateT) => state.favorites

function* onFetchFavs() {
    yield delay(1000);
    try{
        const favs: AxiosResponse<FavoriteMovieT[]> = yield select(getFavorites);
        yield put(fetchFavsSuccess(favs.data));

    } catch(err: any) {
        yield put(fetchFavsError(err));

    }
}

export function* fetchFavsSaga() {
    yield takeLatest('FETCH_FAVORITES_REQUEST', onFetchFavs);
}