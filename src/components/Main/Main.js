import React from "react";
import classes from "./Main.module.css";
import data from "../../data.json";
import Thread from "../Thread/Thread";
import AddComment from "../AddComment/AddComment";

const Main = (props) => {
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
  return (
    <main>
      {data.comments.map(createThread)}
      <AddComment currentUser={currentUser} />
    </main>
  );
};

export default Main;
