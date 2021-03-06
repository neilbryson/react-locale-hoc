import React, { PureComponent } from 'react';
import { sprintf } from 'sprintf-js';

import LocaleContext from './LocaleContext';

const localise = WrappedComponent =>
  class LocalisedComponent extends PureComponent {
    getString = (strings, locale) => (stringId, ...args) => {
      if (!strings[locale] || !strings[locale][stringId]) {
        // eslint-disable-next-line
        console.warn(`[react-locale-hoc] [${locale}] No string found for '${stringId}'.`);
        return stringId;
      }

      return sprintf(strings[locale][stringId], ...args);
    };

    render() {
      return (
        <LocaleContext.Consumer>
          {({ locale, strings }) =>
            <WrappedComponent t={this.getString(strings, locale)} {...this.props} />
          }
        </LocaleContext.Consumer>
      );
    }
  };

export default localise;
