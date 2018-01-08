import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import {intlReducer as intl} from 'react-intl-redux';
import {Map} from 'immutable';
import login, {LoginState} from './ui/Login/reducer';

export interface RootState {
  routing: Map<string, {}>;
  intl: Map<string, {}>;
  login: Map<keyof LoginState, {}>;
}

export default combineReducers<RootState>({
  routing, intl, login
});
