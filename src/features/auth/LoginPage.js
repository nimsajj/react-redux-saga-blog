import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchUserLoginRequest } from "./redux/action";

export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  let history = useHistory();
  const status = useSelector((state) => state.currentUser.status);

  const handleChangeUsername = (e) => setUsername(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  const canDispatch =
    (status === "initial" || status === "creates") &&
    Boolean(username) &&
    Boolean(password);

  useEffect(() => {
    if (status === "succeeded") {
      history.push("/");
    }
  }, [status, history]);

  const onLogin = (e) => {
    e.preventDefault();

    if (canDispatch) {
      dispatch(fetchUserLoginRequest({ username, password }));
      setUsername("");
      setPassword("");
    }
  };

  return (
    <form onSubmit={onLogin}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          name="username"
          value={username}
          onChange={handleChangeUsername}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={handleChangePassword}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};
