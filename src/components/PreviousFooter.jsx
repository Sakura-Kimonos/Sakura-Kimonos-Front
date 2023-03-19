import { FaLock, FaTruck, FaGlobe, FaMoneyBillAlt } from 'react-icons/fa';
import '../components/styleSheet/PreviousFooter.css'

function FooterIcons() {
  return (
    <div className="bg-light py-3">
      <div className="container d-flex justify-content-center justify-content-lg-between flex-wrap">
        <div className="d-flex flex-column align-items-center mx-3">
          <FaLock size={32} />
          <span className="mt-2 text-center">Secure Payment</span>
        </div>
        <div className="d-flex flex-column align-items-center mx-3">
          <FaTruck size={32} />
          <span className="mt-2 text-center">Free Delivery</span>
        </div>
        <div className="d-flex flex-column align-items-center mx-3">
          <FaGlobe size={32} />
          <span className="mt-2 text-center">Worldwide Delivery</span>
        </div>
        <div className="d-flex flex-column align-items-center mx-3">
          <FaMoneyBillAlt size={32} />
          <span className="mt-2 text-center">14 Days to Return a Product</span>
        </div>
      </div>
    </div>
  );
}

export default FooterIcons;
