import { PostsPage } from "../features/posts/PostsPage";
import { SinglePostPage } from "../features/posts/SinglePostPage";
import { EditPostForm } from "../features/posts/EditPostForm";
import { LoginPage } from "../features/auth/LoginPage";
import { Logout } from "../features/auth/Lougout";
import { RegisterPage } from "../features/auth/RegisterPage";
import { UserPage } from "../features/users/UserPage";

export const loginRoute = {
  path: "/login",
  component: LoginPage,
};

const routes = [
  {
    path: "/posts",
    component: PostsPage,
  },
  {
    path: "/posts/:id",
    component: SinglePostPage,
  },
  {
    path: "/posts/edit/:postId",
    component: EditPostForm,
  },
  loginRoute,
  {
    path: "/logout",
    component: Logout,
  },
  {
    path: "/register",
    component: RegisterPage,
  },
  {
    path: "/users",
    component: UserPage,
  },
];

export default routes;
