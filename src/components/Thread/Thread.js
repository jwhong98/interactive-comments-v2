import React from "react";
import classes from "./Thread.module.css";
import CommentCard from "../CommentCard/CommentCard";

const Thread = (props) => {
  const createCommentCard = (info) => {
    return <CommentCard key={info.id} {...info} />;
  };
  return (
    <div className={classes.thread}>
      <CommentCard {...props.comment} />
      {props.comment.replies.length !== 0 && (
        <div className={classes.replyContainer}>
          {props.comment.replies.map(createCommentCard)}
        </div>
      )}
    </div>
  );
};

export default Thread;
