export const state = () => ({
    locales: ['en', 'zh', 'ja'],
    locale: 'en',
  })
  export const mutations = {
    SET_LANG (state, locale) {
      if (state.locales.includes(locale)) {
        state.locale = locale
        this.app.$cookies.set('user-lan', locale)
        this.app.i18n.locale = locale
      }
    }
    
  }