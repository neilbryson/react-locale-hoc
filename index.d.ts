import * as React from 'react';

interface Locale {
  [StringId: string]: string;
}

interface LocaleCollection {
  [LocaleCode: string]: Locale;
}

interface LocalisedProps {
  strings: LocaleCollection;
}

type LocalisedComponent = React.Component<LocalisedProps>;

/**
 * A higher-order component that injects the localisation function in a component.
 */
export function localise<T extends React.ReactNode>(WrappedComponent: T): LocalisedComponent;

/**
 * Retrieves the string based on the `stringId`. If there are no matching
 * `stringId`s, the `stringId` will be returned instead.
 */
export function t(stringId: string): string;

/**
 * Provides the localisation throughout the child components
 */
export class LocaleProvider extends React.Component<LocalisedProps> {}

