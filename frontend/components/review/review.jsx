import React from 'react';
// import EditReviewContainer from './edit_review_form_container';
import { Link } from 'react-router-dom'

export default props => {
    return (
        <div>
            <div>
                {props.user.username}
            </div>
            <div>
                Rating: {props.review.rating}
            </div>
            <div>
                {props.review.body}
            </div>
            <div>
                <button onClick={() => props.deleteReview(props.review.id)}>delete</button>
            </div>
            {/* <EditReviewContainer reviewId={props.review.id}/> */}
            <Link to={`/items/${props.itemId}/${props.review.id}/edit`}><button>Edit review</button></Link>
        </div>
    )
};