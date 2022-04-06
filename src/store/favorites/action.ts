import { MovieT } from '../catalog/types';
import { FavoritesActionT, FavoriteMovieT } from './types';

export const fetchFavsRequest = (): FavoritesActionT => ({
    type: 'FETCH_FAVORITES_REQUEST',
    payload: { loading: true }
});

export const fetchFavsSuccess = (favorites: FavoriteMovieT[]): FavoritesActionT => ({
    type: 'FETCH_FAVORITES_SUCCESS',
    payload: favorites
});

export const fetchFavsError = (error: string): FavoritesActionT => ({
    type: 'FETCH_FAVORITES_ERROR',
    payload: { error: error }
});

export const addToFavorites = (movie: MovieT): FavoritesActionT => ({
    type: 'ADD_TO_FAVORITES',
    payload: movie
});

export const removeFromFavorites = (id: FavoriteMovieT['id']): FavoritesActionT => ({
    type: 'REMOVE_FROM_FAVORITES',
    payload: { id }
});

export const rateFavMovie = (movieId: number, newRating: number): FavoritesActionT => ({
    type: 'RATE_MOVIE',
    payload: {
        id: movieId,
        rating: newRating
    }
})

// export type AppThunk = ThunkAction<void, ApplicationStateT, null, Action<FavoritesActionT>>;

// Old Fetch favorites request
// export const fetchFavsRequest: AppThunk = () => {
//     return (dispatch: Dispatch, state: ApplicationStateT): Action => {
//         try {
//             return dispatch({
//                 type: 'FETCH_FAVORITES_REQUEST',
//                 payload: state.favorites
//             });
//         } catch (err) {
//             return dispatch({
//                 type: 'FETCH_FAVORITES_ERROR',
//             });
//         }
//     };
// };

// export const addToFavorites: ActionCreator<
//     ThunkAction<void, ApplicationStateT, MovieT, Action<FavoritesActionT>>
// > = (movie: MovieT) => {
//     return (dispatch: Dispatch): Action => {
//         try {
//             return dispatch({
//                 type: 'ADD_TO_FAVORITES',
//                 payload: movie
//             });
//         } catch (err) {
//             return dispatch({
//                 type: 'FETCH_FAVORITES_ERROR',
//                 payload: null
//             });
//         }
//     };
// };

// export const removeFromFavorites: ActionCreator<
//     ThunkAction<void, ApplicationStateT, FavoriteMovieT, Action<FavoritesActionT>>
// > = (movie: FavoriteMovieT) => {
//     return (dispatch: Dispatch): Action => {
//         try {
//             return dispatch({
//                 type: 'REMOVE_FROM_FAVORITES',
//                 payload: movie
//             });
//         } catch (err) {
//             return dispatch({
//                 type: 'FETCH_FAVORITES_ERROR',
//                 payload: null
//             });
//         }
//     };
// };

// export const rateFavMovie: ActionCreator<
//     ThunkAction<void, ApplicationStateT, FavoriteMovieT, Action<FavoritesActionT>>
// > = (movieId: number, newRating: number) => {
//     return (dispatch: Dispatch): Action => {
//         return dispatch({
//             type: 'RATE_MOVIE',
//             payload: {
//                 id: movieId,
//                 rating: newRating

//             }
//         })
//     }
// }