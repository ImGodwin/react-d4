import { Component } from 'react';
import { ListGroup, ListGroupItem, Row } from 'react-bootstrap';

class CommentList extends Component {
  render() {
    return (
      <ListGroup>
        {this.props.comment.maps((singleComment) => (
          <ListGroupItem key={singleComment.comment}></ListGroupItem>
        ))}
      </ListGroup>
    );
  }
}

export default CommentList;
