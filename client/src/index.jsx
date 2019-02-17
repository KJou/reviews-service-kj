import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ReviewList from './components/ReviewList.jsx';

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
      <div className="App-reviewList">
        <ReviewList reviewSummary={reviewSummary} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
