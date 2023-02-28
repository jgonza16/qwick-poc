import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <h2>Static component QWICK</h2>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Static-Component',
  meta: [
    {
      name: 'description',
      content: 'Show qwik static',
    },
  ],
};
