import React, { useState, useEffect } from 'react'
import "./Nav.css"

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100){
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            
        };
    }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
        <img className="nav_logo"
        src={require("./netflix_logo.png")} 
        alt="Netflix_logo" />
      
      <img className="nav_avatar"
        src={require("./Netflix-avatar.png")}
        alt="Netflix_avatar" />
    </div>
  )
}

export default Nav
