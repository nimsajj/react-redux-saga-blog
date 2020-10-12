import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { TimeAgo } from "./TimeAgo";
import { PostAuthor } from "./PostAuthor";

export const PostItem = ({ id }) => {
  const post = useSelector((state) => state.posts.entities[id]);

  return (
    <article>
      <Link to={`/posts/${post.id}`}>
        <h3>{post.title}</h3>
      </Link>
      <p>{post.content}</p>
      <div>
        <PostAuthor userId={post.author} />
        <TimeAgo timestamp={post.date} />
      </div>
      <div>
        <Link to={`/posts/edit/${post.id}`}>Edit this post</Link>
      </div>
    </article>
  );
};
