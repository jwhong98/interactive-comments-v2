import React from "react";
import Badge from "../Badge/Badge";
import ReplyCard from "../ReplyCard/ReplyCard";
import classes from "./CommentCard.module.css";

const CommentCard = (props) => {
  const createReplyCard = (info) => {
    return (
      <ReplyCard key={info.id} replyingTo={props.user.username} {...info} />
    );
  };
  return (
    // <div className={classes.thread}>
    <>
      <div className={classes.commentCard}>
        <div className={classes.commentCard__header}>
          <img
            src={props.user.image.webp}
            alt="user-avatar"
            className={classes.commentCard__header__avatar}
          />
          <span className={classes.commentCard__header__userName}>
            {props.user.username}
          </span>
          <span className={classes.commentCard__header__createdAt}>
            {props.createdAt}
          </span>
        </div>
        <div className={classes.commentCard__comment}>{props.content}</div>
        <div className={classes.commentCard__footer}>
          <Badge score={props.score} />
          <button className={classes.replyBtn}>
            <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"
                fill="#5357B6"
              />
            </svg>
            Reply
          </button>
        </div>
      </div>
      {props.replies.length !== 0 && (
        <div className={classes.replyContainer}>
          {props.replies.map(createReplyCard)}
        </div>
      )}
    </>
    // </div>
  );
};

export default CommentCard;
