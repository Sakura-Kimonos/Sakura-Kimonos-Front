import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faTruck, faGlobe, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import '../components/styleSheet/PreviousFooter'

function FooterIcons() {
  return (
    <div className="footer-icons">
      <Container>
        <Row>
          <Col xs={6} sm={3}>
            <div className="icon">
              <FontAwesomeIcon icon={faLock} />
              <div className="text">Secure Payment</div>
            </div>
          </Col>
          <Col xs={6} sm={3}>
            <div className="icon">
              <FontAwesomeIcon icon={faTruck} />
              <div className="text">Free Delivery</div>
            </div>
          </Col>
          <Col xs={6} sm={3}>
            <div className="icon">
              <FontAwesomeIcon icon={faGlobe} />
              <div className="text">Worldwide Delivery</div>
            </div>
          </Col>
          <Col xs={6} sm={3}>
            <div className="icon">
              <FontAwesomeIcon icon={faMoneyBill} />
              <div className="text">14 Days to Return a Product</div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FooterIcons;
