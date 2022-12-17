import React from "react";

export default function Meow(props) {
  return (
    <article>
      <header>
        <h6>{props.sender}</h6>
      </header>
      <body>
        <h5>{props.content}</h5>
      </body>
      <footer>
        <cite>{props.date}</cite>
      </footer>
    </article>
  );
}
