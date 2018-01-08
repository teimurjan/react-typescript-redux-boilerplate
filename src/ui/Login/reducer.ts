import { Map as ImmutableMap } from 'immutable';
import createReducer from '../../createReducer';
import { CHANGE_EMAIL, CHANGE_PASSWORD, SUBMIT, SUBMIT_FAILURE, SUBMIT_SUCCESS } from './actions';

export interface LoginState {
  email: string;
  password: string;
  isLoading: boolean;
  errors?: object;
}

export const initialState: LoginState = {
  email: '',
  password: '',
  isLoading: false,
  errors: undefined
};

export default createReducer({
  [CHANGE_PASSWORD]: (state, action) => state.set('password', action.payload.password),
  [CHANGE_EMAIL]: (state, action) => state.set('email', action.payload.email),
  [SUBMIT]: (state, action) => state.merge({isLoading: true, errors: undefined}),
  [SUBMIT_SUCCESS]: (state, action) => state.set('isLoading', false),
  [SUBMIT_FAILURE]: (state, action) => state.merge({isLoading: false, errors: action.errors}),
}, ImmutableMap(initialState));