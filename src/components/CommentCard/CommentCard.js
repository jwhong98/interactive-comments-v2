import React from "react";
import Badge from "../Badge/Badge";
import classes from "./CommentCard.module.css";

const CommentCard = (props) => {
  return (
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
          <button className={classes.replyBtn}>Reply</button>
        </div>
      </div>
    </>
  );
};

export default CommentCard;
