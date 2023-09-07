import { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Carousel extends Component {
  state = {
    selectedBook: null,
  };

  render() {
    //console.log('check', this);
    return (
      <Container variant="mt-5" className={this.props.className}>
        <Row className="justify-content-center">
          <Col md={10}>
            <h1>Hello</h1>
            <h2 className={this.props.fontSize}>Benvenuti nel nostro Reactstorante</h2>
            <p className={this.props.textSize}>Niente secondi piatti 🍝🍝👏</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Carousel;
