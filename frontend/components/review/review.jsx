import React from 'react';
import { Link } from 'react-router-dom'

export default props => {
    let permission = () => null;
    if(props.currentUserId === props.user.id) {
        permission = () => (
            <>
                <div>
                    <button onClick={() => props.deleteReview(props.review.id)}>delete</button>
                </div>
                <div>
                    <Link to={`/items/${props.itemId}/${props.review.id}/edit`}><button>Edit review</button></Link>
                </div>
            </>
        )
    }
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
            <div>{permission()}</div>
        </div>
    )
};