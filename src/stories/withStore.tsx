import * as React from 'react';
import { Provider, Store } from 'react-redux';
import { RootState } from '../rootReducer';

export default function <T>(Component: React.ComponentType<T>,
                            store: Store<RootState>) {
  return (props: T) => (
    <Provider store={store}>
      <Component {...props}/>
    </Provider>
  );
}