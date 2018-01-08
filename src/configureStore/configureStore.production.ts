import {applyMiddleware, compose, createStore, Reducer} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import {createEpicMiddleware} from 'redux-observable';
import {browserHistory} from 'react-router';
import rootEpic from '../rootEpic';
import {RootState} from '../rootReducer';

const epicMiddleware = createEpicMiddleware(rootEpic);
const enhancer = compose(applyMiddleware(epicMiddleware, routerMiddleware(browserHistory)));

export default function (rootReducer: Reducer<RootState>) {
    return createStore(rootReducer, enhancer);
}