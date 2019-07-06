import * as React from 'react';

interface Locale {
  [StringId: string]: string;
}

interface LocaleCollection {
  [LocaleCode: string]: Locale;
}

interface LocalisedProps {
  strings: Locale;
}

type LocalisedComponent = React.Component<LocalisedProps, any>;

/**
 * A higher-order component that injects the localisation function in a component.
 */
export function localise(WrappedComponent: React.Component): LocalisedComponent;

/**
 * Provides the localisation throughout the child components
 */
export class LocaleProvider extends React.Component<LocalisedProps> {}
