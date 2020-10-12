import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { postUserRegisterRequest } from "./redux/action";

export const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");

  const dispatch = useDispatch();
  let history = useHistory();

  const status = useSelector((state) => state.currentUser.status);

  const handleChangeName = (e) => setName(e.target.value);
  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);
  const handleChangeUsername = (e) => setUsername(e.target.value);

  const canDispatch =
    status === "initial" ||
    (status === "error" && [name, email, password, username].every(Boolean));

  useEffect(() => {
    if (status === "creates") {
      history.push("/login");
    }
  }, [status, history]);

  const onRegister = (e) => {
    e.preventDefault();

    if (canDispatch) {
      dispatch(postUserRegisterRequest({ name, email, password, username }));
      setName("");
      setEmail("");
      setPassword("");
      setUsername("");
    }
  };

  return (
    <form onSubmit={onRegister}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="tewt"
          name="name"
          value={name}
          onChange={handleChangeName}
        />
      </div>
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
      <button type="submit">Register</button>
    </form>
  );
};
