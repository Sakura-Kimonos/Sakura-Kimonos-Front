import "./styleSheetPages/Home.css"
import Slide from '../components/Slide';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// import {  useLoaderData } from 'react-router-dom'
// import Trending from "../components/Trending";
const Home = () => {
    // const {products}  = useLoaderData();
    return (
<>
<section className="container-fluid">
                <Navbar/>
                <Slide/>
                <h2 className="title">LAST PRODUCTS</h2>
            <div className="anuncios">
                {/* <Trending products={products}/> */}
            </div>
            <Footer/>
            </section>
                </>
    )
};
export default Home;