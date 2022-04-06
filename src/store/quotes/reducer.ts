import { QuotesActionT, QuotesStateT } from './types';

export const initialState: QuotesStateT = {
    data: [],
    loading: false,
    error: undefined
};

const reducer = (state = initialState, action: QuotesActionT): QuotesStateT => {
    switch (action.type) {
        case 'FETCH_QUOTES_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'FETCH_QUOTES_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case 'FETCH_QUOTES_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        default:
            return state;
    }
}

export { reducer as QuotesReducer };