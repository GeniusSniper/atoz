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

export const createReview = review => (
    $.ajax({
      method: 'POST',
      url: 'api/reviews',
      data: { review }
    })
);