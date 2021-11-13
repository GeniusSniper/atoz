import { connect } from "react-redux";
import { updateReview } from "../../actions/items_action";
import { errors } from "../../actions/session_action";

import ReviewForm from "./review_form";

const mst = (state, props) => {
  return {
    item: state.entities.items[props.match.params.itemId],
    errors: state.errors.session,
    review: state.entities.reviews[props.match.params.reviewId],
    formType: "Edit",
  };
};

const mdt = (dispatch) => ({
  // editReview: reviewId => dispatch(editReview(reviewId)),
  updateReview: (review) => dispatch(updateReview(review)),
  removeErrors: () => dispatch(errors())
});

export default connect(mst, mdt)(ReviewForm);
