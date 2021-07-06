# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

def create_random_item
    Item.create!(
      item_name: Faker::Commerce.product_name,
      item_price: rand(100),
      num_of_item_left: rand(100),
      image_url: 'item_img.png'
    )
end

ActiveRecord::Base.transaction do
    User.destroy_all
    User.reset_pk_sequence
    Item.destroy_all
    Item.reset_pk_sequence

    User.create!( username: '1234', password: '123456', email: 'demo@demo.com', address: '911')

    10.times{ create_random_item }
end

