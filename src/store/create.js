import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import history from './history';

const initialState = {};
const enhancers = [];

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, routerMiddleware(history)];

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line no-underscore-dangle
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(applyMiddleware(...middlewares), ...enhancers);

const configStore = {
  reducer: rootReducer,
  preloadedState: initialState,
  enhancer: composedEnhancers,
};

const store = createStore(configStore.reducer, configStore.preloadedState, configStore.enhancer);

sagaMiddleware.run(rootSaga);

export default store;
