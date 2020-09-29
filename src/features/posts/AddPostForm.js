import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPostRequest } from "./redux/action";

export const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const [postStatus, setPostStatus] = useState("initial");

  const users = useSelector((state) => state.users.entities);

  const dispatch = useDispatch();

  const canSubmit =
    Boolean(title) &&
    Boolean(content) &&
    Boolean(userId) &&
    postStatus === "initial";

  const onChangeTitle = (e) => setTitle(e.target.value);
  const onChangeContent = (e) => setContent(e.target.value);
  const onChangeUser = (e) => setUserId(e.target.value);

  const onSubmitPost = (e) => {
    e.preventDefault();

    if (canSubmit) {
      try {
        setPostStatus("pending");
        dispatch(addPostRequest({ title, content, userId }));

        setTitle("");
        setContent("");
        setUserId("");
      } catch (error) {
        console.error(error);
      } finally {
        setPostStatus("initial");
      }
    }
  };

  const usersOptions = Object.values(users).map((user) => (
    <option key={user.id} value={user.id}>
      {user.name} toto
    </option>
  ));

  return (
    <section>
      <h2>Add new post</h2>
      <form onSubmit={onSubmitPost}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={onChangeTitle}
          />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <select id="author" value={userId} onChange={onChangeUser}>
            <option value=""></option>
            {usersOptions}
          </select>
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <input
            id="content"
            type="text"
            value={content}
            onChange={onChangeContent}
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </section>
  );
};
