import {ActionCreator} from 'redux';
import {Action} from '../../typings/redux-custom';

export type LoginActionType =
  'LOGIN/CHANGE_EMAIL' |
  'LOGIN/CHANGE_PASSWORD' |
  'LOGIN/SUBMIT' |
  'LOGIN/SUBMIT_SUCCESS' |
  'LOGIN/SUBMIT_FAILURE';

export const CHANGE_EMAIL: LoginActionType = 'LOGIN/CHANGE_EMAIL';
export const CHANGE_PASSWORD: LoginActionType = 'LOGIN/CHANGE_PASSWORD';
export const SUBMIT: LoginActionType = 'LOGIN/SUBMIT';
export const SUBMIT_SUCCESS: LoginActionType = 'LOGIN/SUBMIT_SUCCESS';
export const SUBMIT_FAILURE: LoginActionType = 'LOGIN/SUBMIT_FAILURE';

type LoginAction = Action<LoginActionType>;

export type LoginActionCreatorsMapObject = {
  changeEmail: ActionCreator<LoginAction>;
  changePassword: ActionCreator<LoginAction>;
  submit: ActionCreator<LoginAction>;
};

function changeEmail(email: string): LoginAction {
  return {type: CHANGE_EMAIL, payload: {email}};
}

function changePassword(password: string): LoginAction {
  return {type: CHANGE_PASSWORD, payload: {password}};
}

function submit(): LoginAction {
  return {type: SUBMIT};
}

const LoginActionCreators: LoginActionCreatorsMapObject = {changeEmail, changePassword, submit};
export default LoginActionCreators;