import React, { useEffect, useState } from "react";

export default function Navbar() {
    const style = {
        position: 'fixed',
        top: 0,
        width: "100%",
        height: "15vh",
        backgroundColor: 'lightyellow'
    }

    const [profileBtnStyle, setProfileBtnStyle] = useState({display: 'none'});
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(()=>{
      if(isLoggedIn){
        setProfileBtnStyle({});
      }
      else{
        setProfileBtnStyle({display: 'none'});
      }
    },[isLoggedIn])

    function handleMeow(){
      alert('Meowing!');
      
    }

  return (
    <>
      <nav style={style} >
        <ul>
          <li>
            <article style={{backgroundColor: "lightyellow"}}  ><h1>Catter &#128049;</h1></article>
          </li>
        </ul>
        <ul style={profileBtnStyle} >
          <li><button onClick={handleMeow} >Meow!</button></li>
          <li><article>Profile</article> </li>
        </ul>
      </nav>
    </>
  );
}
