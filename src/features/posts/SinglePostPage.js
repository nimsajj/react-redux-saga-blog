import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TimeAgo } from "./TimeAgo";
import { PostAuthor } from "./PostAuthor";
import { Link } from "react-router-dom";
import { fetchSinglePostRequest } from "./redux/action";

export const SinglePostPage = ({ match }) => {
  const { id } = match.params;

  const dispatch = useDispatch();
  const post = useSelector((state) => state.posts.entities[id]);

  useEffect(() => {
    if (!post) {
      dispatch(fetchSinglePostRequest(id));
    }
  }, [dispatch, post, id]);

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>s
      </section>
    );
  }

  const { title, content, date, author } = post;

  return (
    <section>
      <article>
        <h2>{title}</h2>
        <p>{content}</p>
        <div>
          <TimeAgo timestamp={date} />
          <PostAuthor userId={author} />
        </div>
        <Link to={`/posts/edit/${id}`}>Edit post</Link>&nbsp;
        <Link to="/">Back</Link>
      </article>
    </section>
  );
};
