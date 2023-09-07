import { Component } from 'react';
import { Button, Card, Col } from 'react-bootstrap';

class SingleBook extends Component {
  render() {
    console.log(this);
    return (
      <Col key={`el-${this.props.index}`} className="my-3" xs={3}>
        <Card className="shadow-lg" style={{ height: '550px' }}>
          <Card.Img variant="top" src={this.props.book.img} style={{ height: '300px', objectFit: 'contain' }} />
          <Card.Body>
            <Card.Title>{this.props.book.title}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="danger w-50">{this.props.book.price}£</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
