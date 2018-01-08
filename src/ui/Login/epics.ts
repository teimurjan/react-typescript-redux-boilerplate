import {post} from '../../api';
import {SUBMIT, SUBMIT_FAILURE, SUBMIT_SUCCESS} from './actions';
import 'rxjs';
import {Observable} from 'rxjs/Observable';
import {ActionsObservable} from 'redux-observable';
import {AnyAction, Store} from 'redux';
import {RootState} from '../../rootReducer';
import urls from '../../urls';

function submitEpic(action$: ActionsObservable<AnyAction>, store: Store<RootState>) {
  return action$.ofType(SUBMIT)
    .mergeMap((action: AnyAction) => {
        const {email, password} = store.getState().login.toJS();
        return Observable.fromPromise(post(urls.login, {email, password},
          {refresh_token: 'stub refresh token', access_token: 'stub access token'}))
          .map((payload: { refresh_token: string, access_token: string }) => {
            localStorage.setItem('refresh_token', payload.refresh_token);
            localStorage.setItem('access_token', payload.access_token);
            return {type: SUBMIT_SUCCESS};
          })
          .catch(errors => Observable.of({type: SUBMIT_FAILURE, errors}));
      }
    );
}

export default [submitEpic];