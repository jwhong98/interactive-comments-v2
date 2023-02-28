import React from "react";
import classes from "./AddComment.module.css";
import { CreateComment } from "../../Modules/CreateComment";

const AddComment = (props) => {
  const onClickHandler = () => {
    const textArea = document.getElementById("newComment");
    if (textArea.value === "") {
      alert("Comment cannot be empty");
    } else {
      const newComment = CreateComment(textArea.value, props.currentUser);
      props.onAddComment(newComment);
      textArea.value = "";
    }
  };

  return (
    <div className={classes.addComment}>
      <img src={props.currentUser.image.webp} alt="user profile" />
      <textarea
        name="newComment"
        id="newComment"
        rows="3"
        placeholder="Add a comment..."
      ></textarea>
      <button onClick={onClickHandler}>SEND</button>
    </div>
  );
};

export default AddComment;
