import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div", { className: "parent"} ,
     [ "I'm Varsha Sreenivasulu" , React.createElement("div", { className: "child"} , 
     [ React.createElement("h1", {}, "Hi I'm h1 tag") , React.createElement("h2", {}, "Hi I'm h2 tag") ])]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading)