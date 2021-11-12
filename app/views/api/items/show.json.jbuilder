json.item do
    json.partial! "api/items/item", item: @item
    json.reviewIds @item.reviews.pluck(:id)
  end
  
  @item.reviews.includes(:user).each do |review|
    json.reviews do
      json.set! review.id do
        json.partial! 'api/reviews/review', review: review
      end
    end
  
    json.users do
      json.set! review.user.id do
        json.extract! review.user, :id, :username, :cart
      end
    end
  end
  