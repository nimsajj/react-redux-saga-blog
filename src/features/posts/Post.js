import React from "react";
import { useSelector } from "react-redux";
import { TimeAgo } from "./TimeAgo";
import { PostAuthor } from "./PostAuthor";

export const Post = ({ id }) => {
  const post = useSelector((state) => state.posts.entities[id]);

  return (
    <article>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <div>
        <PostAuthor userId={post.user} />
        <TimeAgo timestamp={post.date} />
      </div>
    </article>
  );
};
