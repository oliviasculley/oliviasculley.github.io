import postData from "./posts.json";

export default async function getPostContent(slug) {
  const { contentSrc } = postData.find((post) => post.slug == slug);
  return (await fetch(contentSrc)).text();
}
