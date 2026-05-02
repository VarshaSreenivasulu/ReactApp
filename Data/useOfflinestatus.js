import { useState, useEffect } from "react";
const useOfflinestatus = ()=>{
    const [offlineStatus, setofflineStatus] = useState(true);
    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setofflineStatus(false);
        })
        window.addEventListener("online",()=>{
            setofflineStatus(true);
        })
    },[])
    return offlineStatus;
}

export default useOfflinestatus;