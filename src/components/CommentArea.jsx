import { Component } from 'react';
import { Container } from 'react-bootstrap';
import CommentList from './CommentList';

class CommentArea extends Component {
  state = {
    comment: [],
  };

  fetchBookComment = async () => {
    try {
      const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/', {
        method: 'GET',
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGVhNGM3NjUxNWY0MTAwMTQ2OTdhMzEiLCJpYXQiOjE2OTQwOTM4NTMsImV4cCI6MTY5NTMwMzQ1M30.V7v-WBeO5LjksDBGJyfkLRYD6p6GcRiNkTDyhd99vOQ',
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const comment = response.json();
        this.setState({ comment: comment });
        //console.log('setState');
      } else {
        //console.log('setState');
      }
    } catch (error) {
      //console.log(error);
    }
  };

  componentDidMount = () => {
    this.fetchBookComment();
  };

  render() {
    console.log(this);
    return (
      <Container>
        <CommentList comment={this.state.comment} />
      </Container>
    );
  }
}

export default CommentArea;
