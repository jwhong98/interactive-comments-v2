import React from "react";
import classes from "./Thread.module.css";
import CommentCard from "../CommentCard/CommentCard";

const Thread = (props) => {
  const createCommentCard = (info) => {
    return (
      <CommentCard key={info.id} currentUser={props.currentUser} {...info} />
    );
  };
  return (
    <div className={classes.thread}>
      <CommentCard currentUser={props.currentUser} {...props.comment} />
      {props.comment.replies.length !== 0 && (
        <div className={classes.replyContainer}>
          {props.comment.replies.map(createCommentCard)}
        </div>
      )}
    </div>
  );
};

export default Thread;
