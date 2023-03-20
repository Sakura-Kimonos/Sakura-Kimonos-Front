import "./styleSheetPages/Home.css"
import '../components/styleSheet/SubNavbar.css';
import Navbar from '../components/Navbar.jsx'
import Slide from '../components/Slide';
import OurVision from "../components/OurVision";
import {  useLoaderData } from 'react-router-dom'
import Trending from "../components/Trending";
import PreviousFooter from '../components/PreviousFooter'



const Home = () => {
    const {products}  = useLoaderData();
    return (
<>
    <section className="hero">
                <Navbar />
                <nav className="subnav d-flex justify-content-center justify-content-lg-center flex-wrap align-items-center">
                    <ul>
                        <a  href="page.html#last-products"> LAST PRODUCTS </a>
                        <a href="page.html#our-vision"> OUR VISION </a>
                        <a  href="page.html#our-services"> OUR SERVICES </a>
                    </ul>
                </nav>
                <Slide/>
            <div className="trending">
                <Trending products={products}/>
            </div>
            <div id="our-vision"> 
                <OurVision />
            </div>
            <div id="our-services"> 
                <PreviousFooter />
            </div>
            </section>
                </>
    )
};

export default Home;