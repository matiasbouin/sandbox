//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";

//It should display 2 paragraph HTML elements.
const name = "Matias";
const currentYear = new Date();
const year = currentYear.getFullYear();
ReactDOM.render(
  <div>
    <h1>Created by {name}</h1>
    <h2>Copyright {year}</h2>
  </div>,
  document.getElementById("root")
);

//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
