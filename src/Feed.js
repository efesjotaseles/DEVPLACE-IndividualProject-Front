import React from "react";
import Meow from "./components/Meow";

export default function Feed(props) {
  return (
    <>
      {props.meows.map((meow) => {
        return (
          <Meow sender={meow.sender} content={meow.content} date={meow.date} />
        );
      })}
    </>
  );
}
