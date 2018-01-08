import * as React from 'react';
import { IntlProvider } from 'react-intl';

export default function <T>(Component: React.ComponentType<T>,
                            messages: {} = require(`../assets/translations/en.json`),
                            locale: 'en' = 'en'): React.SFC<T> {
  return (props: T) => (
    <IntlProvider locale={locale} messages={messages}>
      <Component {...props}/>
    </IntlProvider>
  );
}