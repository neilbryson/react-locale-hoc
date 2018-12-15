import React, { PureComponent } from 'react';

import LocaleContext from './LocaleContext';

const localise = WrappedComponent =>
  class LocalisedComponent extends PureComponent {
    getString = (strings, locale) => stringId => {
      if (!strings[locale][stringId]) {
        // eslint-disable-next-line
        console.warn(`[react-locale-hoc] No string found for '${stringId}' (locale: ${locale}).`);
        return stringId;
      }

      return strings[locale][stringId];
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
