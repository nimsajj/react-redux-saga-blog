import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import { LoginPage } from "../features/auth/LoginPage";
import { RegisterPage } from "../features/auth/RegisterPage";
import { PostsPage } from "../features/posts/PostsPage";
import { UsersPage } from "../features/users/UsersPage";
import { UserPage } from "../features/users/UserPage";
import { SinglePostPage } from "../features/posts/SinglePostPage";
import { EditPostForm } from "../features/posts/EditPostForm";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={PostsPage} />
          <Route exact path="/posts/:id" component={SinglePostPage} />
          <Route exat path="/posts/edit/:postId" component={EditPostForm} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/users" component={UsersPage} />
          <Route exact path="/users/:userId" component={UserPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
