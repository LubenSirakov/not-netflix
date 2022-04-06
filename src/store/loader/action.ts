import { START_LOADING, STOP_LOADING } from './types';

export const startLoading = (name: boolean) => ({
    type: START_LOADING,
    payload: { name }
});

export const stopLoading = (name: boolean) => ({
    type: STOP_LOADING,
    payload: { name }
});