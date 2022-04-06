import { QuoteT, QuotesActionT } from './types';

export const fetchQuotesRequest = (): QuotesActionT => ({
    type: 'FETCH_QUOTES_REQUEST',
    payload: { loading: true }
});

export const fetchQuotesSuccess = (quotes: QuoteT[]): QuotesActionT => ({
    type: 'FETCH_QUOTES_SUCCESS',
    payload: quotes
});

export const fetchQuotesError = (error: string): QuotesActionT => ({
    type: 'FETCH_QUOTES_ERROR',
    payload: { error: error }
});