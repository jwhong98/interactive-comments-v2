import React from "react";
import classes from "./Main.module.css";
import data from "../../data.json";
import Thread from "../Thread/Thread";

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
  return <main>{data.comments.map(createThread)}</main>;
};

export default Main;
