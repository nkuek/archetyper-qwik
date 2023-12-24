import {
  Slot,
  component$,
  createContextId,
  useContextProvider,
  useStore,
} from '@builder.io/qwik';
import type { languageMap } from '~/utils/wordListGenerator';

export const SettingsContext = createContextId<AppSettings>('settings.context');

export type QuoteSettings = {
  type: 'quotes';
  length: 'short' | 'medium' | 'long';
};

export type WordSettings = {
  type: 'words' | 'timed';
  language: keyof typeof languageMap;
  specialChars: boolean;
  capitalChars: boolean;
  numbers: boolean;
  wordCount: number;
};

export type AppSettings = QuoteSettings | WordSettings;

export const defaultSettings: AppSettings = {
  capitalChars: false,
  specialChars: false,
  numbers: false,
  type: 'words',
  language: 'english',
  wordCount: 25,
};

export default component$(() => {
  const settings = useStore<AppSettings>(defaultSettings);
  useContextProvider(SettingsContext, settings);

  return <Slot />;
});
