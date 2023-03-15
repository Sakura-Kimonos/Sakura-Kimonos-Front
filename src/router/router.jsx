import { createBrowserRouter } from "react-router-dom";
import { productHandler } from "../handlers/productHandler";
// import Root from "./Root";
import Home from '../pages/Home';
// import AddProduct from '../pages/AddProduct';
// import NotFound from "../pages/NotFound";
// import Join from "../pages/Join";
// import Login from "../pages/Login";
// import CardsUser from "../pages/CardsUser";
// import CardAdm from "../pages/CardAdm";
// import ShoppingCart from "../pages/ShoppingCart";


// import EditProduct from "../pages/EditProduct"



export const router = createBrowserRouter([
    { 
        path: '/',
        // element: < Root/>,
        // errorElement: <NotFound />, 
        children: [
            {
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
                    //     // loader: loaderPost,
                    // }, 
                    // {
                    //     path: '/addProduct',
                    //     element: <AddProduct />,
                    //     // loader: loaderPost
                    // }, 
                    // {
                    //     path: '/join',
                    //     element: <Join />,
                    //     // loader: loaderPost
                    // },
                    // {
                    //     path: '/login',
                    //     element: <Login />,
                    //     // loader: loaderPost
                    // },
                    // {
                    //     path: '/advertisement',
                    //     element: <CardsUser />,
                    //     loader: loaderAdvertisement,
                    // },   
                    // {
                    //     path: '/dashboard',
                    //     element: <CardAdm />,
                    //     loader: loaderAdvertisement,
                    // },  
                    // {
                    //     path: '/cart',
                    //     element: <ShoppingCart />,
                    //     // loader: loaderAdvertisement,
                    // },  
                    
                
                    // {
                    //     path: "advertisement/editProduct/:id",
                    //     element: <EditProduct />,
                    //     loader: loaderPost, 
                    // },
                    
                
                ]
            },
         
        ]
    },   
]);

// async function loaderPost  ({ params })  {
//     const post = await productHandler.loadProduct(params.id)  
//     return { post };

//     //cambiar post por modal
// };

async function loaderAdvertisement () {
 const products = await productHandler.loadProducts()
    return { products };
 };

