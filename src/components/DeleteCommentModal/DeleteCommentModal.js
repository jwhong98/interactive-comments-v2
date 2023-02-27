import React from "react";
import ReactDOM from "react-dom";
import classes from "./DeleteCommentModal.module.css";

const Drop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
};

const DeleteCommentModal = (props) => {
  const portalElement = document.getElementById("overlay");
  const deleteHandler = () => {};
  return (
    <>
      {ReactDOM.createPortal(
        <>
          <Drop onClick={props.onClick} />
          <div className={classes.deleteComment}>
            <p className={classes.deleteComment__head}>Delete comment</p>
            <p className={classes.deleteComment__content}>
              Are you sure you want to delete this comment? This will remove the
              comment and can't be undone.
            </p>
            <div className={classes.deleteComment__buttons}>
              <button
                className={classes.deleteComment__buttons__button}
                onClick={props.onClick}
              >
                NO, CANCEL
              </button>
              <button
                className={`${classes.deleteComment__buttons__button} ${classes.deleteComment__buttons__button__delete}`}
              >
                YES, DELETE
              </button>
            </div>
          </div>
        </>,
        portalElement
      )}
    </>
  );
};

export default DeleteCommentModal;
