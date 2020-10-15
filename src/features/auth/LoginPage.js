import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchUserLoginRequest } from "./redux/action";
import FieldGroup from "../../ui/FieldGroup";

export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

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
    <section>
      <h2>Connect to Blog</h2>
      <form onSubmit={onLogin} className="mt-4">
        <FieldGroup
          name="username"
          value={username}
          onChange={handleChangeUsername}
        />
        <FieldGroup
          type="password"
          name="password"
          value={password}
          onChange={handleChangePassword}
        />
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </section>
  );
};
