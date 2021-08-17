import { A } from "@solidjs/router";
import { createSignal, onMount, For } from "solid-js";
import gsap from "gsap";
import postData from "./posts.json";

const fadeIn = (element) => {
  onMount(() => {
    gsap.fromTo(
      element.children,
      { opacity: 0 },
      {
        opacity: 1,
        y: -16,
        duration: 0.5,
        stagger: 0.15,
      }
    );
  });
};

const fadeOnLoad = (element) => {
  onMount(() => {
    element.onload = () => gsap.fromTo(
      element,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2
      }
    );
  });
};

export default function Post() {
  const [posts] = createSignal(postData);

  return (
    <section
      use:fadeIn
      class="text-gray-700 flex flex-col justify-start items-stretch text-left space-y-4"
    >
      <For each={posts()}>
        {(post, i) => (
          <A
            href={post.slug}
            class="relative pt-4 pb-3 text-gray-700 px-4 flex flex-col justify-between items-start overflow-hidden bg-primary"
            style="background: linear-gradient(115deg, rgba(215,216,255,1) 0%, rgba(164,185,255,1) 100%)"
          >
            <Show when={post.imageSrc}>
              <img
                use:fadeOnLoad
                class="absolute h-full w-1/3 left-2/3 inset-0 pointer-events-none -z-10 object-cover grayscale opacity-0"
                style="mask-image: linear-gradient(115deg, rgba(0,0,0,0) 20%, rgba(0,0,0,0.7) 100%);"
                src={post.imageSrc}
              />
            </Show>

            <div
              class="absolute inset-0 pointer-events-none -z-10"
              style="background-size: 50px; background-image: url(/noise.png); background-repeat: repeat"
            ></div>

            <A
              href={post.slug}
              class="pb-4 text-3xl no-underline hover:underline mr-36"
            >
              {post.title}
            </A>

            <div class="flex flex-col text-left mr-36">
              <Show when={post.description}>
                <p>{post.description}</p>
              </Show>
            </div>
          </A>
        )}
      </For>
    </section>
  );
}
