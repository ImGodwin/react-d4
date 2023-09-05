import menu from '../data/menu.json';
import { Col, Container, Row, Card, Button } from 'react-bootstrap';

const AllTheBooks = () => {
  return (
    <Container>
      <Row>
        {menu.map((el, index) => (
          <Col key={`el-${index}`} className="my-3" xs={3}>
            <Card className="shadow-lg">
              <Card.Img variant="top" src={el.img} style={{ height: '300px', objectFit: 'contain' }} />
              <Card.Body>
                <Card.Title>{el.title}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Button variant="danger">{el.price}</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
