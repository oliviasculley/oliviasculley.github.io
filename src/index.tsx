/* @refresh reload */
import "./index.css";

import { HashRouter, Route } from "@solidjs/router";
import { lazy } from "solid-js";
import { render } from "solid-js/web";
import getPostContent from "./posts/[slug].data";
import Nav from "./components/nav";
import postData from "./posts/posts.json";
import projectData from "./projects/projects.json";

const About = lazy(() => import("./about"));
const NotFound = lazy(() => import("./notfound"));
const Post = lazy(() => import("./posts/post"));
const Posts = lazy(() => import("./posts"));
const Project = lazy(() => import("./projects/project"));
const Projects = lazy(() => import("./projects"));

const dispose = render(
  () => (
    <>
      <HashRouter root={Nav}>
        <Route path="/" />
        <Route path="/about" component={About} />
        <Route
          path="/posts/:slug"
          component={Post}
          matchFilters={{
            slug: (slug: string) =>
              postData.find(({ slug: postSlug }) => postSlug == slug),
          }}
          load={({ params }) => getPostContent(params?.slug)}
        />
        <Route path="/posts" component={Posts} />
        <Route
          path="/projects/:slug"
          component={Project}
          matchFilters={{
            slug: (slug: string) =>
              projectData.find(({ slug: projectSlug }) => projectSlug == slug),
          }}
        />
        <Route path="/projects" component={Projects} />
        <Route path="*404" component={NotFound} />
      </HashRouter>
    </>
  ),
  document.getElementById("root")
);

import.meta.hot?.dispose(dispose);
