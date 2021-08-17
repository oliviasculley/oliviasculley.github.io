import { createSignal, onMount, For } from "solid-js";
import { useParams, A } from "@solidjs/router";
import gsap from "gsap";
import MarkdownViewer from "../components/markdown-viewer";
import projectData from "./projects.json";

const fadeIn = (element) => {
  onMount(() => {
    gsap.fromTo(
      element.children,
      { opacity: 0 },
      {
        opacity: 1,
        y: -16,
        duration: 0.5,
        stagger: 0.5 / element.children.length,
      }
    );
  });
};

export default function Project() {
  const params = useParams();
  const [project] = createSignal(
    projectData.find((project) => project.slug == params?.slug)
  );

  return (
    <section
      use:fadeIn
      class="mx-auto max-w-2xl py-8 text-gray-700 flex flex-col justify-start items-center text-center space-y-8"
    >
      <div class="flex flex-col space-y-4">
        <h1 class="text-2xl font-bold">{project().title}</h1>
        <Show when={project().link}>
          <a
            class="no-underline hover:underline"
            href={project().link}
            target="_blank"
          >
            Project Site 🔗
          </a>
        </Show>
        <Show when={project().startYear}>
          <p>
            {project().startYear}
            <Show when={project().endYear == "Current"}>+</Show>{" "}
            <Show when={project().endYear && project().endYear != "Current"}>
              - {project().endYear}
            </Show>
          </p>
        </Show>
      </div>

      <Show when={project().imageSrc}>
        <img class="pointer-events-none" src={project().imageSrc} />
      </Show>

      <MarkdownViewer content={project().content} />

      <A
        href="/projects"
        class="text-lg font-bold no-underline hover:underline"
      >
        Back
      </A>
    </section>
  );
}
