import { useRouteError, Link } from "react-router-dom";
import './styleSheetPages/NotFound.css'
import SakuraAnimation from "../components/SakuraAnimation";



const NotFound = () => {
    const error = useRouteError();

  
    return (
      <div className="column">
        <h1>404</h1>
        <span role="img" aria-label="sad face" style={{fontSize: "30px"}}>😔</span>
        <p>{error.statusText || error.message}</p>
        <SakuraAnimation /> 
        <Link to="/">Please click here to return to the home page</Link>
        <br></br>
      
        <img src="src/assets/LogoSakura1.png" alt="logo" />
      </div>
    );
  };
  
  export default NotFound;
