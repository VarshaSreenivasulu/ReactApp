import React , {useEffect, useState} from "react";
import CardComponent from "./CardComponent";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {

    const [topRated , settopRated] = useState([]);
    const [inputValue , setinputValue] = useState("");
    const [fiteredrestaurants , setfiteredrestaurants] = useState([]);
    useEffect(()=>{
        const api_data = async ()=> {
                const restaurant_data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=12.9698196&lng=77.7499721&carousel=true&third_party_vendor=1");
                const json = await restaurant_data.json();
                settopRated(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
                setfiteredrestaurants(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        };
        api_data();
        setInterval(()=>{console.log("effect interval")},1000);
    },[]);
  return ( (topRated.length === 0)? <Shimmer /> :
    <>
      <div className="btn-top-search">
        <button
          className="top-rated-btn"
          onClick={() => {
            const filteredData = topRated.filter(
              (res) => res.info.avgRating > 4,
            );
            settopRated(filteredData);
          }}
        >
          Top Rated Restaurants
        </button>
        <div className="input-btn">
          <input
            className="filter-out-rest"
            value={inputValue}
            onChange={(e) => setinputValue(e.target.value)}
          ></input>
          <button
            onClick={() => {
              const searchedRes = fiteredrestaurants.filter((item) =>
                item.info.name.toLowerCase().includes(inputValue.toLowerCase()),
              );
              settopRated(searchedRes);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="Card-overall-container">
        {topRated.map((restaurant) => {
          return (
            <Link className="card-link" key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}><CardComponent resData={restaurant} key={restaurant.info.id}/></Link>
          ); //Return is must in any callback func / Arrow func
        })}
      </div>
    </>
  );
};

export default Body;
