//import Image from 'react-bootstrap/Image';
import { Container } from 'react-bootstrap';

const Welcome = () => {
  return (
    <Container
      className="d-flex bg-dark text-light align-items-center justify-content-center"
      fluid
      style={{ height: '200px' }}
    >
      <h1 className="text-center py-3">WELCOME TO MY ONLINE BOOKSHOP </h1>
    </Container>
  );
};

export default Welcome;
