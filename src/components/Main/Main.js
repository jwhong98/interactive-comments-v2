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
        comment={info}
      />
    );
  };

  const onAddComment = (comment) => {
    setComments([...comments, comment]);
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
