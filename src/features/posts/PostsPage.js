import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddPostForm } from "./AddPostForm";
import { PostsList } from "./PostsList";
import { REQUEST_STATUS } from "../../common/status";
import { fetchUserRequest } from "../users/redux/action";
import { fetchPostsRequest } from "./redux/action";

export const PostsPage = () => {
  const usersStatus = useSelector((state) => state.users.status);
  const postsStatus = useSelector((state) => state.posts.status);
  const postsError = useSelector((state) => state.posts.error);

  const isLoading =
    postsStatus !== REQUEST_STATUS.succeeded ||
    usersStatus !== REQUEST_STATUS.succeeded;

  const dispatch = useDispatch();

  useEffect(() => {
    if (usersStatus === REQUEST_STATUS.initial) {
      dispatch(fetchUserRequest());
    }
  }, [dispatch, usersStatus]);

  useEffect(() => {
    if (postsStatus === REQUEST_STATUS.initial) {
      dispatch(fetchPostsRequest());
    }
  }, [dispatch, postsStatus]);

  if (postsError) {
    return <div>{postsError}</div>;
  }

  if (isLoading) {
    return "Chargement ...";
  }

  return (
    <>
      <AddPostForm />
      <PostsList />
    </>
  );
};
