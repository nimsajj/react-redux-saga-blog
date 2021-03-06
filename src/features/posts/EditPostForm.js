import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { editPostRequest, fetchSinglePostRequest } from "./redux/action";
import FieldGroup from "../../ui/FieldGroup";

export const EditPostForm = ({ match, history }) => {
  const { postId } = match.params;

  const post = useSelector((state) => state.posts.entities[postId]);

  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [picture, setPicture] = useState("");
  const [postStatus, setPostStatus] = useState("initial");

  useEffect(() => {
    if (!post) {
      dispatch(fetchSinglePostRequest(postId));
    } else {
      setTitle(post.title);
      setContent(post.content);
      setPicture(post.picture);
    }
  }, [dispatch, post, postId]);

  const canSubmit = [title, content].every(Boolean) && postStatus === "initial";

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
        history.push("/posts");
      }
    }
  };

  return (
    <section>
      <h2>Edit post</h2>
      <form onSubmit={onSubmitPost}>
        <FieldGroup name="title" value={title} onChange={onChangeTitle} />
        <FieldGroup name="picture" value={picture} onChange={onChangePicture} />
        <FieldGroup name="content" value={content} onChange={onChangeContent} />
        <button type="submit" className="btn btn-primary">
          Edit
        </button>
      </form>
      <div className="mt-4">
        <Link to="/">Back to the list of posts</Link>
      </div>
    </section>
  );
};
