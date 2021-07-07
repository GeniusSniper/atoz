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