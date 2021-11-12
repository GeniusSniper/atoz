import React from "react";
import { withRouter } from "react-router-dom";
import Rating from "react-rating";

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
    if (this.props.formType === "create") {
      review = Object.assign({}, this.state, {
        item_id: parseInt(this.props.match.params.itemId),
      });
      this.props.createReview(review);
    } else {
      review = Object.assign({}, this.state, {
        item_id: parseInt(this.props.match.params.itemId),
        id: this.props.review.id,
      });
      this.props.updateReview(review);
    }
    this.navigateToItemShow();
  }

  update(property) {
    return (e) => this.setState({ [property]: e.currentTarget.value });
  }

  render() {
    document.title = "Review Your Purchases";
    return (
      <div className="reviewForm">
        <div className="centeredForm">
          <form onSubmit={this.handleSubmit} className="reviewFormPage">
            <div className="reviewFormTitle">
              {this.props.formType}&nbsp;Review
            </div>
            <div className="reviewLinebreak"></div>
            <div className="reviewFormRating">
              <div className="reviewFromRatingText">Rating</div>
              <Rating
                emptySymbol={
                  <img src="https://atoz-seeds.s3.us-east-2.amazonaws.com/star_empty.png" className="icon" />
                }
                fullSymbol={
                  <img src="https://atoz-seeds.s3.us-east-2.amazonaws.com/star_full.png" className="icon" />
                }
              />
              {/* <label>
                1
                <input
                  type="radio"
                  value={1}
                  onClick={this.update("rating")}
                  name="radioButton"
                />
              </label>
              <label>
                2
                <input
                  type="radio"
                  value={2}
                  onClick={this.update("rating")}
                  name="radioButton"
                />
              </label>
              <label>
                3
                <input
                  type="radio"
                  value={3}
                  onClick={this.update("rating")}
                  name="radioButton"
                />
              </label>
              <label>
                4
                <input
                  type="radio"
                  value={4}
                  onClick={this.update("rating")}
                  name="radioButton"
                />
              </label>
              <label>
                5
                <input
                  type="radio"
                  value={5}
                  onClick={this.update("rating")}
                  name="radioButton"
                />
              </label> */}
            </div>
            <div className="reviewLinebreak"></div>
            <div className="headLine">
              <div className="addHeadline">Add a headline</div>
              <input
                type="text"
                placeholder="What's most important to know"
                className="headlinetext"
              />
            </div>
            <div className="reviewLinebreak"></div>
            <div className="reviewFormComment">
              <div className="reviewAddText">Add a written review</div>
              <textarea
                cols="40"
                rows="15"
                value={this.state.body}
                onChange={this.update("body")}
                className="textarea"
                placeholder="What did you like or dislike? What did you use this product for?"
              />
            </div>
            <div className="reviewFormSubmitButton">
              <button className="reviewFormButton">Submit</button>
            </div>
          </form>
          <div>
            {/* <button onClick={this.navigateToItemShow} className='cancelReviewButton'>Cancel</button> */}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ReviewForm);
