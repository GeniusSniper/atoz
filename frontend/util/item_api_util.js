export const allItems = () => (
    $.ajax({
        url: 'api/items'
    })
);

export const needItem = itemId => (
    $.ajax({
        url: `api/items/${itemId}`
    })
);

// export const showReview = reviewId => (
//     $.ajax({
//         url: `api/reviews/${reviewId}`
//     })
// )

export const createReview = review => (
    $.ajax({
      method: 'POST',
      url: 'api/reviews',
      data: { review }
    })
);

// export const editReview = reviewId => (
//     $.ajax({
//         url: `api/reviews/${reviewId}/edit`
//     })
// )

export const updateReview = review => (
    $.ajax({
        method: 'patch',
        url: `api/reviews/${review.id}`,
        data: { review }
    })
)

export const deleteReview = reviewId => (
    $.ajax({
        method: 'delete',
        url: `api/reviews/${reviewId}`
    })
)