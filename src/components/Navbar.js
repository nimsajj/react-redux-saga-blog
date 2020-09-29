import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Posts</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/users">Users</Link>
      </li>
    </ul>
  </nav>
);
