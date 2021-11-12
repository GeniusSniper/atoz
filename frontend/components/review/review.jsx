import React from "react";
import { Link } from "react-router-dom";

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
            delete
          </button>
        </div>
        &nbsp;
        <div>
          <Link to={`/items/${props.itemId}/${props.review.id}/edit`}>
            <button className="reviewButtons">Edit review</button>
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
        <div>Rating: {props.review.rating}</div>
        <div className="rewviewTitle"></div>
      </div>
      <div className="reviewBody">{props.review.body}</div>
      {permission()}
    </div>
  );
};
