import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import WordContainer from '~/components/WordContainer';
import { css } from '~/styled-system/css';
import SettingsProvider from '~/providers/SettingsProvider';
import WordListProvider from '~/providers/WordListProvider';

export default component$(() => {
  return (
    <div>
      <h1
        class={css({
          textAlign: 'center',
          position: 'fixed',
          width: 'full',
          fontSize: 'clamp(2rem, 5vw + 0.5rem, 3rem)',
        })}
      >
        archetyper
      </h1>
      <SettingsProvider>
        <WordListProvider>
          <WordContainer />
        </WordListProvider>
      </SettingsProvider>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Archetyper',
  meta: [
    {
      name: 'description',
      content: 'Elevate your typing',
    },
  ],
};
