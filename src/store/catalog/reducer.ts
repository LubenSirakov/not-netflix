import { CatalogActionT, CatalogStateT } from "./types";
export const initialState: CatalogStateT = {
    data: [],
    loading: false,
    error: undefined
};

const reducer = (state = initialState, action: CatalogActionT): CatalogStateT => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'FETCH_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case 'FETCH_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        default:
            return state;
    }
}

export { reducer as CatalogReducer };