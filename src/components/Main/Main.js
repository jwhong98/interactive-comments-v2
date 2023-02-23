import React from "react";
import classes from "./Main.module.css";
import { data } from "../../data.json";
import CommentCard from "../CommentCard/CommentCard";

const Main = () => {
  return (
    <main>
      <CommentCard />
    </main>
  );
};

export default Main;
