import I18n from 'i18n-js';
import { NativeModules, Platform } from 'react-native';

import pt_BR from './pt-BR';

const normalizeTranslate = {
  pt_BR: 'pt_BR',
  pt_US: 'pt_BR',
};

type NormalizeTranslate = keyof typeof normalizeTranslate;

const getLanguageByDevice = (): NormalizeTranslate =>
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale
    : NativeModules.I18nManager.localeIdentifier;

I18n.fallbacks = true;

I18n.translations = {
  pt_BR,
};

const setLanguage = () => {
  if (Platform.OS === 'web') {
    I18n.defaultLocale = 'pt_BR';
    return;
  }

  const language = getLanguageByDevice() || I18n.currentLocale();
  const translateNormalize = normalizeTranslate[language];
  const haveLanguage = I18n.translations.hasOwnProperty(translateNormalize);

  if (haveLanguage) I18n.locale = translateNormalize;
  else I18n.defaultLocale = 'pt_BR';
};

setLanguage();

export const translate = (key: string): string => I18n.t(key);
