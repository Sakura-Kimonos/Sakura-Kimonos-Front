import "./styleSheetPages/Home.css"
import '../components/styleSheet/SubNavbar.css';
import Navbar from '../components/Navbar.jsx'
import Slide from '../components/Slide';
import OurVision from "../components/OurVision";
import {  useLoaderData } from 'react-router-dom'
import Trending from "../components/Trending";
import PreviousFooter from '../components/PreviousFooter';
import { HashLink as Link } from "react-router-hash-link";


const Home = () => {
    const {products}  = useLoaderData();
    return (
    <>
        <section className="hero">
                <Navbar />
                {/* <nav className="subnav d-flex justify-content-center justify-content-lg-center flex-wrap align-items-center">
                    <Link to='#last-products' smooth> LAST PRODUCTS </Link>
                    <Link to='#our-vision'smooth> OUR VISION </Link>   
                    <Link to='#our-services' smooth> OUR SERVICES </Link> 
                </nav> */}
                <nav className="subnav d-flex justify-content-center justify-content-lg-center flex-wrap align-items-center">
                    <ul> 
                        <li> LAST PRODUCTS </li>
                        <li> OUR VISION </li>
                        <li> OUR SERVICES </li>
                    </ul>
                </nav>
                <Slide/>
                <Trending products={products}/>
                <OurVision />
                <PreviousFooter />
            </section>
        </>
    )
};

export default Home;