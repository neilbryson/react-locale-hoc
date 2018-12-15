import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import LocaleContext from './LocaleContext';

const propTypes = {
  children: PropTypes.any,
  locale: PropTypes.string.isRequired,
  strings: PropTypes.object.isRequired,
};

const defaultProps = {
  children: null,
  locale: 'en-US',
  strings: {},
};

class LocaleProvider extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      locale: this.props.locale,
    };
  }

  componentDidMount() {
    const { locale: browserLocale } = this.getBrowserLocale();

    this.setState({ locale: browserLocale });
  }

  getBrowserLocale = () => {
    const locale = (navigator.languages && navigator.languages[0])
      || navigator.language
      || navigator.userLanguage;
    const [languageCode] = locale.toLowerCase().split(/[-_]+/);

    return { languageCode, locale };
  };

  render() {
    const { strings } = this.props;
    const { locale } = this.state;
    const contextValue = { locale, strings };

    return (
      <LocaleContext.Provider value={contextValue}>
        {this.props.children}
      </LocaleContext.Provider>
    );
  }
}

LocaleProvider.propTypes = propTypes;
LocaleProvider.defaultProps = defaultProps;

export default LocaleProvider;
