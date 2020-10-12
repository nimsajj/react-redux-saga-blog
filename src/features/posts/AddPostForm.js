import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPostRequest } from "./redux/action";

export const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [picture, setPicture] = useState("");
  const [postStatus, setPostStatus] = useState("initial");

  const dispatch = useDispatch();

  const canSubmit =
    [title, content, picture].every(Boolean) && postStatus === "initial";

  const onChangeTitle = (e) => setTitle(e.target.value);
  const onChangeContent = (e) => setContent(e.target.value);
  const onChangePicture = (e) => setPicture(e.target.value);

  const onSubmitPost = (e) => {
    e.preventDefault();

    if (canSubmit) {
      try {
        setPostStatus("pending");
        dispatch(addPostRequest({ title, content, picture }));

        setTitle("");
        setContent("");
        setPicture("");
      } catch (error) {
        console.error(error);
      } finally {
        setPostStatus("initial");
      }
    }
  };

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
          <label htmlFor="picture">Picture</label>
          <input
            id="picture"
            type="text"
            value={picture}
            onChange={onChangePicture}
          />
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
