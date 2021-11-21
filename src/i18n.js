import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from "./translations/en.json"
import fr from "./translations/fr.json"

const resources = {
    en: {
        translation: en
    },
    fr: {
        translation: fr
    }
}

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        resources: resources
    });

export default i18n;
