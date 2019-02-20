import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
import ReviewList from './components/ReviewList.jsx';

const ReviewListWrapper = styled.div`
font-family: 'Mukta', sans-serif;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewSummary: {},
      productId: 3,
    };
  }

  componentDidMount() {
    const { productId } = this.state;
    this.getReviewSummary(productId);
  }

  getReviewSummary(productId) {
    axios.get(`http://localhost:3003/${productId}/reviews`)
      .then((result) => {
        this.setState({
          reviewSummary: result.data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { reviewSummary } = this.state;
    return (
      <ReviewListWrapper>
        <ReviewList reviewSummary={reviewSummary} />
      </ReviewListWrapper>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
