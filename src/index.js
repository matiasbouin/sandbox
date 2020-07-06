//Create a React app from scratch.
import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const currentHour = date.getHours();

let greeting;

const customColor = {
  color: ""
};

if (currentHour < 12) {
  greeting = "Good morning";
  customColor.color = "red";
} else if (currentHour > 12 && currentHour < 18) {
  greeting = "Good afternoon";
  customColor.color = "green";
} else {
  greeting = "Good evening";
  customColor.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={customColor}>
    {greeting}
  </h1>,
  document.getElementById("root")
);
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
