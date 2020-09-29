import React from "react";
import { useSelector } from "react-redux";

export const PostAuthor = ({ userId }) => {
  const author = useSelector((state) =>
    state.users ? state.users.entities[userId] : null
  );

  return <span>{author ? author.name : "Unknown author"}</span>;
};
