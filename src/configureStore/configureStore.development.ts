import { applyMiddleware, compose, createStore, Reducer } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { createEpicMiddleware } from 'redux-observable';
import { browserHistory } from 'react-router';
import rootEpic from '../rootEpic';
import { RootState } from '../rootReducer';

interface WindowWithReduxDevTools extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
}

const windowWithReduxDevTools = window as WindowWithReduxDevTools;
const composeEnhancers = windowWithReduxDevTools.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epicMiddleware = createEpicMiddleware(rootEpic);
const enhancer = composeEnhancers(applyMiddleware(epicMiddleware, routerMiddleware(browserHistory)));

export default function (rootReducer: Reducer<RootState>) {
  const store = createStore(rootReducer, enhancer);
  if (module.hot) {
    module.hot.accept('../rootReducer', () => store.replaceReducer(rootReducer));
  }
  return store;
}