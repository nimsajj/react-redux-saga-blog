import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editPostRequest } from "./redux/action";

export const EditPostForm = ({ match }) => {
  const { postId } = match.params;

  const post = useSelector((state) => state.posts.entities[postId]);

  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const [picture, setPicture] = useState(post.picture);
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
        dispatch(editPostRequest({ postId, title, content, picture }));

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
      <h2>Edit post</h2>
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
          <label htmlFor="content">Content</label>
          <input
            id="content"
            type="text"
            value={content}
            onChange={onChangeContent}
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
        <button type="submit">Edit</button>
      </form>
    </section>
  );
};
