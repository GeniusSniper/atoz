# class Cart < ApplicationRecord
#     validates :user_id, :userCart, presence: true

#     belongs_to :user, foreign_key: :user_id, class_name: :User

#     def addItem(item)
#         userCart.unshift(item)
#     end

#     def total
#     end

#     def clearItems
#         userCart = []
#     end
# end
