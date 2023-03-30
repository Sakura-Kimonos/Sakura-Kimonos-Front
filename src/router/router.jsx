import { createBrowserRouter } from "react-router-dom";
import { productHandler } from "../handlers/productHandler";
import Root from "./Root";
import Home from '../pages/Home';
import AddProduct from '../pages/AddProduct';
import NotFound from "../pages/NotFound";
import Join from "../pages/Join";
import Login from "../pages/Login";
import UserDashboard from "../pages/UserDashboard";
import AdmDashboard from "../pages/AdmDashboard";
import ShoppingCart from "../pages/ShoppingCart";
import CookiesPolicy from "../components/CookiesPolicy";
import ContactUs from '../pages/ContactUs';
import EditProduct from "../pages/EditProduct"
import Kimonos from "../pages/Kimonos"
import Yukata from "../pages/Yukata"


export const router = createBrowserRouter([
    { 
        path: '/',
        element: <Root/>,
        errorElement: <NotFound />, 
      
                children: [
                    {
                        index: true,
                        element:<Home />, 
                        loader: loaderAdvertisement,
                    },
                    {
                       path: '/Cart/:CartId',
                       element: <ShoppingCart />,
                    },
                    {
                        path: '/Cart',
                        element: <ShoppingCart />,
                     },
                    {
                        path: '/AddProduct',
                        element: <AddProduct />,
                    }, 
                    {
                        path: '/join',
                        element: <Join />,
                    },
                    {
                        path: '/login',
                        element: <Login />,
                    },
                    {
                        path: '/userDashboard',
                        element: <UserDashboard />,
                        loader: loaderAdvertisement, 
                    },   
                    {
                        path: '/kimonos',
                        element: <Kimonos />,
                        loader: loaderAdvertisement,
                    }, 
                    {
                        path: '/yukata',
                        element: <Yukata />,
                        loader: loaderAdvertisement,
                    },  
                    {
                        path: '/admDashboard',
                        element: <AdmDashboard />,
                        loader: loaderAdvertisement,
                    },  
                    {
                        path: '/contactUs',
                        element: <ContactUs />,
                        loader: loaderAdvertisement,
                    },  
                    {
                        path: "admDashboard/editProduct/:id",
                        element: <EditProduct />,
                        loader: loaderCardUser, 
                    },
                        
                    {
                        path: '/CookiesPolicy',
                        element:<CookiesPolicy/>
                        
                    },
                
                ]
            },
        
    //     ]
    // },   
]);

async function loaderCardUser  ({ params })  {
    const CardUser = await productHandler.loadProduct(params.id)  
    return { CardUser, params };
};

async function loaderAdvertisement () {
    const products = await productHandler.loadProducts()
    return { products };
    };

