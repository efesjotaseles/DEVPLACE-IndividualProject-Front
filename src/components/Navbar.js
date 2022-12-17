import React from "react";

export default function Navbar() {
    const style = {
        position: 'fixed',
        top: 0,
        width: "100%",
        height: "15vh",
        backgroundColor: 'lightyellow'
    }
  return (
    <>
      <nav style={style} >
        <ul>
          <li>
            <h1>Catter &#128049;</h1>
          </li>
        </ul>
      </nav>
    </>
  );
}
