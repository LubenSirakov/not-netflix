export type MovieT = {
    id: number,
    title: string,
    length: number,
    director: string,
    posterUrl: string,
}

export type CatalogStateT = {
    data: MovieT[],
    loading: boolean,
    error?: string,
}

export type CatalogActionT =
    {
        type: 'FETCH_REQUEST',
        payload: { loading: true }
    } |
    {
        type: 'FETCH_SUCCESS',
        payload: MovieT[]
    } |
    {
        type: 'FETCH_ERROR',
        payload: { error: string }
    }