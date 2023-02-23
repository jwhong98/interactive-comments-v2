import React from "react";
import classes from "./Main.module.css";
import data from "../../data.json";
import CommentCard from "../CommentCard/CommentCard";

const Main = () => {
  const createCommentCard = (info) => {
    return <CommentCard key={info.id} {...info} />;
  };

  return <main>{data.comments.map(createCommentCard)}</main>;
};

export default Main;
