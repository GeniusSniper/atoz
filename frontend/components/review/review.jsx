import React from "react";
import { Link } from "react-router-dom";
import Rating from "react-rating";

export default (props) => {
  let permission = () => null;
  if (props.currentUserId === props.user.id) {
    permission = () => (
      <div className="permission">
        <div>
          <button
            onClick={() => props.deleteReview(props.review.id)}
            className="reviewButtons"
          >
            Delete
          </button>
        </div>
        &nbsp;
        <div>
          <Link to={`/items/${props.itemId}/${props.review.id}/edit`}>
            <button className="reviewButtons">Edit Review</button>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="eachUserReview">
      <div className="reviewUsernameSession">
        <div className="reviewUserAvatar"></div>
        <div className="eachReviewUsername">{props.user.username}</div>
      </div>
      <div className="reviewRaitingSession">
        <div style={{marginRight: '10px'}}>Rating: </div>
        <Rating
          initialRating={props.review.rating}
          emptySymbol={
            <img
              src="https://atoz-seeds.s3.us-east-2.amazonaws.com/star_empty.png"
              className="icon" style={{height: '20px'}}
            />
          }
          fullSymbol={
            <img
              src="https://atoz-seeds.s3.us-east-2.amazonaws.com/star_full.png"
              className="icon" style={{height: '20px'}}
            />
          }
          readonly
        />
        <div className="rewviewTitle">{props.review.headline}</div>
      </div>
      <div className="reviewBody">{props.review.body}</div>
      {permission()}
    </div>
  );
};
