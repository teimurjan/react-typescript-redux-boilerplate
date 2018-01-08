import * as React from 'react';
import { intlShape } from 'react-intl';

export type IntlFunction = (messageId: string, values?: {}) => string;

export interface IntlProps {
  intl: IntlFunction;
  intlLocale: string;
}

export default function <T>(Component: React.ComponentType<T & IntlProps>): React.StatelessComponent<T> {
  const IntlComponent: React.SFC<T> = (props, context) => {
    const intl = (messageId: string, values?: {}) => context.intl.formatMessage({id: messageId}, values);
    return <Component {...props} intl={intl} intlLocale={context.intl.locale}/>;
  };
  IntlComponent.contextTypes = {
    intl: intlShape
  };
  return IntlComponent;
}