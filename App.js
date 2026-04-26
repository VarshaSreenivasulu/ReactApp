import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Components/Header";
import { createBrowserRouter, RouterProvider , Outlet } from "react-router-dom";
import About from "./src/Components/About";
import Contact from "./src/Components/Contact";
import Body from "./src/Components/Body";
import Menu from "./src/Components/Menu";
import Error from "./src/Components/Error"

// React CORE: 
// const heading = React.createElement("div", { className: "parent"} ,
//      [ "I'm Varsha Sreenivasulu" , React.createElement("div", { className: "child"} , 
//      [ React.createElement("h1", {}, "Hi I'm h1 tag") , React.createElement("h2", {}, "Hi I'm h2 tag") ])]);

// JSX:React Element - which are same and returns object and which at last converts to browser understandable HTML code
const heading = <h1>This is the Heading Written from JSX element</h1>

//JSX = React Element (object)
//React Functional Component - JS function that returns JSX/React Element
//with return

const AppLayout = () =>{
     return (
     <>
          <Header />
          <Outlet />
          {/* <Outlet /> only for the children pathsh in the create browser router configuration */}
     </>
     );
}

const router = createBrowserRouter([
     {
          path: "/",
          element : <AppLayout />,
          errorElement : <Error />,
          children: [
               {
                    path: "/",
                    element : <Body />
               },
               {
                    path: "/about",
                    element : <About name = {"Varsha"}/>
               },
               {
                    path: "/contact",
                    element : <Contact />
               },
               {
                    path: "/restaurant/:resId",
                    element : <Menu />
               }
          ]
     }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {router} />);