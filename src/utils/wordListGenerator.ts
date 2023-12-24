import type { AppSettings } from '~/providers/SettingsProvider';
import english from '../languages/english.json';

export const languageMap = {
  english,
};

export function randomizeWords(settings: AppSettings) {
  if (settings.type === 'quotes') {
    return;
  }
  const { wordCount, language } = settings;
  const words = languageMap[language];
  const randomWords = [];
  for (let i = 0; i < wordCount; i++) {
    const randomIndex = Math.floor(Math.random() * words.length);
    randomWords.push(words[randomIndex]);
  }
  return randomWords;
}
