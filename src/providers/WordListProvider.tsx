import {
  Slot,
  component$,
  createContextId,
  useContext,
  useContextProvider,
} from '@builder.io/qwik';
import { SettingsContext } from '~/providers/SettingsProvider';
import { randomizeWords } from '~/utils/wordListGenerator';

type WordListState = {
  wordList: string[];
};
export const WordContext = createContextId<WordListState>('word.context');

export default component$(() => {
  const settings = useContext(SettingsContext);
  const wordList = randomizeWords(settings);
  useContextProvider(WordContext, { wordList });

  return <Slot />;
});
