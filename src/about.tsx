import { onMount } from "solid-js";
import gsap from "gsap";

const fadeIn = (element) => {
  onMount(() => {
    gsap.fromTo(
      element.children,
      { opacity: 0 },
      {
        opacity: 1,
        y: -15,
        duration: 0.5,
        stagger: 0.5 / element.children.length,
      }
    );
  });
};

export default function Me() {
  return (
    <section
      use:fadeIn
      class="mx-auto max-w-2xl py-8 text-gray-700 flex flex-col justify-start items-center text-center"
    >
      <h1 class="text-xl">
        I'm a <span class="font-semibold"> software developer</span> that
        thrives working with <span class="font-semibold">domain experts</span>{" "}
        on <span class="font-semibold">technical problems</span> to create{" "}
        <span class="font-semibold">high quality software solutions.</span>
      </h1>

      <p class="inline-block text-xl mt-4">
        I've worked on applications involving
        <span class="font-semibold"> robotics</span>,
        <span class="font-semibold"> 3D simulations</span>,
        <span class="font-semibold"> electronics</span>,
        <span class="font-semibold"> virtual</span> and
        <span class="font-semibold"> augmented reality</span>, and
        <span class="font-semibold"> fullstack web development</span>.
      </p>

      <p class="text-xl mt-4">
        Currently based in{" "}
        <span class="font-semibold">Greenville, South Carolina</span> at{" "}
        <a
          href="http://simplybinary.com"
          class="inline-flex space-x-1"
          target="_blank"
        >
          <span class="font-semibold no-underline hover:underline">
            Simply Binary
          </span>
          <span>🔗</span>
        </a>
        , and helping create{" "}
        <a
          href="https://www.goslipstream.app/"
          class="inline-flex space-x-1"
          target="_blank"
        >
          <span class="font-semibold no-underline hover:underline">
            Slipstream
          </span>
          <span>🔗</span>
        </a>
        .
      </p>

      <div class="mt-1 flex flex-wrap justify-center">
        <a
          class="inline-flex space-x-1 m-4"
          href="/resume/resume.pdf"
          target="_blank"
        >
          <span class="no-underline hover:underline">Resume</span>
          <span>🔗</span>
        </a>

        <a class="inline-flex space-x-1 m-4" href="/cv/cv.pdf" target="_blank">
          <span class="no-underline hover:underline">CV</span>
          <span>🔗</span>
        </a>

        <a
          class="inline-flex space-x-1 m-4"
          href="https://github.com/oliviasculley"
          target="_blank"
        >
          <span class="no-underline hover:underline">Github</span>
          <span>🔗</span>
        </a>

        <a
          class="inline-flex space-x-1 m-4"
          href="https://www.linkedin.com/in/oliviassculley/"
          target="_blank"
        >
          <span class="no-underline hover:underline">LinkedIn</span>
          <span>🔗</span>
        </a>
      </div>
    </section>
  );
}
