import { takeEvery, put, call, takeLatest, delay } from 'redux-saga/effects';
import { QuoteT } from './types';
import { fetchQuotesSuccess, fetchQuotesError} from './actions';
import axios, {AxiosResponse} from 'axios';

const getQuotes = () => axios.get<QuoteT[]>('https://movie-quotes-53f58-default-rtdb.europe-west1.firebasedatabase.app/.json');

function* onFetchQuotes() {
    yield delay(1000);
    try {
        const response: AxiosResponse<QuoteT[]> = yield call(getQuotes);
        yield put(fetchQuotesSuccess(response.data));
    } catch( err: any) {
        yield put(fetchQuotesError(err))
    }
}

export function* fetchQuotesSaga() {
    yield takeLatest('FETCH_QUOTES_REQUEST', onFetchQuotes)
}