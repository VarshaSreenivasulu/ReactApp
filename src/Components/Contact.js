import {useState} from "react";
const Contact = ()=>{
    const [count, setcount]= useState(0)
    return (
        <>
            <h1>count : {count}</h1>
            <button onClick={()=>{
                let a = count + 1;
                setcount(a);
            }   
            }>Inc Count</button>
            <h1>Contact Us</h1>
            <h2><strong>NV</strong> is a new-age consumer-first organization offering an easy-to-use convenience platform, accessible through a unified app.</h2>
            <h2>CONTACT DETAILS - 8838275200</h2>
        </>
    );
}

export default Contact;