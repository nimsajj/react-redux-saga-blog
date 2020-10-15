import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userLogout } from "./redux/action";

export const Logout = ({ history }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userLogout());
    history.push("/");
  }, [history, dispatch]);

  return null;
};
