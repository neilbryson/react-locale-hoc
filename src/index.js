import hoc from './localise';
import provider from './LocaleProvider';

export const localise = hoc;
export const LocaleProvider = provider;

const exports = { LocaleProvider, localise };

export default exports;
