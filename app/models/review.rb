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
end
