import React, { useState } from "react";
import Badge from "../Badge/Badge";
import classes from "./CommentCard.module.css";
import { CreateComment } from "../../Modules/CreateComment";

const CommentCard = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [score, setScore] = useState(props.score);
  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  const onReplyHandler = () => {
    const replyContent = document.getElementById("replyContent");
    const reply = CreateComment(replyContent.value, props.currentUser);
    reply.replyingTo = props.user.username;
    props.onAddReply(reply);
    setIsOpen(!isOpen);
  };

  const onUpvote = () => {
    setScore(score + 1);
  };
  const onDownvote = () => {
    score > 0 && setScore(score - 1);
  };

  const onDelete = (e) => {
    props.onClick();
    const id = +e.target.dataset.id;
    props.onDeleteComment(id);
  };

  const isCurrentUser =
    props.currentUser.username === props.user.username ? true : false;
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
          <Badge score={score} onUpvote={onUpvote} onDownvote={onDownvote} />
          {isCurrentUser ? (
            <div className={classes.buttonContainer}>
              <button
                className={classes.deleteBtn}
                onClick={onDelete}
                data-id={props.id}
              >
                <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z"
                    fill="#ED6368"
                  />
                </svg>
                Delete
              </button>
              <button className={classes.btn}>
                <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z"
                    fill="#5357B6"
                  />
                </svg>
                Edit
              </button>
            </div>
          ) : (
            <button className={classes.btn} onClick={onToggle}>
              <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"
                  fill="#5357B6"
                />
              </svg>
              Reply
            </button>
          )}
        </div>
      </div>
      {isOpen && (
        <div className={classes.replyToComment}>
          <img
            className={classes.replyToComment__img}
            src={props.currentUser.image.webp}
            alt="user profile"
          />
          <textarea
            name="replyContent"
            id="replyContent"
            rows="5"
            defaultValue={`@${props.user.username} `}
          ></textarea>
          <button
            className={classes.replyToComment__button}
            onClick={onReplyHandler}
          >
            REPLY
          </button>
        </div>
      )}
    </>
  );
};

export default CommentCard;
