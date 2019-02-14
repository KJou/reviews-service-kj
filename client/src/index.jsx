import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReviewList from './components/ReviewList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewSummary: {},
      productId: 1,
    };
  }

  componentDidMount() {
    const { productId } = this.state;
    this.getReviewSummary(productId);
  }

  getReviewSummary(productId) {
    axios.get(`http://localhost:3003/${productId}/reviews`)
      .then((result) => {
        console.log(result.data);
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
      <div>
        <ReviewList reviewSummary={reviewSummary} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
