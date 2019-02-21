import React from 'react';
import styled from 'styled-components';
import ReviewStars from './ReviewStars.jsx';

const ReviewListEntry = ({ review }) => {
  const ReviewListEntryWrapper = styled.div`
    border-top: 1px solid #e3e3e3;
    padding: 40px 0px 40px 0px;
  `;

  return (
    <ReviewListEntryWrapper>
      <div className="ReviewListEntry-review-left">
        <ReviewStars rating={review.rating} />
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
    </ReviewListEntryWrapper>
  );
};

export default ReviewListEntry;
