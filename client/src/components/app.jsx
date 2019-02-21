import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
import ReviewList from './ReviewList.jsx';

const ReviewListWrapper = styled.div`
  font-family: 'Mukta', sans-serif;
  margin: 0px 300px 0px 20px;
`;

class ReviewsApp extends React.Component {
  constructor(props) {
    super(props);

    let id = 3;

    const pathName = window.location.pathname.split('/');

    const pathId = Number.parseInt(pathName[1], 10);
    if (!Number.isNaN(pathId)) {
      id = pathId;
    }

    this.state = {
      reviewSummary: {},
      productId: id,
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

export default ReviewsApp;
