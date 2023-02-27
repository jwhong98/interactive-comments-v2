import React from "react";
import Badge from "../Badge/Badge";
import classes from "./CommentCard.module.css";

const CommentCard = (props) => {
  const isCurrentUser =
    props.currentUser.username === props.user.username ? true : false;
  const onClickHandler = () => {
    props.onClick();
  };
  return (
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
        {isCurrentUser && (
          <span className={classes.commentCard__header__currentUserBadge}>
            you
          </span>
        )}
        <span className={classes.commentCard__header__createdAt}>
          {props.createdAt}
        </span>
      </div>
      <div className={classes.commentCard__comment}>
        {props.replyingTo && (
          <span className={classes.replyTo}>@{props.replyingTo} </span>
        )}
        {props.content}
      </div>
      <div className={classes.commentCard__footer}>
        <Badge score={props.score} />
        <div className={classes.buttonContainer}>
          {isCurrentUser && (
            <button className={classes.deleteBtn} onClick={props.onClick}>
              <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z"
                  fill="#ED6368"
                />
              </svg>
              Delete
            </button>
          )}
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
    </div>
  );
};

export default CommentCard;
