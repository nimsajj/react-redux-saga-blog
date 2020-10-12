import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const UserPage = ({ match }) => {
  const { userId } = match.params;

  const user = useSelector((state) => state.users.entities[userId]);

  const posts = useSelector(
    (state) =>
      state.posts.entitie &&
      Object.values(state.posts.entities).filter((post) => post.user === userId)
  );

  if (!user) {
    return (
      <section>
        <h2>User not found!</h2>
      </section>
    );
  }

  const renderedPosts =
    posts &&
    posts.map((post) => (
      <li key={post.id}>
        <Link to={`/posts/${post.id}`}>{post.title}</Link>
      </li>
    ));

  return (
    <section>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <ul>{renderedPosts}</ul>
    </section>
  );
};
