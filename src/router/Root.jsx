import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
//import  ShoppingCart  from "../pages/ShoppingCart";

function Root() {
    return (
        <>
            
            <Outlet />
        
            <Footer />
        </>
    )
}

export default Root;