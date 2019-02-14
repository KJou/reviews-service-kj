import React from 'react';
import ReviewListEntry from './ReviewListEntry.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { reviewSummary } = this.props;
    return (
      <div>
        ReviewList:
        { reviewSummary.productId }
      </div>
    );
  }
}

export default ReviewList;
