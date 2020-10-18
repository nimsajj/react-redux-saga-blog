import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { postUserRegisterRequest } from "./redux/action";
import FieldGroup from "../../ui/FieldGroup";

export const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

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
    <section>
      <h2>Register on the Blog</h2>
      <form onSubmit={onRegister} className="mt-4">
        <FieldGroup name="name" value={name} onChange={handleChangeName} />
        <FieldGroup
          type="email"
          name="email"
          value={email}
          onChange={handleChangeEmail}
        >
          @
        </FieldGroup>
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
          Register
        </button>
      </form>
    </section>
  );
};
