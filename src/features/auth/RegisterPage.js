import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { postUserRegisterRequest } from "./redux/action";

export const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const dispatch = useDispatch();
  let history = useHistory();

  const status = useSelector((state) => state.currentUser.status);

  const handleChangeName = (e) => setName(e.target.value);
  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  const canDispatch =
    status === "initial" &&
    Boolean(name) &&
    Boolean(email) &&
    Boolean(password);

  useEffect(() => {
    if (status === "creates") {
      history.push("/login");
    }
  }, [status, history]);

  const onRegister = (e) => {
    e.preventDefault();

    if (canDispatch) {
      dispatch(postUserRegisterRequest({ name, email, password }));
      setName("");
      setEmail("");
      setPassword("");
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
