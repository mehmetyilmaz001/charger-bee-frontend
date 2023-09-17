export const NEXT_LOCALE_COOKIE = 'NEXT_LOCALE';

export const dateFormatList = [
  'YYYY-MM-DD',
  'YYYY/MM/DD',
  'MM/DD/YYYY',
  'DD/MM/YYYY',
  'MMMM D, YYYY',
  'D MMMM YYYY',
  'MMM D, YYYY',
  'YYYY-MM-DD HH:mm:ss',
  'YYYY-MM-DD HH:mm:ss A',
  'YYYY-MM-DD HH:mm:ss Z',
  'h:mm A',
  'HH:mm:ss',
  'dddd',
  'ddd, MMM D',
  'ddd, MMM D, YYYY',
  'dddd, MMMM D, YYYY',
  'dddd, MMMM D, YYYY HH:mm:ss',
  'DD/MM/YYYY [at] h:mm A',
  'MMMM YYYY',
  'YYYY [Q]Q',
  '[Week] W, YYYY',
  'dddd [Week] W, YYYY',
  'ddd, MMM D, YYYY h:mm A',
  'YYYY-MM-DDTHH:mm:ss',
  'HH:mm',
  'hh:mm A',
] as const;

export const locale = {
  en: { code: 'en', name: 'English' },
  tr: { code: 'tr', name: 'Türkçe' },
};
