import React from 'react';
import styled from 'styled-components';
import ReviewListEntry from './ReviewListEntry.jsx';
import ReviewStars from './ReviewStars.jsx';

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
  flex-wrap: wrap;
  padding-bottom: 35px;
  border-bottom: 1px solid #e3e3e3;

  @media all and  (max-width: 750px) {
    flex-direction: column;
  }
`;

const ReviewTopBoxContent = styled.span`
  flex: 1;
`;

const AggregateRating = styled(ReviewTopBoxContent)`
`;

const AggregateFit = styled(ReviewTopBoxContent)`
  font-size: 14px;
`;

const FitHeading = styled.span`
  font-weight: 700;
  padding-right: 10px;
`;

const WriteReview = styled(ReviewTopBoxContent)`
`;

const WriteReviewButton = styled.button`
  padding: 0px 30px;
  cursor: pointer;
  height: 40px;
  width: 220px;
  transition: background .2s,border-color .2s;
  background: #fff;
  border-color: #000;
  font-size: 12px;

  &:hover {
    background: #e3e3e3;
    border-color: #e3e3e3;
  }
`;

const ReviewsSortMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 20px;
`;

const SortByStars = styled.select`
`;

const StarSortOption = styled.option`
`;

const StarSortHeading = styled.span`
  font-weight: 700;
  font-size: 12px;
`;

const SelectFilter = styled.select`
`;

const FilterHeading = styled.option`
`;

const ReviewsWrapper = styled.div`
  padding 20px 0px 20px 0px;
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
              <FitHeading>Fit rating: </FitHeading>
              { reviewSummary.aggregateFit }
            </AggregateFit>
            <WriteReview>
              <WriteReviewButton>Write a Review</WriteReviewButton>
            </WriteReview>
          </ReviewTopBox>
          {/* <ReviewsSortMenu>
            <SortByStars>
              <StarSortOption><StarSortHeading>Star Rating</StarSortHeading></StarSortOption>
            </SortByStars>
            <SelectFilter>
              Stars
            </SelectFilter>
          </ReviewsSortMenu> */}
          <ReviewsWrapper>
            {reviewSummary.reviews.map((review) => {
              return (
                <div className="ReviewList-reviewListEntry" key={review._id}>
                  <ReviewListEntry review={review} />
                </div>
              );
            })}
          </ReviewsWrapper>
        </ReviewSummary>
      );
    }
    return (
      <div />
    );
  }
}


export default ReviewList;
