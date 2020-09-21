import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchUserLoginRequest } from "./redux/action";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  let history = useHistory();
  const status = useSelector((state) => state.currentUser.status);

  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  const canDispatch =
    status === "initial" && Boolean(email) && Boolean(password);

  useEffect(() => {
    if (status === "succeeded") {
      history.push("/");
    }
  }, [status, history]);

  const onLogin = (e) => {
    e.preventDefault();

    if (canDispatch) {
      dispatch(fetchUserLoginRequest({ email, password }));
      setEmail("");
      setPassword("");
    }
  };

  return (
    <form onSubmit={onLogin}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={handleChangeEmail}
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
