import hoc from './localise';
import provider from './LocaleProvider';

export const localise = hoc;
export const LocaleProvider = provider;

const exports = { localise, LocaleProvider };

export default exports;
