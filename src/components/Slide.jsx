import 'bootstrap/dist/css/bootstrap.min.css'
import "./styleSheet/Slide.css"
import Carousel from 'react-bootstrap/Carousel';
import slide1 from "../assets/slide1.png"
import slide2 from "../assets/slide2.png"
import slide3 from "../assets/slide3.png"
import slide4 from "../assets/slide4.png"




function Slide() {
  return (
    <div className="d-flex justify-content-center align-items-center">
    <div className="row">
      <div className="col-md-8 offset-md-2">
    <Carousel >
      <Carousel.Item className='slide'>
        <img
          className="d-block w-100"
          src={slide1}
          alt="First slide"
    
        />
      </Carousel.Item>
      <Carousel.Item className='position'>
        <img
          className="d-block w-100"
          src={slide2}
          alt="Second slide"
    
        />
      </Carousel.Item>
      <Carousel.Item className='position'> 
        <img
          className="d-block w-100"
          src={slide3}
          alt="Third slide"
    
        />
      </Carousel.Item>
      <Carousel.Item className='position'>
        <img
          className="d-block w-100"
          src={slide4}
          alt="Fourth slide"
    
        />
      </Carousel.Item>
       </Carousel>
       </div>
  </div>
</div>
  );
}

export default Slide;

