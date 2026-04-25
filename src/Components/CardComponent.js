import { img_Url } from "../../Data/constants";

const CardComponent = (props)=>{
     const {resData} = props; //destructuring
     return (
          <>
          <div className="card-container">
               <img
                    src= {img_Url + resData.info.cloudinaryImageId}
                    width="300px"
                    height="200px"
               />
               <h2>{resData.info.name}</h2>
               <p>{resData.info.cuisines.join(", ")}</p>
               <p>{resData.info.locality}</p>
               <p>{resData.info.costForTwo}</p>
               <p>{resData.info.avgRating}</p>
               </div>
          </>
     );
}

export default CardComponent;