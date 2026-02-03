import React from "react";
import ReactDOM from "react-dom/client";

// React CORE: 
// const heading = React.createElement("div", { className: "parent"} ,
//      [ "I'm Varsha Sreenivasulu" , React.createElement("div", { className: "child"} , 
//      [ React.createElement("h1", {}, "Hi I'm h1 tag") , React.createElement("h2", {}, "Hi I'm h2 tag") ])]);

// JSX:React Element - which are same and returns object and which at last converts to browser understandable HTML code
const heading = <h1>This is the Heading Written from JSX element</h1>

//JSX = React Element (object)

//React Functional Component - JS function that returns JSX/React Element
//with return
const FunctionalComponent = ()=>{
return (
     <h1>This is Functional Component in React with Return</h1>
)
}
const variable = "Just a JS variable is written here and by using curly braces we have included in the JSX code";
//without return
const ReturnLessFunctionalComponent = ()=>(
     <>
     <h1>{variable}</h1>
     {heading}
     <FunctionalComponent />
     <h1>This is Functional Component in React without Return</h1>
     </>
);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ReturnLessFunctionalComponent />);