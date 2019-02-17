import React from 'react';
import ReviewListEntry from './ReviewListEntry.jsx';

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
        <div>
          ReviewList:
          <div className="ReviewList-aggregateRating">
            Stars:
            { reviewSummary.aggregateRating }
          </div>
          <div className="ReviewList-numberOfRatings">
            { reviewSummary.reviews.length }
          </div>
          <div className="ReviewList-aggregateFit">
            Fit:
            { reviewSummary.aggregateFit }
          </div>
          {reviewSummary.reviews.map((review) => {
            return (
              <div className="ReviewList-reviewListEntry" key={review._id}>
                <ReviewListEntry review={review} />
              </div>
            );
          })}
        </div>
      );
    }
    return (
      <div />
    );
  }
}


export default ReviewList;
