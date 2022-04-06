import { MovieT } from '../catalog/types';

export type FavoriteMovieT = MovieT & { rating: number }

export type FavoritesStateT = {
    data: FavoriteMovieT[],
    loading: boolean,
    error?: string
}

export type FavoritesActionT =
    {
        type: 'FETCH_FAVORITES_REQUEST',
        payload: { loading: boolean }
    } |
    {
        type: 'FETCH_FAVORITES_SUCCESS',
        payload: FavoriteMovieT[]
    } |
    {
        type: 'FETCH_FAVORITES_ERROR',
        payload: {
            error: string
        }
    } |
    {
        type: 'ADD_TO_FAVORITES',
        payload: MovieT
    } | {
        type: 'REMOVE_FROM_FAVORITES',
        payload: { id: MovieT['id'] }
    } | {
        type: 'RATE_MOVIE',
        payload: {
            id: FavoriteMovieT['id'],
            rating: FavoriteMovieT['rating']
        }
    }
 

