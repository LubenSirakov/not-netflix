import { CatalogActionT, MovieT } from './types';

// export type AppThunk = ActionCreator<
//     ThunkAction<void, ApplicationStateT, null, Action<CatalogActionT>>
// >;

export const fetchRequest = (): CatalogActionT => ({
    type: 'FETCH_REQUEST',
    payload: { loading: true }
})

export const fetchSuccess = (movies: MovieT[]): CatalogActionT => ({
    type: 'FETCH_SUCCESS',
    payload: movies
});

export const fetchError = (error: string): CatalogActionT => ({
    type: 'FETCH_ERROR',
    payload: { error: error }
})

//Redux Thunk with API data fetch
// export const fetchRequest = () => {
//     return (dispatch: Dispatch) => {

//         return fetch(moviesDb)
//             .then(response => response.json())
//             .then(json => dispatch({
//                 type: 'FETCH_SUCCESS',
//                 payload: json
//             }))
//             .catch(err => dispatch({
//                 type: 'FETCH_ERROR'
//             }))
//     };
// };

//Redux Thunk with mock data
// export const fetchRequest: AppThunk = () => {
//     return (dispatch: Dispatch): Action => {

//         try {
//             return dispatch({
//                 type: 'FETCH_SUCCESS',
//                 payload: movieDb
//             });
//         } catch (err) {
//             return dispatch({
//                 type: 'FETCH_ERROR'
//             });
//         }
//     };
// };