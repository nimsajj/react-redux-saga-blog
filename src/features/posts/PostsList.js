import React from "react";
import { useSelector } from "react-redux";
import { PostItem } from "./PostItem";

export const PostsList = () => {
  const posts = useSelector((state) => Object.values(state.posts.entities));
  const orderPosts = posts
    .slice()
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));

  const renderedOrderPost = () =>
    orderPosts.map((post) => <PostItem key={post.id} post={post} />);

  return (
    <section className="mt-5">
      <h2>Posts</h2>
      {renderedOrderPost()}
    </section>
  );
};
