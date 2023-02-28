import { component$, Slot } from '@builder.io/qwik';
import { loader$ } from '@builder.io/qwik-city';

export const useServerTimeLoader = loader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  const serverTime = useServerTimeLoader();
  return (
    <>
      <main>
        <section>
          <Slot />
        </section>
      </main>
      <footer>
        <a href='/'>
          NEWSFEED comunity ♡<div>{serverTime.value.date}</div>
        </a>
      </footer>
    </>
  );
});
