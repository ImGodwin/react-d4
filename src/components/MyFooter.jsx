import { Container, Col } from 'react-bootstrap';

const MyFooter = () => {
  return (
    <footer className="bg-dark text-white">
      <Container>
        <Col className="text-center py-3">Copyright 2023</Col>
      </Container>
    </footer>
  );
};

export default MyFooter;
