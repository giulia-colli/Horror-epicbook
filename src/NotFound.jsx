import { Col, Row } from 'react-bootstrap'
import notFoundImg from './capibara-horror.webp';

const NotFound = () => (
  <Row className="justify-content-center my-4">
    <Col xs={12} md={6}>
      <div className="text-center">
        <h1>Qualcosa deve essere andato storto!</h1>
        
        <img src={notFoundImg} alt="pagina non trovata" className="not-found-img" />
      </div>
    </Col>
  </Row>
)

export default NotFound
