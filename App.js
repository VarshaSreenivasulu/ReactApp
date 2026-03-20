import React , {useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Components/Header";
import CardComponent from "./src/Components/CardComponent";
import cardData from "./Data/utilities.js";

// React CORE: 
// const heading = React.createElement("div", { className: "parent"} ,
//      [ "I'm Varsha Sreenivasulu" , React.createElement("div", { className: "child"} , 
//      [ React.createElement("h1", {}, "Hi I'm h1 tag") , React.createElement("h2", {}, "Hi I'm h2 tag") ])]);

// JSX:React Element - which are same and returns object and which at last converts to browser understandable HTML code
const heading = <h1>This is the Heading Written from JSX element</h1>

//JSX = React Element (object)
//React Functional Component - JS function that returns JSX/React Element
//with return

const AppLayout = ( ) =>{
     const [topRated , settopRated] = useState(cardData);
     return (
     <>
          <Header />
          <button className = "top-rated-btn" onClick={()=>{
               const filteredData = cardData.filter((res)=> res.info.avgRating > 4.5 );
               console.log(filteredData);
               settopRated(filteredData);
          }}>Top Rated Restaurants</button>
          <div className="Card-overall-container">
               {
                    topRated.map((restaurant)=>{
                    return (<CardComponent resData = {restaurant} key = {restaurant.info.id}/>); //Return is must in any callback func / Arrow func
                    })
               }
          </div>
     </>
     );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);