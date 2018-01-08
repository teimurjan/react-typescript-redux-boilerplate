import * as React from 'react';
import { Link } from 'react-router';
import injectIntl, { IntlProps } from '../common/injectIntl';
import { LoginActionCreatorsMapObject } from './actions';
import { LoginState } from './reducer';
import { FormEvent, InputEvent } from '../../typings/html-shortcuts';

export interface LoginProps extends LoginState {
  actions: LoginActionCreatorsMapObject;
}

export default injectIntl((props: LoginProps & IntlProps) => {
  const handleEmailChange = (e: InputEvent) => props.actions.changeEmail(e.currentTarget.value);
  const handlePasswordChange = (e: InputEvent) => props.actions.changePassword(e.currentTarget.value);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    props.actions.submit();
  };

  const {email, password, intl, isLoading} = props;

  return (
    <div>
      <div>
        <div>
          <form onSubmit={handleSubmit} noValidate>
            <input type="email" value={email} onChange={handleEmailChange}
                   placeholder={intl('auth.placeholder.email')}/>
            <input type="password" value={password} onChange={handlePasswordChange}
                   placeholder={intl('auth.placeholder.password')}/>
            <button disabled={isLoading} type="submit">
              {intl('auth.button.logIn')}
            </button>
            <Link to="/password/forgot">
              <small>{intl('login.link.forgot')}</small>
              <br/>
            </Link>
            <p>
              <small>{intl('login.text.noAccount')}</small>
            </p>
            <Link to="/register">
              {intl('auth.button.register')}
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
});