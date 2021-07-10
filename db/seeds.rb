# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

def create_random_item()
    Item.create!(
      item_name: Faker::Commerce.product_name,
      item_price: rand(400),
      num_of_item_left: rand(100),
      image_url: 'item_img.png'
    )
    # .photo.attach(io: URI.open('https://atoz-seeds.s3.us-east-2.amazonaws.com/item_img.png'), filename: 'item_img.png')
end

User.destroy_all
User.reset_pk_sequence
Item.destroy_all
Item.reset_pk_sequence

User.create!( username: 'Demo', password: '******', email: 'demo@demo.com', address: 'Demo City')

10.times{ create_random_item() }

