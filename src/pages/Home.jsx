import "./styleSheetPages/Home.css"
import Slide from '../components/Slide';
import Navbar from '../components/Navbar'
// import {  useLoaderData } from 'react-router-dom'
// import Trending from "../components/Trending";
const Home = () => {
    // const {products}  = useLoaderData();
    return (
<>
                <Navbar/>
                <Slide/>
                <h2 className="title">Latest Advertisement</h2>
            <div className="anuncios">
                {/* <Trending products={products}/> */}
            </div>
                </>
    )
};
export default Home;