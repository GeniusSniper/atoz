# == Schema Information
#
# Table name: items
#
#  id               :bigint           not null, primary key
#  item_name        :string           not null
#  item_price       :integer          not null
#  num_of_item_left :integer          not null
#  descrption       :string           not null
#  image_url        :text             default([]), is an Array
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
require 'test_helper'

class ItemTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
