import { A } from "@solidjs/router";
import { createSignal, onMount, For } from "solid-js";
import gsap from "gsap";
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
        stagger: 1.5 / element.children.length,
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

export default function Projects() {
  const [projects] = createSignal(projectData);

  return (
    <section
      use:fadeIn
      class="text-gray-700 flex flex-col justify-start items-stretch text-left space-y-4"
    >
      <For each={projects()}>
        {(project, i) => (
          <A
            href={project.slug}
            class="relative pt-4 pb-3 text-gray-700 px-4 flex flex-col justify-between items-start overflow-hidden bg-primary"
            style="background: linear-gradient(115deg, rgba(215,216,255,1) 0%, rgba(164,185,255,1) 100%)"
          >
            <Show when={project.imageSrc}>
              <img
                use:fadeOnLoad
                class="absolute h-full w-1/3 left-2/3 inset-0 pointer-events-none -z-10 object-cover grayscale opacity-0"
                style="mask-image: linear-gradient(115deg, rgba(0,0,0,0) 20%, rgba(0,0,0,0.7) 100%);"
                src={project.imageSrc}
              />
            </Show>

            <div
              class="absolute inset-0 pointer-events-none -z-10"
              style="background-size: 50px; background-image: url(/noise.png); background-repeat: repeat"
            ></div>

            <A
              href={project.slug}
              class="pb-4 text-3xl no-underline hover:underline mr-36"
            >
              {project.title}
            </A>

            <Show when={project.startYear}>
              <p class="mr-36">
                {project.startYear}
                <Show when={project.endYear == "Current"}>+</Show>{" "}
                <Show when={project.endYear && project.endYear != "Current"}>
                  - {project.endYear}
                </Show>
              </p>
            </Show>
          </A>
        )}
      </For>
    </section>
  );
}
