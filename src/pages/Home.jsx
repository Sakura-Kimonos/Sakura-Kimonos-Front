import "./styleSheetPages/Home.css"
import Navbar from '../components/Navbar.jsx'

import Slide from '../components/Slide';

import OurVision from "../components/OurVision";
// import {  useLoaderData } from 'react-router-dom'
// import Trending from "../components/Trending";

const Home = () => {
    // const {products}  = useLoaderData();
    return (
<>
<section className="hero">
                <Navbar/>
                <Slide/>
                <h2 className="title">LAST PRODUCTS</h2>
            <div className="anuncios">
                {/* <Trending products={products}/> */}
            </div>
            <OurVision />
            </section>
                </>
    )
};

export default Home;