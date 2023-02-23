import React from "react";
import Badge from "../Badge/Badge";
import classes from "./CommentCard.module.css";
import testAvtar from "../../assets/images/avatars/image-amyrobson.webp";

const CommentCard = (props) => {
  return (
    <div className={classes.commentCard}>
      <div className={classes.commentCard__header}>
        <img
          src={testAvtar}
          alt="user-avatar"
          className={classes.commentCard__header__avatar}
        />
        <span className={classes.commentCard__header__userName}>
          {props.username}
          amyrobson
        </span>
        <span className={classes.commentCard__header__createdAt}>
          {props.createdAt}1 month ago
        </span>
      </div>
      <div className={classes.commentCard__comment}>
        {props.content} Impressive! Though it seems the drag feature could be
        improved. But overall it looks incredible. You've nailed the design and
        the responsiveness at various breakpoints works really well.
      </div>
      <div className={classes.commentCard__footer}>
        <Badge />
        <button className={classes.replyBtn}>Reply</button>
      </div>
    </div>
  );
};

export default CommentCard;
