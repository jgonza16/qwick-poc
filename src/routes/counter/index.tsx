import { component$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  const count = useSignal(0);
  return (
    <>
      <h2>Dinamic component QWICK</h2>
      <br />
      <h3> Current count: {count.value}</h3>
      <br />
      <button
        disabled={count.value <= 0}
        class='my-link'
        onClick$={() => count.value--}
      >
        -1 ({count.value})
      </button>
      <button class='my-link' onClick$={() => count.value++}>
        +1 ({count.value})
      </button>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Dinamic-Component',
  meta: [
    {
      name: 'description',
      content: 'Show qwik Dinamic',
    },
  ],
};
