import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div>
      <Link class='my-link' href='/static-component/'>
        Static Component
      </Link>
      <Link class='my-link' href='/counter/'>
        Dinamic Component
      </Link>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'POC - Qwik',
  meta: [
    {
      name: 'description',
      content: 'Poc show qwik pacacity',
    },
  ],
};
