import { Store, createStore, applyMiddleware, combineReducers } from 'redux';

import { connectRouter, routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import { ApplicationStateT, createRootReducer } from './store';
import { rootSaga } from './store/rootSaga';
import createSagaMiddleware from '@redux-saga/core';
import { FavoritesReducer } from './store/favorites/reducer';
import { CatalogReducer } from './store/catalog/reducer';
import { LoaderReducer } from './store/loader/reducer';
import { QuotesReducer } from './store/quotes/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();

const configureStore = (
    history: History,
    initialState: ApplicationStateT
): Store<ApplicationStateT> => {

    const store = createStore(
        combineReducers({
            favorites: FavoritesReducer,
            catalog: CatalogReducer,
            quotes: QuotesReducer,
            loader: LoaderReducer,
            router: connectRouter(history),
        }),
        initialState,
        composeWithDevTools(applyMiddleware(routerMiddleware(history), sagaMiddleware))
    );
    sagaMiddleware.run(rootSaga);

    return store;
}

// const configureStore = (
//     history: History,
//     initialState: ApplicationStateT
// ): Store<ApplicationStateT> => {

//     const store = createStore(
//         combineReducers({
//             favorites: FavoritesReducer,
//             catalog: CatalogReducer,
//             router: connectRouter(history)
//         }),
//         initialState,
//         applyMiddleware(routerMiddleware(history), thunk)
//     );

//     return store;
// }

export default configureStore;