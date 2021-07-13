# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  rating     :integer          not null
#  body       :string           default(""), not null
#  item_id    :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Review < ApplicationRecord
    validates :rating, inclusion: { in: (1..5) }
    validates :rating, :rating, :body, :user_id, :item_id, presence: true

    belongs_to :item, foreign_key: :item_id, class_name: :Item
    belongs_to :user, foreign_key: :user_id, class_name: :User
end
