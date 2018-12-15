import React, { PureComponent } from 'react';

import LocaleContext from './LocaleContext';

const localise = WrappedComponent =>
  class LocalisedComponent extends PureComponent {
    getString = strings => stringId => strings[stringId] || stringId;

    render() {
      return (
        <LocaleContext.Consumer>
          {strings =>
            <WrappedComponent t={this.getString(strings)} {...this.props} />
          }
        </LocaleContext.Consumer>
      )
    }
  };

export default localise;
