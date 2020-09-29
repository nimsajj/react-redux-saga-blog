import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddPostForm } from "./AddPostForm";
import { PostsList } from "./PostsList";
import { REQUEST_STATUS } from "../../common/status";
import { fetchUserRequest } from "../users/redux/action";

export const PostsPage = () => {
  const usersStatus = useSelector((state) => state.users.status);

  const dispatch = useDispatch();

  useEffect(() => {
    if (usersStatus === REQUEST_STATUS.initial) {
      dispatch(fetchUserRequest());
    }
  }, [dispatch, usersStatus]);

  if (usersStatus !== REQUEST_STATUS.succeeded) {
    return "Chargement ...";
  }

  return (
    <>
      <AddPostForm />
      <PostsList />
    </>
  );
};
