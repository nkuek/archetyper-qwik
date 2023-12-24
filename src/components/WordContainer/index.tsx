import { component$, useContext } from '@builder.io/qwik';
import { WordContext } from '~/providers/WordListProvider';
import { css } from '~/styled-system/css';

export default component$(() => {
  const { wordList } = useContext(WordContext);
  return (
    <div
      class={css({
        display: 'flex',
        flexDir: 'column',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
      })}
    >
      <div
        class={css({
          fontSize: 'clamp(1rem, 5vw + .25rem, 1.5rem)',
          height: '30vh',
          width: '75%',
          border: '1px solid',
          borderRadius: '2xl',
          paddingInline: '6',
          display: 'flex',
          flexDir: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          lineHeight: '2.25',
        })}
      >
        {wordList.join(' ')}
      </div>
    </div>
  );
});
