import React, { useState } from "react";
import classes from "./Thread.module.css";
import CommentCard from "../CommentCard/CommentCard";

const Thread = (props) => {
  const [comment, setComment] = useState(props.comment);

  const onAddReply = (reply) => {
    setComment((prev) => ({
      ...prev,
      replies: [...prev.replies, reply],
    }));
    console.log(comment);
  };

  const createCommentCard = (info) => {
    return (
      <CommentCard
        key={info.id}
        currentUser={props.currentUser}
        onClick={props.onClick}
        onAddReply={onAddReply}
        {...info}
      />
    );
  };
  return (
    <div className={classes.thread}>
      <CommentCard
        currentUser={props.currentUser}
        onClick={props.onClick}
        onAddReply={onAddReply}
        {...comment}
      />
      {comment.replies.length !== 0 && (
        <div className={classes.replyContainer}>
          {comment.replies.map(createCommentCard)}
        </div>
      )}
    </div>
  );
};

export default Thread;
