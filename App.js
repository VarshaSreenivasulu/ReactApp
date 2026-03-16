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

//Episode is regarding creating a cards of food app 
// Header 
// Body 
//  - cards 
//   -image and details
// Footer 

const Header = () =>(
     <>
     <div className = "header-container">
          <img src= "https://static.vecteezy.com/system/resources/previews/017/129/629/non_2x/creative-and-modern-n-letter-logo-design-n-n-logo-design-initial-n-logo-template-vector.jpg" width= "150px" height= "150px"/>
          <ul>
            <li>About-us </li>
            <li>Contact-us</li>
            <li>Add-to-cart</li>  
          </ul>
     </div>
     </>
);
const cardData = [
     {"id":1,"restaurant_name":"Maggee","cuisine":"Checkley","rating":"mcheckley0@dion.ne.jp","address":"Female","cost_for_two":"10.105.58.138"},
     {"id":2,"restaurant_name":"Alexio","cuisine":"Perone","rating":"aperone1@virginia.edu","address":"Genderfluid","cost_for_two":"176.101.137.188"},
     {"id":3,"restaurant_name":"Raynard","cuisine":"Mallison","rating":"rmallison2@ed.gov","address":"Male","cost_for_two":"240.141.191.153"},
     {"id":4,"restaurant_name":"Ortensia","cuisine":"Kermode","rating":"okermode3@newsvine.com","address":"Female","cost_for_two":"149.157.50.150"},
     {"id":5,"restaurant_name":"Ardyth","cuisine":"Zannutti","rating":"azannutti4@nhs.uk","address":"Female","cost_for_two":"84.238.230.152"},
     {"id":6,"restaurant_name":"Kasey","cuisine":"Allender","rating":"kallender5@rambler.ru","address":"Female","cost_for_two":"22.9.184.104"},
     {"id":7,"restaurant_name":"Grange","cuisine":"Celloni","rating":"gcelloni6@last.fm","address":"Male","cost_for_two":"44.205.180.162"},
     {"id":8,"restaurant_name":"Rozamond","cuisine":"Fevier","rating":"rfevier7@php.net","address":"Female","cost_for_two":"189.57.116.91"},
     {"id":9,"restaurant_name":"Binny","cuisine":"Groom","rating":"bgroom8@wikimedia.org","address":"Female","cost_for_two":"238.248.78.166"},
     {"id":10,"restaurant_name":"Falkner","cuisine":"Stammers","rating":"fstammers9@constantcontact.com","address":"Male","cost_for_two":"112.40.3.141"},
     {"id":11,"restaurant_name":"Melonie","cuisine":"Caen","rating":"mcaena@cnn.com","address":"Female","cost_for_two":"5.206.217.123"},
     {"id":12,"restaurant_name":"Bar","cuisine":"Roskams","rating":"broskamsb@wufoo.com","address":"Male","cost_for_two":"91.85.206.216"},
     {"id":13,"restaurant_name":"Nancy","cuisine":"Drakes","rating":"ndrakesc@google.nl","address":"Female","cost_for_two":"216.230.49.123"},
     {"id":14,"restaurant_name":"Clovis","cuisine":"Sands-Allan","rating":"csandsalland@freewebs.com","address":"Female","cost_for_two":"102.146.139.171"},
     {"id":15,"restaurant_name":"Averil","cuisine":"Bath","rating":"abathe@discuz.net","address":"Male","cost_for_two":"196.250.82.253"},
     {"id":16,"restaurant_name":"Hector","cuisine":"Quixley","rating":"hquixleyf@addthis.com","address":"Male","cost_for_two":"6.180.0.19"},
     {"id":17,"restaurant_name":"Rinaldo","cuisine":"Garrood","rating":"rgarroodg@imgur.com","address":"Male","cost_for_two":"58.4.92.218"},
     {"id":18,"restaurant_name":"Brigitta","cuisine":"Onele","rating":"boneleh@sun.com","address":"Agender","cost_for_two":"110.140.77.163"},
     {"id":19,"restaurant_name":"Lanni","cuisine":"Hamsley","rating":"lhamsleyi@aol.com","address":"Female","cost_for_two":"161.133.131.116"},
     {"id":20,"restaurant_name":"Sherman","cuisine":"Pallasch","rating":"spallaschj@w3.org","address":"Male","cost_for_two":"211.114.168.188"}
]
const CardComponent = (props)=>{
     const {resData} = props;
     return (
          <>
          <div className="card-container">
               <img
                    src="https://b.zmtcdn.com/data/pictures/5/20937615/595db5b56cde4ddc205dd89cd1770bee_featured_v2.jpg?output-format=webp"
                    width="200px"
                    height="100px"
               />
               <h2>{resData.restaurant_name}</h2>
               <p>{resData.cuisine}</p>
               <p>{resData.address}</p>
               <p>{resData.cost_for_two}</p>
               <p>{resData.rating}</p>
               </div>
          </>
     );
}

const AppLayout = ()=> (
   <>
      <Header />
      <div className="Card-overall-container">
          {cardData.map((reslist)=>{
               return <CardComponent resData= {reslist} key={reslist.id}/>
          })};
      </div>
   </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);