import { A } from "@solidjs/router";

export default function NotFound() {
  return (
    <section class="text-gray-600 flex flex-col justify-start items-center">
      <h1 class="text-4xl font-bold">404</h1>
      <h3 class="mt-1 text-xl">Not Found 😔</h3>

      <A
        class="mt-6 no-underline hover:underline"
        activeClass="underline"
        href="/"
      >
        Home
      </A>
    </section>
  );
}
