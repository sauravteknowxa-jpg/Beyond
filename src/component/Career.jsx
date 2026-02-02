import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";


function Careeer(){
    return(
        <>
            <Navbar />
            <Outlet />
        </>
    )

    
}
export default Careeer;