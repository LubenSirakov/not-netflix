import { START_LOADING, STOP_LOADING } from "./types";

const initialState = {};

const reducer = (state = initialState, { type, payload }: any) => {

    switch (type) {
        case START_LOADING:
            return {
                ...state,
                name: true
            }
        case STOP_LOADING:
            return {
                ...state,
                name: true
            }
        default:
            return state;
    }
};

export { reducer as LoaderReducer };