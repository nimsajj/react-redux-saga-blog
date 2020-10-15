import React from "react";
import { useSelector } from "react-redux";
import { PostItem } from "./PostItem";

export const PostsList = () => {
  const status = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  const postsIds = useSelector((state) => state.posts.ids);

  let content;

  if (status === "loading") {
    content = <p>Chargement ...</p>;
  } else if (status === "error") {
    content = <div>{error}</div>;
  } else if (status === "succeeded") {
    content = postsIds.map((postId) => <PostItem key={postId} id={postId} />);
  }

  return (
    <section className="mt-5">
      <h2>Posts</h2>
      {content}
    </section>
  );
};
