import {applyMiddleware, compose, createStore} from 'redux';
import reducers from '../reducers/index';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
};

const middlewares = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedReducer = persistReducer(persistConfig, reducers);

export default (initialState = {}) => {
  let store = createStore(
    persistedReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares)),
  );
  let persistor = persistStore(store);
  return {store, persistor};
};
