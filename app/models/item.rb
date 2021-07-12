class Item < ApplicationRecord
    validates :item_name, :num_of_item_left, :item_price, :image_url, :descrption, presence: true

    has_one_attached :photo
end
