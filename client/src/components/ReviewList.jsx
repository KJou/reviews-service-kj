import React from 'react';
import styled from 'styled-components';
import ReviewListEntry from './ReviewListEntry.jsx';
import ReviewStars from './ReviewStars.jsx';
import { Aggregate } from 'mongoose';

const ReviewSummary = styled.div`
`;

const ReviewHeading = styled.h2`
  font-size: 19px;
  font-weight: 700;
  margin-bottom: 15px
`;

const NumberOfRatings = styled.span`
  vertical-align: top;
  font-size: 18px;
  font-weight: 300;
  line-height: 25px;
  margin-left: 14px;
`;

const ReviewTopBox = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 35px;
  border-bottom: 1px solid #e3e3e3;
`;

const AggregateFit = styled.span`
  flex: 1;
  font-size: 14px;
`;

const AggregateRating = styled.div`
  flex: 1;
`;

const WriteReview = styled.span`
  flex: 1;
  text-align: center;
`;

const WriteReviewButton = styled.button`
  padding: 0px 30px;
  cursor: pointer;
  height: 40px;
  width: 220px;
  transition: background .2s,border-color .2s;
  background: #fff;
  border-color: #000;

  &:hover {
    background: #e3e3e3;
    border-color: #e3e3e3;
  }
`;

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { reviewSummary } = this.props;
    if (reviewSummary.reviews) {
      console.log(reviewSummary);
      return (
        <ReviewSummary>
          <ReviewHeading>REVIEWS</ReviewHeading>
          <ReviewTopBox>
            <AggregateRating>
              <ReviewStars rating={reviewSummary.aggregateRating} starSize={24} />
              <NumberOfRatings>
                (
                { reviewSummary.reviews.length }
                )
              </NumberOfRatings>
            </AggregateRating>
            <AggregateFit>
              <b>Fit rating: </b>
              { reviewSummary.aggregateFit }
            </AggregateFit>
            <WriteReview>
              <WriteReviewButton>Write a Review</WriteReviewButton>
            </WriteReview>
          </ReviewTopBox>
          {reviewSummary.reviews.map((review) => {
            return (
              <div className="ReviewList-reviewListEntry" key={review._id}>
                <ReviewListEntry review={review} />
              </div>
            );
          })}
        </ReviewSummary>
      );
    }
    return (
      <div />
    );
  }
}


export default ReviewList;
