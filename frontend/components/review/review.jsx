import React from 'react';
import EditReviewContainer from './edit_review_form_cantainer';

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
            {/* <div>
                
            </div> */}
        </div>
    )
};