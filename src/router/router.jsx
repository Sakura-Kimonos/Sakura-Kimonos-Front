import { createBrowserRouter } from "react-router-dom";
import { productHandler } from "../handlers/productHandler";
import Root from "./Root";
import Home from '../pages/Home';
// import AddProduct from '../pages/AddProduct';
// import NotFound from "../pages/NotFound";
// import Join from "../pages/Join";
// import Login from "../pages/Login";
import UserDashboard from "../pages/UserDashboard";
import AdmDashboard from "../pages/AdmDashboard";
// import ShoppingCart from "../pages/ShoppingCart";
import CookiesPolicy from "../components/CookiesPolicy";
import ContactUs from '../pages/ContactUs';

// import EditProduct from "../pages/EditProduct"



export const router = createBrowserRouter([
    { 
        path: '/',
        element: < Root/>,
        // errorElement: <NotFound />, 
      
                children: [
                    {
                        index: true,
                        element:<Home />, 
                        loader: loaderAdvertisement,
                    },
                    // {
                    //     path: '/cart',
                    //     element: <ShoppingCart />,
                    //     // loader: loaderCardUser,
                    // }, 
                    // {
                    //     path: '/addProduct',
                    //     element: <AddProduct />,
                    //     // loader: loaderCardUser
                    // }, 
                    // {
                    //     path: '/join',
                    //     element: <Join />,
                    //     // loader: loaderCardUser
                    // },
                    // {
                    //     path: '/login',
                    //     element: <Login />,
                    //     // loader: loaderCardUser
                    // },
                    {
                        path: '/userDashboard',
                        element: <UserDashboard />,
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

                    // {
                    //     path: '/cart',
                    //     element: <ShoppingCart />,
                    //     // loader: loaderAdvertisement,
                    // },  
                    
                
                    // {
                    //     path: "advertisement/editProduct/:id",
                    //     element: <EditProduct />,
                    //     loader: loaderCardUser, 
                    // },
                        
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
    return { CardUser };

  
};

async function loaderAdvertisement () {
 const products = await productHandler.loadProducts()
    return { products };
 };

