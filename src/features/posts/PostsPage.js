import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsRequest } from "./redux/action";
import { Post } from "./Post";

export const PostsPage = () => {
  const dispatch = useDispatch();

  const status = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  const postsIds = useSelector((state) => state.posts.ids);

  useEffect(() => {
    if (status === "initial") {
      dispatch(fetchPostsRequest());
    }
  }, [status, dispatch]);

  let content;

  if (status === "loading") {
    content = <p>Chargement ...</p>;
  } else if (status === "error") {
    content = <div>{error}</div>;
  } else if (status === "succeeded") {
    content = postsIds.map((postId) => <Post key={postId} id={postId} />);
  }

  return (
    <section>
      <h1>Posts</h1>
      {content}
    </section>
  );
};
