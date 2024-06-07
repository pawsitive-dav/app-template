import home from './home';

export default defineI18nLocale(async (locale) => {
  return {
    home: home,
  };
});
