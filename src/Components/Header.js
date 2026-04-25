import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () =>{
     let [logbutton,setlogbutton] = useState("Login");
     return(
     <>
          <div className = "header-container">
               <Link><img src= "https://static.vecteezy.com/system/resources/previews/017/129/629/non_2x/creative-and-modern-n-letter-logo-design-n-n-logo-design-initial-n-logo-template-vector.jpg" width= "150px" height= "150px"/></Link>
               <ul>
               <li><Link to="/about"> About-us </Link></li>
               <li><Link to="/contact"> Contact-us</Link></li>
               <li className="log-button" onClick = {()=>{
                    (logbutton ==="Login")? setlogbutton("Logout") : setlogbutton("Login");
               }}>{logbutton}</li>
               </ul>
          </div>
     </>
     );
};

export default Header;