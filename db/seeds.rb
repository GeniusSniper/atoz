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
Item.create!( item_name: 'Pilot Frixion Erasable Pens - 6 Pack (3 Black & 3 Blue Ink Pens Included) + 4 Bonus Refills - Frixion Clicker Erasable Pens Retractable Gel Ink Pen - Fine Point 0.7 mm Used for Rocketbook & Notebook', item_price: 15.97, num_of_item_left: 10, 
image_url: [], 
descrption: 'a four-wheeled road vehicle that is powered by an engine and is able to carry a small number of people.' );

Item.create!( item_name: 'Keyboard', item_price: 807.99, num_of_item_left: 48, 
image_url: ['https://atoz-seeds.s3.us-east-2.amazonaws.com/keyboard/photo-1544484647-725cbadff6cc.jpg',
'https://atoz-seeds.s3.us-east-2.amazonaws.com/keyboard/photo-1555532538-dcdbd01d373d.jpg',
'https://atoz-seeds.s3.us-east-2.amazonaws.com/keyboard/photo-1593879621460-076d8c3e2878.jpg'], 
descrption: "PILOT FRIXION CLICKER - This pen combines the ease of a retractable pen with Pilot's heat erasable thermo-sensitive gel ink. No wear or tear so you can erase & rewrite until it's right without ruining the page.
ERASABLE, RETRACTABLE, REFILLABLE - The FriXion gel ink pen writes smooth & erases clean. Available in a variety of vibrant ink colors: black, blue, red, turquoise, purple, navy, pink, & green.
WRITE & CREATE FEARLESSLY - If you love FriXion erasable ink pens & markers, you'll want to try Pilot's full line of erasable Clickers, ColorSticks, Fineliners, Colors Marker Pens, & Highlighters.
TRUSTED QUALITY - We've been making pens for over 100 years. Whether you're taking notes, stocking up on school or office supplies, or writing in a bullet journal, Pilot has the perfect pen for you!
POWER TO THE PEN - Pilot makes exceptional writing instruments to suit all your needs. We have fountain, ballpoint, retractable, erasable & gel ink pens, whiteboard markers & more for every writing style.
" );

Item.create!( item_name: 'The Happy Planner Disney Villains Planner Sticker Pack for Calendars, Journals and Projects - Multi-Color, Easy Peel - Disney Villains Theme – Classic Sized 30 Sheets, 322 Stickers', item_price: 26.99, num_of_item_left: 127, 
image_url: [], 
descrption: "STICKER STYLE: Not impressed? What if we told you this sticker book comes with 322 stickers? This Disney Villains Happy Planner Value Pack Sticker Book (Dimensions: 9” x 0.25” x 4.75) includes 30 sticker sheets. It contains an array of different sticker styles that can be used in your monthly calendar and weekly planner spreads. Decorate your calendar with wicked designs or use functional stickers to keep you on track with reminders for important events and appointments.
THEME: Created for the Disney Villains collection, it features watercolor graphics and artwork featuring Malificent, Hades, Queen of Hearts, Ursula, The Queen, Cruella, Scar, and Jafar. It includes an array of iridescent stickers, matte paper stickers, and icon stickers.
ORGANIZATION & CUSTOMIZATION: Use the stickers to note special reminders, events, birthdays and celebrations. Box stickers are ideal for important notices and the matte paper design makes it easy to stick into planners and write messages.
PLAN HAPPY: Planning doesn’t have to be boring. Make an event out of planning monthly calendars and weekly spreads. Stickers are an easy way to customize and bring your plans to life.
CREATIVITY: Get creative and use these stickers for scrapbooking, bullet journaling, or DIY crafts like card making and customized gift tags. Explore the endless ways to use stickers; you’ll surely find a way to use them all!" );

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