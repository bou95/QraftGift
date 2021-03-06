import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import languageDetector from 'i18next-browser-languagedetector'
import {initReactI18next} from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
i18n.use(Backend).use(languageDetector).use(I18nextBrowserLanguageDetector).use(initReactI18next).init({
    fallbackLng: 'en',
    debug: true,
    detection: {
        order: ['queryString', 'cookie'],
        cache: ['cookie']
    },
    interpolation: {
        escapeValue: false
    }
})
export default i18n
