import React from "react";
import ReactDOM from "react-dom";

const name = "Matias";
const lname = "Bouin";
const n = 7;

ReactDOM.render(
  <div>
    <h1>Hello {name} {lname}!</h1>
    <p>your lucky number is {n}</p>
  </div>,
  document.getElementById("root")
);
