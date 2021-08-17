import { SolidMarkdown } from "solid-markdown";
import rehypeRaw from "rehype-raw";

export default function MarkdownViewer(props) {
  return (
    <SolidMarkdown
      class="markdown-viewer max-w-fit max-h-fit inline-flex flex-col space-y-4"
      children={props.content}
      components={{
        h1({ children }) {
          return <h1 class="text-3xl font-bold">{children}</h1>;
        },
        h2({ children, ...rest }) {
          return <h2 class="text-2xl font-bold">{children}</h2>;
        },
        h3({ children, ...rest }) {
          return <h3 class="text-xl font-bold">{children}</h3>;
        },
        img({ ...rest }) {
          return <img class="mx-auto" {...rest} />;
        },
        ul({ children, ...rest }) {
          return (
            <ul class="list-disc" {...rest}>
              {children}
            </ul>
          );
        },
        ol({ children, ...rest }) {
          return (
            <ul class="list-decimal" {...rest}>
              {children}
            </ul>
          );
        },
        li({ children, ...rest }) {
          return (
            <li class="ml-8" {...rest}>
              {children}
            </li>
          );
        },
        a({ children, ...rest }) {
          return (
            <a class="underline" {...rest}>
              {children}
            </a>
          );
        },
        code({ children, className, ...rest }) {
          return /language-(\w+)/.exec(className || "") ? (
            <code
              class="relative text-sm w-full whitespace-pre-wrap font-mono px-6 py-4 inline-flex bg-primary text-black"
              style="background: linear-gradient(115deg, rgba(215,216,255,1) 0%, rgba(164,185,255,1) 100%)"
              {...rest}
            >
              <div
                class="absolute inset-0 pointer-events-none"
                style="background-size: 50px; background-image: url(/noise.png); background-repeat: repeat"
              ></div>
              {children}
            </code>
          ) : (
            <code
              class="text-sm max-w-full whitespace-pre-wrap font-mono px-1 inline-flex rounded-sm bg-primary text-black"
              {...rest}
            >
              {children}
            </code>
          );
        },
        video({ children, ...rest }) {
          return (
            <video class="mx-auto" {...rest} controls>
              {children}
            </video>
          );
        },
      }}
      rehypePlugins={[rehypeRaw]}
    />
  );
}
