import "./styleSheetPages/Home.css"
import Navbar from '../components/Navbar.jsx'
import Slide from '../components/Slide';
import OurVision from "../components/OurVision";
import {  useLoaderData } from 'react-router-dom'
import Trending from "../components/Trending";
import PreviousFooter from '../components/PreviousFooter';
import SubNavbar from "../components/SubNavbar";




const Home = () => {
    const {products}  = useLoaderData();
    return (
    <>
        <section className="hero">
                <Navbar />
                <SubNavbar />
                <Slide/>
                <Trending products={products}/>
                <OurVision />
                <PreviousFooter />
            </section>
        </>
    )
};

export default Home;