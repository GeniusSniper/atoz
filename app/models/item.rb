# == Schema Information
#
# Table name: items
#
#  id               :bigint           not null, primary key
#  item_name        :string           not null
#  item_price       :string           not null
#  num_of_item_left :integer          not null
#  descrption       :string           not null
#  image_url        :text             default([]), is an Array
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
class Item < ApplicationRecord
    validates :item_name, :num_of_item_left, :item_price, :image_url, :descrption, presence: true

    has_one_attached :photo
    has_many :reviews, foreign_key: :item_id, class_name: :Review
end
