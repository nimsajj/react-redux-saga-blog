import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchUserLoginRequest } from "./redux/action";
import FieldGroup from "../../ui/FieldGroup";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const status = useSelector((state) => state.currentUser.status);
  const error = useSelector((state) => state.currentUser.error);

  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  const canDispatch =
    ["initial", "creates", "error"].includes(status) &&
    [email, password].every(Boolean);

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
    <section>
      <h2>Connect to Blog</h2>
      <form onSubmit={onLogin} className="mt-4">
        <FieldGroup
          type="email"
          name="email"
          value={email}
          onChange={handleChangeEmail}
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
      {error && <div>{error}</div>}
    </section>
  );
};
