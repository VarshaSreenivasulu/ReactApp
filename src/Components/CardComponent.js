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
               <h2>{resData.info.name}</h2>
               <p>{resData.info.cuisines}</p>
               <p>{resData.info.locality}</p>
               <p>{resData.info.costForTwo}</p>
               <p>{resData.info.avgRating}</p>
               </div>
          </>
     );
}

export default CardComponent;