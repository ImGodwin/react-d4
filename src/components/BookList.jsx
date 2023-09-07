import { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleBook from './SingleBook';

class BookList extends Component {
  render() {
    /*  console.log(this); */
    return (
      <Container>
        <Row>
          {this.props.books.map((book, index) => {
            /* console.log(el); */
            return <SingleBook book={book} index={index} />;
          })}
        </Row>
      </Container>
    );
  }
}

export default BookList;
