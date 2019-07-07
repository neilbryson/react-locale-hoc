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

/**
 * Retrieves a string
 */
export function localise(stringId: string): string;

/**
 * Provides the localisation throughout the child components
 */
export class LocaleProvider extends React.Component<LocalisedProps> {}

