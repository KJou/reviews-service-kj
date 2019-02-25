import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import ReviewStars from './ReviewStars.jsx';


const ReviewListEntry = ({ review }) => {
  const ReviewListEntryWrapper = styled.div`
    border-top: 1px solid #e3e3e3;
    padding: 40px 0px 40px 0px;
    display: flex;
    font-size 13px;
  `;

  const LeftColumn = styled.div`
    flex: 1 1 auto;
    padding-right: 90px;
  `;

  const RightColumn = styled.div`
    flex: 0 0 220px;
  `;

  const ReviewHeadline = styled.div`
    font-weight: 700;
  `;

  const ReviewBody = styled.div`
    font-weight: 400;
    padding: 18px 0;
  `;

  const ReviewUser = styled.div`
  `;

  const ReviewDate = styled.div`
  `;

  const ReviewFit = styled.div`
    padding-top: 10px;
  `;

  const parseDate = () => {
    moment.locale('en');
    return moment(review.dateCreated).format('ll');
  }

  return (
    <ReviewListEntryWrapper>
      <LeftColumn>
        <ReviewStars rating={review.rating} />
        <ReviewHeadline>
          { review.headline }
        </ReviewHeadline>
        <ReviewBody>
          { review.body }
        </ReviewBody>
        <ReviewUser>
          { review.username }
        </ReviewUser>
      </LeftColumn>
      <RightColumn>
        <ReviewDate>
          { parseDate() }
        </ReviewDate>
        <ReviewFit>
          <b>Fit: </b>
          { review.fit }
        </ReviewFit>
      </RightColumn>
    </ReviewListEntryWrapper>
  );
};

export default ReviewListEntry;
