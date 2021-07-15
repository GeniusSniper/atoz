import React from 'react';
import { Link } from 'react-router-dom'

export default props => {
    let permission = () => null;
    if(props.currentUserId === props.user.id) {
        permission = () => (
            <div className='permission'>
                <div>
                    <button onClick={() => props.deleteReview(props.review.id)}>delete</button>
                </div>
                &nbsp;
                <div>
                    <Link to={`/items/${props.itemId}/${props.review.id}/edit`}><button>Edit review</button></Link>
                </div>
            </div>
        )
    }
    return (
        <div className='eachUserReview'>
            <div className='eachReviewUsername'>
                {props.user.username}
            </div>
            <div>
                Rating: {props.review.rating}
            </div>
            <div>
                {props.review.body}
            </div>
            {permission()}
        </div>
    )
};