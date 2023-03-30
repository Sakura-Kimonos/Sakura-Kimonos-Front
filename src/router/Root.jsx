import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";


function Root() {
   // const [allProducts, setAllProducts] = useState([]);
    //const [total, setTotal] = useState([0]);
   // const [countProducts, setCountProducts] = useState(0);

    return (
        <>
            <Outlet />
        
            <Footer />
        </>
    )
}

export default Root;
