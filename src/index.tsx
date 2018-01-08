import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory, Router} from 'react-router';
import rootReducer from './rootReducer';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import routes from './routes';
import configureStore from './configureStore';
import {IntlProvider} from 'react-intl-redux';
import {setupLocale} from './ui/App/actions';

const store = configureStore(rootReducer);
const history = syncHistoryWithStore(browserHistory, store);

store.dispatch(setupLocale());

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider>
      <Router history={history}>
        {routes}
      </Router>
    </IntlProvider>
  </Provider>
  , document.getElementById('root') as HTMLElement);
registerServiceWorker();