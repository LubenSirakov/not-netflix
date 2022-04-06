import { takeLatest, put, call, delay } from 'redux-saga/effects';
import { MovieT } from '../catalog/types';
import { fetchSuccess, fetchError } from '../catalog/action';
import axios, { AxiosResponse } from 'axios';

const getMovies = () => axios.get<MovieT[]>('https://movie-project-78af1-default-rtdb.europe-west1.firebasedatabase.app/.json')

function* onFetchMovies() {
    yield delay(1000);
    try {
        const response: AxiosResponse<MovieT[]> = yield call(getMovies);
        yield put(fetchSuccess(response.data));

    } catch (err: any) {                                            
        yield put(fetchError(err));

    }
}

export function* fetchMoviesSaga() {
    yield takeLatest('FETCH_REQUEST', onFetchMovies);
}