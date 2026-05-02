import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React from "react";

const Menu = () => {
  const [menudata, setmenudata] = useState([]);
  const [vegdata , setVegData] = useState([]);
  const [nonvegdata , setnonVegData] = useState([]);
  const params = useParams();
  useEffect(() => {
    fetch_menu();
  }, []);

  const fetch_menu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9698196&lng=77.7499721&restaurantId=" +
        params.resId,
    );
    const json = await data.json();
    setmenudata(
      json.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card.itemCards,
    );
    setVegData(
      json.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card.itemCards,
    );
    setnonVegData(
      json.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card.itemCards,
    );  
  };
  return (
    <>
      <button
        className="veg-nonveg-btn"
        onClick={() => {
          let veg_dish = vegdata.filter((data) => {
            return data.card.info.isVeg === 1;
          });
          setmenudata(veg_dish);
        }}
      >
        Veg
      </button>
      <button
        className="veg-nonveg-btn"
        onClick={() => {
          const nonveg_dish = nonvegdata.filter((data) => {
            return !(data.card.info.isVeg === 1);
          });
          setmenudata(nonveg_dish);
        }}
      >
        NonVeg
      </button>
      <p className="null-elements"></p>
      {menudata.map((res) => {
        return (
          <React.Fragment key={res.card.info.id}>
            <ul>
              <li>
                {res.card.info.name} - Rs.{res.card.info.price / 100 || res.card.info.defaultPrice / 100}
              </li>
            </ul>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default Menu;
