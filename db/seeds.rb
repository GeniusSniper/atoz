# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# require 'open-uri'

# def create_random_item()
#     Item.create!(
#       item_name: Faker::Commerce.product_name,
#       item_price: rand(400),
#       num_of_item_left: rand(100),
#       image_url: 'https://atoz-seeds.s3.us-east-2.amazonaws.com/item_img.png'
#     )
#     # .photo.attach(io: URI.open('https://atoz-seeds.s3.us-east-2.amazonaws.com/item_img.png'), filename: 'item_img.png')
# end

User.destroy_all
User.reset_pk_sequence
Item.destroy_all
Item.reset_pk_sequence

User.create!( username: 'Demo', password: '******', email: 'demo@demo.com', address: 'Demo City')

# 10.times{ create_random_item() }
Item.create!( item_name: 'Cars', item_price: 287473.99, num_of_item_left: 10, 
image_url: ['https://atoz-seeds.s3.us-east-2.amazonaws.com/cars/pexels-photo-4157199.jpeg', 'https://atoz-seeds.s3.us-east-2.amazonaws.com/cars/pexels-photo-5288727.jpeg', 
'https://atoz-seeds.s3.us-east-2.amazonaws.com/cars/pexels-photo-6462662.jpg',
'https://atoz-seeds.s3.us-east-2.amazonaws.com/cars/pexels-photo-8664335.jpeg'], 
descrption: 'a four-wheeled road vehicle that is powered by an engine and is able to carry a small number of people.' );

Item.create!( item_name: 'Keyboard', item_price: 807.99, num_of_item_left: 48, 
image_url: ['https://atoz-seeds.s3.us-east-2.amazonaws.com/keyboard/photo-1544484647-725cbadff6cc.jpg',
'https://atoz-seeds.s3.us-east-2.amazonaws.com/keyboard/photo-1555532538-dcdbd01d373d.jpg',
'https://atoz-seeds.s3.us-east-2.amazonaws.com/keyboard/photo-1593879621460-076d8c3e2878.jpg'], 
descrption: "a thing that you might need but you can't live without it." );

Item.create!( item_name: 'Knife', item_price: 453.99, num_of_item_left: 127, 
image_url: ['https://atoz-seeds.s3.us-east-2.amazonaws.com/knife/pexels-photo-952366.jpeg',
'https://atoz-seeds.s3.us-east-2.amazonaws.com/knife/pexels-photo-952478.jpeg',
'https://atoz-seeds.s3.us-east-2.amazonaws.com/knife/pexels-photo-952479.jpeg'], 
descrption: "an instrument composed of a blade fixed into a handle, used for cutting or as a weapon." );

Item.create!( item_name: 'Plate', item_price: 10.99, num_of_item_left: 112, 
image_url: ['https://atoz-seeds.s3.us-east-2.amazonaws.com/plate/pexels-photo-1095550.jpeg',
'https://atoz-seeds.s3.us-east-2.amazonaws.com/plate/pexels-photo-1927314.jpeg',
'https://atoz-seeds.s3.us-east-2.amazonaws.com/plate/pexels-photo-2611817.jpeg'], 
descrption: "a flat dish, typically circular and made of china, from which food is eaten or served." );

Item.create!( item_name: 'Lamp', item_price: 17.99, num_of_item_left: 162, 
image_url: ['https://atoz-seeds.s3.us-east-2.amazonaws.com/lamp/pexels-photo-2233416.jpeg',
'https://atoz-seeds.s3.us-east-2.amazonaws.com/lamp/pexels-photo-414144.jpeg',
'https://atoz-seeds.s3.us-east-2.amazonaws.com/lamp/pexels-photo-943150.jpeg'], 
descrption: "an electrical device producing ultraviolet, infrared, or other radiation, used for therapeutic purposes." );

Item.create!( item_name: 'Watch', item_price: 1150.99, num_of_item_left: 84, 
image_url: ['https://atoz-seeds.s3.us-east-2.amazonaws.com/watches/pexels-photo-190819.jpeg',
'https://atoz-seeds.s3.us-east-2.amazonaws.com/watches/pexels-photo-209255.jpeg',
'https://atoz-seeds.s3.us-east-2.amazonaws.com/watches/pexels-photo-380782.jpeg'], 
descrption: "It's a timer to count how long until you could clock out" );

Item.create!( item_name: 'Soccer ball', item_price: 2.99, num_of_item_left: 124, 
image_url: ['https://atoz-seeds.s3.us-east-2.amazonaws.com/soccer/photo-1575361204480-aadea25e6e68.jpg',
'https://atoz-seeds.s3.us-east-2.amazonaws.com/soccer/photo-1589467785902-054ed88148d8.jpg',
'https://atoz-seeds.s3.us-east-2.amazonaws.com/soccer/photo-1616514169928-a1e40c6f791c.jpg'], 
descrption: "A ball used in sports that people kick it with" );