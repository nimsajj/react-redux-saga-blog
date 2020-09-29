import React from "react";
import { useSelector } from "react-redux";
import { TimeAgo } from "./TimeAgo";
import { PostAuthor } from "./PostAuthor";
import { Link } from "react-router-dom";

export const SinglePostPage = ({ match }) => {
  const { id } = match.params;

  const post = useSelector((state) => state.posts.entities[id]);

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>s
      </section>
    );
  }

  const { title, content, date, user } = post;

  return (
    <section>
      <article>
        <h2>{title}</h2>
        <p>{content}</p>
        <div>
          <TimeAgo timestamp={date} />
          <PostAuthor userId={user} />
        </div>
        <Link to={`/posts/edit/${id}`}>Edit post</Link>&nbsp;
        <Link to="/">Back</Link>
      </article>
    </section>
  );
};
