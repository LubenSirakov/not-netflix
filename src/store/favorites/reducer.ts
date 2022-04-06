import { FavoriteMovieT, FavoritesActionT, FavoritesStateT } from './types';
export const initialState: FavoritesStateT = {
    data: [],
    loading: false,
    error: undefined
};

const reducer = (state = initialState, action: FavoritesActionT): FavoritesStateT => {
    switch (action.type) {
        case 'FETCH_FAVORITES_REQUEST':
            return {
                ...state,
                loading: true,
            }
        case 'FETCH_FAVORITES_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case 'FETCH_FAVORITES_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        case 'ADD_TO_FAVORITES':
            return {
                ...state,
                data: [...state.data, { ...action.payload, rating: 0 }]
            }
        case 'REMOVE_FROM_FAVORITES':
            return {
                ...state,
                data: [...state.data.filter(m => m.id !== action.payload.id)]

            }
        case 'RATE_MOVIE':
            return {
                ...state,
                data: state.data.map((m: FavoriteMovieT): FavoriteMovieT => {
                    if (m.id === action.payload.id) {
                        return {
                            ...m,
                            rating: action.payload.rating
                        }
                    }
                    return m;
                })
            }
        default:
            return state;
    }
};

export { reducer as FavoritesReducer };