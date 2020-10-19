import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPostRequest } from "./redux/action";
import FieldGroup from "../../ui/FieldGroup";

export const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [picture, setPicture] = useState("");
  const [postStatus, setPostStatus] = useState("initial");

  const dispatch = useDispatch();

  const canSubmit = [title, content].every(Boolean) && postStatus === "initial";

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
      <form onSubmit={onSubmitPost} className="mt-3">
        <FieldGroup name="title" value={title} onChange={onChangeTitle} />
        <FieldGroup name="picture" value={picture} onChange={onChangePicture} />
        <FieldGroup name="content" value={content} onChange={onChangeContent} />
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </section>
  );
};
