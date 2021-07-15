import React from 'react';
import { withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.review;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToItemShow = this.navigateToItemShow.bind(this);
  }

  navigateToItemShow() {
    this.props.history.push(`/items/${this.props.match.params.itemId}`);
  }

  handleSubmit(e) {
    e.preventDefault();
    let review;
    if(this.props.formType === 'create'){
      review = Object.assign({}, this.state, {
        item_id: parseInt(this.props.match.params.itemId)
      });
      this.props.createReview(review);
    } else {
      review = Object.assign({}, this.state, {
        item_id: parseInt(this.props.match.params.itemId),
        id: this.props.review.id
      });
      this.props.updateReview(review);
    }
    this.navigateToItemShow();
    // this.setState({rating: 5, body: ''});
  }

  update(property) {
    return e => this.setState({ [property]: e.currentTarget.value });
  }

  render() {
    return (
      <div className="review-form">
        <form onSubmit={this.handleSubmit}>
          <label>Rating</label>
          <br/>
          <input
            type="number"
            value={this.state.rating}
            onChange={this.update("rating")}
          />
          <br/>

          <label>Comment</label>
          <br/>

          <textarea
            cols="30"
            rows="10"
            value={this.state.body}
            onChange={this.update("body")}
          />
          <br/>
          <input type="submit" />
        </form>
        <button onClick={this.navigateToItemShow}>Cancel</button>
      </div>
    );
 }
}

export default withRouter(ReviewForm);
