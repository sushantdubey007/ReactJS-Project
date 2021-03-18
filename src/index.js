//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

import React from "react";
import ReactDOM from "react-dom";

const randomPic = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="true">
      List of My Favourite Movies{" "}
    </h1>
    <ul>
      <li> Sholey </li>
      <li> 3 Idiot </li>
      <li> DDLJ </li>
    </ul>
    <div>
      <img
        className="image-size"
        src="https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-260nw-1029171697.jpg"
      />
      <img
        className="image-size"
        src="https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-260nw-1029171697.jpg"
      />
      <img
        className="image-size"
        src="https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-260nw-1029171697.jpg"
      />
      <img className="image-size" src={randomPic} />
    </div>
  </div>,
  document.getElementById("root")
);
