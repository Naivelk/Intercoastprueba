
export type Language = 'es' | 'en';

export type TranslationValue = string | string[] | TranslationKeys;

export interface TranslationKeys {
  [key: string]: TranslationValue | TranslationKeys;
}
