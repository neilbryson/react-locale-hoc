# react-locale-hoc

A higher-order component for React for handling internationalisation.

Wrapped components will receive a `t(stringId)` prop which will return the string 
that it would find in your strings file.

## Requirements
React v16.3 or higher. This uses React's Context API.

## Installation
```bash
  npm install --save react-locale-hoc
```

## Usage
  An object like this could be created to make it easier to pass the strings to the `LocaleProvider`.  
  [Lazy loading](https://webpack.js.org/guides/lazy-loading/) could be implement if you prefer that.
  ```javascript
  // locales.js
  import enUS from './locales/en-US.json';
  import fr from './locales/fr.json';

  const locales = {
    'en-US': enUS,
    'fr': fr,
  };
   
  export default locales;
  ```

  Wrap your root component in the `LocaleProvider` so that all of its descendants could receive `react-locale-hoc`'s context.
  ```javascript
  // App.js
  import React, { PureComponent } from 'react';
  import { LocaleProvider } from 'react-locale-hoc';

  import MyApp from './MyApp';

  import locales from './locales/locales.js';
   
  class App extends PureComponent {
    render() {
      return (
        <LocaleProvider strings={locales}>
          <MyApp />
        </LocaleProvider>
      );
    }
  }
  ```

  The `localise` HOC will provide the `t(stringId)` prop to the wrapped component.
  ```javascript
  // MyComponent.js
  import React, { PureComponent } from 'react';
  import { localise } from 'react-locale-hoc';
   
  class MyComponent extends PureComponent {
    render() {
      return (
        <div>
          <h1>{this.props.t('hello_world')}</h1>
          This component now has access to the localisation strings !
        </div>
      )
    }
  }
   
  export default localise(MyComponent);
  ```

## License
[MIT](/LICENSE)
