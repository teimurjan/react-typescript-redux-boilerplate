import * as React from 'react';
import { storiesOf } from '@storybook/react';

import LoginComponent, { LoginProps } from './Login';
import { initialState } from './reducer';
import { Map as ImmutableMap } from 'immutable';
import { reduxAction } from '../../stories/utils';
import { CHANGE_EMAIL, CHANGE_PASSWORD, SUBMIT } from './actions';
import withIntl from '../../stories/withIntl';

const initialProps: LoginProps = {
  ...initialState,
  actions: {
    changeEmail: reduxAction(CHANGE_EMAIL),
    changePassword: reduxAction(CHANGE_PASSWORD),
    submit: reduxAction(SUBMIT)
  }
};
const Login = withIntl(LoginComponent);
const immutableProps = ImmutableMap(initialProps);

storiesOf('Login', module)
  .add('Initial state', () => <Login {...initialProps} />)
  .add('With content', () => {
    const newProps = immutableProps.merge({
      email: 'test@email.com',
      password: 'Passw0rd'
    });
    return <Login {...newProps.toJS()} />;
  })
  .add('Loading', () => {
    const newProps = immutableProps.merge({
      isLoading: true
    });
    return <Login {...newProps.toJS()} />;
  })
  .add('With empty errors', () => {
    const newProps = immutableProps.merge({
      errors: {
        email: ['errors.login.email.mustNotBeEmpty'],
        password: ['errors.login.password.mustNotBeEmpty']
      }
    });
    return <Login {...newProps.toJS()} />;
  })
  .add('With auth errors', () => {
    const newProps = immutableProps.merge({
      errors: {
        auth: ['errors.login.invalidEmailOrPassword'],
      }
    });
    return <Login {...newProps.toJS()} />;
  });
