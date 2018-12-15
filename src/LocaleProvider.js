import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import LocaleContext from './LocaleContext';

const propTypes = {
  children: PropTypes.any.isRequired,
  strings: PropTypes.object,
};

const defaultProps = {
  children: null,
  strings: {},
};

class LocaleProvider extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      locale: 'en-US',
      strings: {},
    };
  }

  componentDidMount() {
    const { locale: browserLocale } = this.getBrowserLocale();

    this.setState({ locale: browserLocale }, () => {
      this.setLocalisedStrings(browserLocale);
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { locale } = this.state;

    if (prevState.locale !== locale) {
      this.setLocalisedStrings(locale);
    }
  }

  getBrowserLocale = () => {
    const locale = (navigator.languages && navigator.languages[0])
      || navigator.language
      || navigator.userLanguage;
    const [languageCode] = locale.toLowerCase().split(/[-_]+/);

    return { languageCode, locale };
  };

  setLocalisedStrings = locale => {
    if (!locale) {
      return null;
    }

    this.setState({ locale, strings: this.props.strings[locale] });
  };

  render() {
    const { strings } = this.state;

    return (
      <LocaleContext.Provider value={strings}>
        {this.props.children}
      </LocaleContext.Provider>
    );
  }
}

LocaleProvider.propTypes = propTypes;
LocaleProvider.defaultProps = defaultProps;

export default LocaleProvider;
