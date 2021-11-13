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
    setTimeout(() => {
      window.location.reload(false);
    }, 500);
  }

  handleSubmit(e) {
    e.preventDefault();
    let review;
    if (this.props.formType === "Create") {
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
    if (!this.props.review) {
      return (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1 style={{ fontWeight: 700, fontSize: "24px", margin: "10px" }}>
            Session Expired
          </h1>
        </div>
      );
    }
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
                initialRating={this.state.rating}
                emptySymbol={
                  <img
                    src="https://atoz-seeds.s3.us-east-2.amazonaws.com/star_empty.png"
                    className="icon"
                  />
                }
                fullSymbol={
                  <img
                    src="https://atoz-seeds.s3.us-east-2.amazonaws.com/star_full.png"
                    className="icon"
                  />
                }
                onChange={(value) => {
                  this.setState({ rating: value });
                }}
              />
            </div>
            <div className="reviewLinebreak"></div>
            <div className="headLine">
              <div className="addHeadline">Add a headline</div>
              <input
                type="text"
                value={this.state.headline}
                placeholder="What's most important to know"
                className="headlinetext"
                onChange={this.update("headline")}
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
