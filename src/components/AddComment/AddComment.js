import React from "react";
import classes from "./AddComment.module.css";

const AddComment = (props) => {
  return (
    <div className={classes.addComment}>
      <img src={props.currentUser.image.webp} alt="user profile" />
      <textarea
        name=""
        id=""
        rows="4"
        placeholder="Add a comment..."
      ></textarea>
      <button>SEND</button>
    </div>
  );
};

export default AddComment;
