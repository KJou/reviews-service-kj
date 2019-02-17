import React from 'react';

const ReviewListEntry = ({ review }) => (
  <div className="ReviewListEntry-review">
    <div className="ReviewListEntry-review-left">
      <div className="ReviewListEntry-review-left-rating">
        { review.rating }
      </div>
      <div className="ReviewListEntry-review-left-headline">
        { review.headline }
      </div>
      <div className="ReviewListEntry-review-left-body">
        { review.body }
      </div>
      <div className="ReviewListEntry-review-left-username">
        { review.username }
      </div>
    </div>
    <div className="ReviewListEntry-review-right">
      <div className="ReviewListEntry-review-right-dateCreated">
        { review.dateCreated }
      </div>
      <div className="ReviewListEntry-review-right-fit">
        { review.fit }
      </div>
    </div>
  </div>
);

export default ReviewListEntry;
