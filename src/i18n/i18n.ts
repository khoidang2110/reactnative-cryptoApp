import i18n from 'i18next';
import {initReactI18next} from 'react-i18next'
import en from './en.json';
import vi from './vi.json'

i18n.use(initReactI18next).init({
    lng:'en',
    resources:{
        en: en,
        vi:vi
    },
    interpolation:{
        escapeValue:false
    },
    compatibilityJSON: 'v3'
})

export default i18n 