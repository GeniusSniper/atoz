export const selectItem = ({ items }, itemId) => (
    items[itemId] || { reviewIds: [] }
);

export const selectReviewsForItem = ({ reviews }, item) => (
    item.reviewIds.map( reviewId => reviews[reviewId])
);

export const asArray = ({ items }) => (
    Object.keys(items).map(key => items[key])
);