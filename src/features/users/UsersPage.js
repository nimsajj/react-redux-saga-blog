import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUserRequest } from "./redux/action";
import { REQUEST_STATUS } from "../../common/status";

export const UsersPage = () => {
  const users = useSelector((state) => state.users.entities);
  const userStatus = useSelector((state) => state.users.status);

  const dispatch = useDispatch();

  useEffect(() => {
    if (userStatus === REQUEST_STATUS.initial) {
      dispatch(fetchUserRequest());
    }
  }, [dispatch, userStatus]);

  if (userStatus === REQUEST_STATUS.loading) {
    return "Chargement ...";
  }

  const renderedUsers = Object.entries(users).map(([userId, user]) => (
    <li key={userId}>
      <Link to={`/users/${user.id}`}>{user.name}</Link>
    </li>
  ));

  return (
    <section>
      <h2>Users</h2>
      <ul>{renderedUsers}</ul>
    </section>
  );
};
