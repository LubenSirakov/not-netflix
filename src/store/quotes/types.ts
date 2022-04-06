export type QuoteT = {
    line: string
}

export type QuotesStateT = {
    data: QuoteT[],
    loading: boolean,
    error?: string
}

export type QuotesActionT =
    {
        type: 'FETCH_QUOTES_REQUEST',
        payload: { loading: true }
    } |
    {
        type: 'FETCH_QUOTES_SUCCESS',
        payload: QuoteT[]
    } |
    {
        type: 'FETCH_QUOTES_ERROR',
        payload: { error: string }
    }