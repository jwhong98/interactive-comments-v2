import React, { useState } from "react";
import classes from "./Main.module.css";
import data from "../../data.json";
import Thread from "../Thread/Thread";
import AddComment from "../AddComment/AddComment";

const Main = (props) => {
  const [comments, setComments] = useState(data.comments);
  const currentUser = data.currentUser;
  const createThread = (info) => {
    return (
      <Thread
        currentUser={currentUser}
        onClick={props.onClick}
        onDeleteComment={onDeleteComment}
        comment={info}
      />
    );
  };

  const onAddComment = (comment) => {
    setComments([...comments, comment]);
    console.log(comments);
  };

  function findNestedObj(entireObj, keyToFind, valToFind) {
    let foundObj;
    JSON.stringify(entireObj, (_, nestedValue) => {
      if (nestedValue && nestedValue[keyToFind] === valToFind) {
        foundObj = nestedValue;
      }
      return nestedValue;
    });
    return foundObj;
  }

  const onDeleteComment = (val) => {
    // let found = findNestedObj(comments, "id", val);
    console.log(val);
    setComments(comments.filter((el) => el.id !== val));
    console.log(comments);
  };

  return (
    <main>
      {comments.map(createThread)}
      <AddComment currentUser={currentUser} onAddComment={onAddComment} />
    </main>
  );
};

export default Main;
