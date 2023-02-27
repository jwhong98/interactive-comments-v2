import React from "react";
import classes from "./Main.module.css";
import data from "../../data.json";
import CommentCard from "../CommentCard/CommentCard";
import Thread from "../Thread/Thread";

const Main = () => {
  const createCommentCard = (info) => {
    return <CommentCard key={info.id} {...info} />;
  };
  const createThread = (info) => {
    return <Thread comment={info} />;
  };

  // return <main>{data.comments.map(createCommentCard)}</main>;
  return <main>{data.comments.map(createThread)}</main>;
};

export default Main;
