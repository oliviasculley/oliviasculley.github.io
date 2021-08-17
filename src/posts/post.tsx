import { createEffect, createSignal, onMount } from "solid-js";
import { useParams, A, createAsync } from "@solidjs/router";
import getPostContent from "./[slug].data";
import gsap from "gsap";
import MarkdownViewer from "../components/markdown-viewer";
import postData from "./posts.json";

const fadeIn = (element) => {
  onMount(() => {
    gsap.fromTo(
      element.children,
      { opacity: 0 },
      {
        opacity: 1,
        y: -15,
        duration: 0.5,
        stagger: 0.15,
      }
    );
  });
};

export default function Post() {
  const params = useParams();
  const [post] = createSignal(
    postData.find((post) => post.slug === params?.slug)
  );
  const postContent = createAsync(() => getPostContent(params?.slug));

  createEffect(() => {
    postContent();

    const selector = "#back-button,.markdown-viewer > *";
    if (document.querySelector(selector)) {
      const tl = gsap.timeline();

      tl.to(selector, { opacity: 0 });

      tl.fromTo(
        selector,
        { opacity: 0 },
        {
          duration: 0.35,
          opacity: 1,
          stagger: 0.075,
          y: -16,
        }
      );
    }
  });

  return (
    <section
      use:fadeIn
      class="mx-auto max-w-2xl py-8 text-gray-700 flex flex-col justify-start items-start text-left"
    >
      <h1 class="mb-0.5 text-3xl font-bold opacity-0">{post().title}</h1>
      <h3 class="mb-8 text-md opacity-0">
        Last Updated: {new Date(post().lastUpdated).toLocaleDateString()}
      </h3>

      <MarkdownViewer content={postContent()} />

      <A
        id="back-button"
        href="/posts"
        class="fade-in mt-6 opacity-0 self-end text-lg font-bold no-underline hover:underline"
      >
        Back
      </A>
    </section>
  );
}
