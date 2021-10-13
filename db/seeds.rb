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
Item.create!( item_name: `Pilot Frixion Erasable Pens - 6 Pack (3 Black & 3 Blue Ink Pens Included) + 4 Bonus Refills - Frixion Clicker Erasable Pens Retractable Gel Ink Pen - Fine Point 0.7 mm Used for Rocketbook & Notebook`, item_price: 15.97, num_of_item_left: 10, 
image_url: [], 
descrption: `PILOT FRIXION CLICKER - This pen combines the ease of a retractable pen with Pilot's heat erasable thermo-sensitive gel ink. No wear or tear so you can erase & rewrite until it's right without ruining the page.
ERASABLE, RETRACTABLE, REFILLABLE - The FriXion gel ink pen writes smooth & erases clean. Available in a variety of vibrant ink colors: black, blue, red, turquoise, purple, navy, pink, & green.
WRITE & CREATE FEARLESSLY - If you love FriXion erasable ink pens & markers, you'll want to try Pilot's full line of erasable Clickers, ColorSticks, Fineliners, Colors Marker Pens, & Highlighters.
TRUSTED QUALITY - We've been making pens for over 100 years. Whether you're taking notes, stocking up on school or office supplies, or writing in a bullet journal, Pilot has the perfect pen for you!
POWER TO THE PEN - Pilot makes exceptional writing instruments to suit all your needs. We have fountain, ballpoint, retractable, erasable & gel ink pens, whiteboard markers & more for every writing style.` );

Item.create!( item_name: `EKSA Gaming Headset with 7.1 Surround Sound Stereo, PS4 USB Headphones with Noise Canceling Mic & RGB Light, Compatible with PC, PS4 Console, Laptop (Blue)
Visit the EKSA Store`, item_price: 35.99, num_of_item_left: 48, 
image_url: [''], 
descrption: `[Compatibility]: Professional gaming headset for PC gamers, compatibility with PC (Win 7, Win 8, Win10), PS4 Console, laptops, and other devices with USB audio port.
[7.1 Surround Sound]: EKSA gaming headset equip built-in USB audio sound chip with 7.1 surround sound. Combine with 50mm magnetic neodymium driver, create an immersive gaming experience with stereo surround sound in the game. No driver required, very easy and convenient to use.
[Noise-Cancelling Mic & One Key Mute Function]: High sensitive microphone with omnidirectional noise reduction tech, reduces distracting background noise, to collect your voice clearly. easy-to-use volume adjustment and one key Mic mute switch, easy for your game operation. And noise-cancelling micphone guarantee loud & hig quality voice talks in game or online chat.
[Ergonomic design]: Designed for all-day comfort. With soft memory protein earmuffs on both side, you won't feel any discomfort while wearing this 7.1 gaming headphones even for long time gaming. The headband was designed for balanced weight distribution and reduced clamping force to maximize comfort during lengthy gaming sessions.
[2 Years Warranty]: EKSA gaming headsets are under strict quality inspection on each production line. We offer 24-hour customer support and 2 years warranty. We will make our greatest effort to take responsibility for your shopping experience.` );

Item.create!( item_name: `The Happy Planner Disney Villains Planner Sticker Pack for Calendars, Journals and Projects - Multi-Color, Easy Peel - Disney Villains Theme – Classic Sized 30 Sheets, 322 Stickers`, item_price: 26.99, num_of_item_left: 127, 
image_url: [], 
descrption: `STICKER STYLE: Not impressed? What if we told you this sticker book comes with 322 stickers? This Disney Villains Happy Planner Value Pack Sticker Book (Dimensions: 9” x 0.25” x 4.75) includes 30 sticker sheets. It contains an array of different sticker styles that can be used in your monthly calendar and weekly planner spreads. Decorate your calendar with wicked designs or use functional stickers to keep you on track with reminders for important events and appointments.
THEME: Created for the Disney Villains collection, it features watercolor graphics and artwork featuring Malificent, Hades, Queen of Hearts, Ursula, The Queen, Cruella, Scar, and Jafar. It includes an array of iridescent stickers, matte paper stickers, and icon stickers.
ORGANIZATION & CUSTOMIZATION: Use the stickers to note special reminders, events, birthdays and celebrations. Box stickers are ideal for important notices and the matte paper design makes it easy to stick into planners and write messages.
PLAN HAPPY: Planning doesn’t have to be boring. Make an event out of planning monthly calendars and weekly spreads. Stickers are an easy way to customize and bring your plans to life.
CREATIVITY: Get creative and use these stickers for scrapbooking, bullet journaling, or DIY crafts like card making and customized gift tags. Explore the endless ways to use stickers; you’ll surely find a way to use them all!` );

Item.create!( item_name: `Canon PIXMA TR4720 All-in-One Wireless Printer for Home use, with Auto Document Feeder, Mobile Printing and Built-in Fax, Black`, item_price: 99.99, num_of_item_left: 112, 
image_url: [], 
descrption: `PRINT, COPY, SCAN, FAX: The PIXMA TR4720 is a true 4-in-1 printer that is compact, versatile and easy-to-use.
EASY SETUP: Enjoy simple setup through the Canon PRINT Inkjet/SELPHY app[1].
EASY TO INSTALL: Designed for easy ink cartridge installation and replacement.
FRONT PAPER TRAY: A fast and easy to load front paper tray with 100 sheet plain paper capacity.
QUALITY DOCUMENTS AND PHOTOS: Produce quality documents, photos and boarderless[11] prints up to 8.5 x 11
For numbers listed in product description see “specification sheet” in technical specification section below` );

Item.create!( item_name: `SAMSUNG 980 PRO 1TB PCIe NVMe Gen4 Internal Gaming SSD M.2 (MZ-V8P1T0B)`, item_price: 189.99, num_of_item_left: 162, 
image_url: [''], 
descrption: `NEXT-LEVEL SSD PERFORMANCE: Unleash the power of Samsung 980 PRO PCIe 4.0 NVMe SSD for next-level computing
MAXIMUM SPEED: 980 PRO is raising the bar for NVMe SSDs, delivering read speeds up to 7,000 MB s
A WINNING COMBINATION: Designed for hardcore gamers and tech-savvy users, the 980 PRO offers high-performance bandwidth and throughput for heavy-duty applications in gaming, graphics, data analytics, and more
EFFICIENT M.2 SSD: The 980 PRO comes in a compact M.2 2280 form factor, thus optimizing power efficiency, making it ideal for building high-performance computing systems
RELIABLE THERMAL CONTROL: To ensure stable performance, the 980 PRO uses nickel coating to help manage the controller's heat level and a heat spreader label to deliver effective thermal control of the NAND chip
SMART THERMAL SOLUTION: Embedded with Samsung's cutting-edge thermal control algorithm, 980 PRO manages heat on its own to deliver durable and reliable performance, while minimizing performance fluctuations during extended usage
SAMSUNG MAGICIAN: A suite of user-friendly tools helps keep your drive up to date, monitor drive health and speed, and even boost performance
FLASH MEMORY BRAND: All firmware and components, including Samsung's world-renowned DRAM and NAND, are produced in-house, allowing end-to-end integration for quality you can trust` );

Item.create!( item_name: `Seagate Storage Expansion Card for Xbox Series X|S 1TB Solid State Drive - NVMe Expansion SSD for Xbox Series X|S (STJR1000400)`, item_price: 219.99, num_of_item_left: 162, 
image_url: [''], 
descrption: `SEAMLESS GAMEPLAY: Designed in partnership with Xbox to seamlessly play Xbox Series X|S games from the internal SSD or the expansion card without sacrificing graphics, latency, load times, or framerates
HIGH CAPACITY: 1TB of storage increases the overall capacity of the Xbox Series X|S—collect thousands of games across four generations of Xbox without sacrificing performance
EXCLUSIVE TO XBOX: The only available expansion card that replicates the Xbox Velocity Architecture —providing faster load times, richer environments, and more immersive gameplay
QUICK RESUME: Switch between multiple titles in seconds—directly from the internal SSD or the expansion card` );

Item.create!( item_name: `AMD Ryzen 7 5700G 8-Core, 16-Thread Unlocked Desktop Processor with Radeon Graphics`, item_price: 324.99, num_of_item_left: 162, 
image_url: [''], 
descrption: `Play some of the most popular games at 1080p with the fastest processor graphics in the world, no graphics card required
8 Cores and 16 processing threads, bundled with the AMD Wraith Stealth cooler
4.6 GHz Max Boost, unlocked for overclocking, 20 MB cache, DDR4-3200 support
For the advanced Socket AM4 platform` );

Item.create!( item_name: `ZOTAC Gaming GeForce RTX 3060 Ti Twin Edge OC LHR 8GB GDDR6 256-bit 14 Gbps PCIE 4.0 Gaming Graphics Card, IceStorm 2.0 Advanced Cooling, Active Fan Control, Freeze Fan Stop ZT-A30610H-10MLHR`, item_price: 879.99, num_of_item_left: 162, 
image_url: [''], 
descrption: `NVIDIA Ampere architecture, 2nd Gen Ray Tracing Cores, 3rd Gen Tensor Cores
Boost Clock 1695 MHz, 8GB 256-bit GDDR6, 14 Gbps, PCIE 4.0; Low Hash Rate (LHR) 25 MH/s ETH hash rate (est.)
White LED Logo Lighting, IceStorm 2.0 Advanced Cooling, Active Fan Control, Freeze Fan Stop, Metal Backplate
8K Ready, 4 Display Ready, HDCP 2.3, VR Ready
3 x DisplayPort 1.4a, 1 x HDMI 2.1, DirectX 12 Ultimate, Vulkan RT API, OpenGL 4.6` );

Item.create!( item_name: `AMD Ryzen 9 5950X 16-core, 32-Thread Unlocked Desktop Processor`, item_price: 769.00, num_of_item_left: 162, 
image_url: [''], 
descrption: `The best processor for gamers meets the best processor for creators, with 16 cores and 32 processing threads
Can deliver elite 100+ FPS performance in the world's most popular games
Cooler not included, liquid cooler recommended
4.9 GHz Max Boost, unlocked for overclocking, 72 MB of cache, DDR-3200 support
For the advanced Socket AM4 platform, can support PCIe 4.0 on X570 and B550 motherboards` );

Item.create!( item_name: `Seeed Studio A205 Carrier Board for Jetson Nano, Jetson Xavier NX with Compact Size and Rich Ports. (6 CSI Camera, 2 HDMI, 5 SATA, M.2 Key E Supported etc.)`, item_price: 599.00, num_of_item_left: 162, 
image_url: [''], 
descrption: `🪐【Multi-Interfaces】A205 is a high-performance, interface rich Jetson Nano / Xavier NX compatible carrier board, providing HDMI 2.0, Gigabit Ethernet, USB3.0, USB 2.0 (w / OTG function) m.2 key ewifi / BT, m.2 key m, SATA, CSI camera, RS232, SD card, can, PIO, I2C, I2S fans and other rich peripheral interfaces are suitable for environments with strict environmental requirements, complicate real-time vision computation.
🪐【Applications】This carrier board could support JetPack, which includes a board support package (BSP), Linux OS, cuDNN, and TensorRT software libraries for deep learning, computer vision, GPU computing, multimedia processing, and much more. With its multiple camera connectors, it is suitable for complicate AI graphical application such as Automated Optical Inspection, In Video Action, Robot controlAOI, 3D modeling, Drone, parallel computing for Computer vision.
🪐【Notice】This carrier board only works with Jetson Nano Module or Xavier NX module.` );

Item.create!( item_name: `DIYmalls 3.2 inch TFT LCD Mega Shield Touch Screen Expansion Board for Arduino Mega 2560`, item_price: 9.87, num_of_item_left: 162, 
image_url: [''], 
descrption: `The 3.2 tft lcd expansion board is compatible with arduino mega 2560
With tft lcd shield, you can use 3.2 touch screen with mega more conveniently
This is 3.2" tft lcd for the shield, https://www.amazon.com/dp/B086ZK6VG5
You can buy more touch screen here, https://www.amazon.com/nextion
If you have any problem, please contact seller as follow: click "DIYmalls"(you can find "Sold by DIYmalls" under Buy Now button), in the new page, click "Ask a question".` );

Item.create!( item_name: `ELEGOO Mega R3 Project The Most Complete Ultimate Starter Kit w/ TUTORIAL Compatible with Arduino IDE`, item_price: 59.99, num_of_item_left: 162, 
image_url: [''], 
descrption: `The MEGA complete starter kit with more than 200pcs components, premium quality and 100% Compatible with Arduino IDE
Free pdf tutorial in the cd (more than 35 lessons)
Lcd1602 module and gy-521 sensor module with pin header ( no need to solder by yourself)
Nice package with clear listing and surprise including a nice small box to keep the widget such as LED, IC, buttons, diodes, etc.
We have always cared about the customer experience and improve the product function details` );

Item.create!( item_name: `occer 12x25 Compact Binoculars with Clear Low Light Vision, Large Eyepiece Waterproof Binocular for Adults Kids,High Power Easy Focus Binoculars for Bird Watching,Outdoor Hunting,Travel,Sightseeing`, item_price: 30.17, num_of_item_left: 162, 
image_url: [''], 
descrption: `【HIGH-POWERED LARGE EYEPIECE BINOCULARS】 This binoculars has 12x magnification, 25mm objective lens and wide field of view, 273ft/1000yds, letting you look farther and see wider. Coating with FMC Broadband coating and premium BAK4 prism, it ensure imaging verisimilar.
【ADJUSTABLE EYE CUPS FIT EYEGLASS WEARERS OR NOT】The binocs can be pull down the rubber eyepieces and more fit the glasses wearer, getting close to lens and see easily. The long eye relief combined with large eyepiece give you a comfortable viewing while wearing sunglasses or eye glasses. For those who do not wear glasses, will gain more focused slight and feel more easeful through rising eye cups. The compact binoculars has 15mm large eyepieces, can see more clear image than other binoculars.
【FMC BROADBAND COATING TECHNOLOGY】The lightweight cruise binoculars is cover with BAK4 prism texture. The objective lens use optical FMC multilayer broadband green film, and the eyepiece-optical is made of blue FMC coating. All design ensure to provide a good image and make you have a amazing experience.
【PORTABLE, COMPACT AND SMALL BINOCULARS DESIGN】 One hand can be mastered when you use the birding binoculars for opera,bird watching camping, traveling,wildlife watching,football games,cruise or other outside activity, the low light night vision goggles(Not for completely dark night) is more convenient for using and carrying.
【DURABLE AND LIFE WATERPROOF, COMFORTABLE TOUCH】 The binoculars are made of ABS plastic and it also come with a cruise binocular strap, you can use this item in different situations. And rubber armor is made for secure grip.The pocket size binoculars is not only suitable for men and women,but also suitable for kids.It is wonderful to be a gift on Father's Day and Children's Day.` );

Item.create!( item_name: `WYZE Cam Outdoor Starter Bundle (Includes Base Station and 1 Camera), 1080p HD Indoor/Outdoor Wire-Free Smart Home Camera with Night Vision, 2-Way Audio, Works with Alexa & Google Assistant, white`, item_price: 69.98, num_of_item_left: 162, 
image_url: [''], 
descrption: `Cover every corner of your home: Low profile base station; Connect up to 4 cameras to a single base station and view all video streams in the Wyze app; This starter bundle includes once Base Station and one camera
Stand up to any weather: IP65 weather resistant; Bring on the downpours, blizzards, and heatwaves; Wyze Cam Outdoor is built from the ground-up to be a workhorse in even the harshest conditions
Go where wires can’t: Wire-free & battery powered; Mount to the outside of your home or in your trees without running wire or searching for outlets; 2x-2,600 mAh integrated rechargeable batteries last from 3-6 months based on normal usage
Seize the day, Illuminate the night: 1080P Full HD with Night Vision; Crisp video recording and live streaming with 25 ft, yard-illuminating night vision let you see every detail on a face or whisker on a snout
See who’s coming and going: Capture people and animals with 12-second motion-activated video recordings saved automatically to the cloud for 14-days free; Motion detection senses body heat using passive infrared (PIR) which reduces false alerts` );

Item.create!( item_name: `THISWORX Car Vacuum Cleaner - Portable, High Power, Handheld Vacuums w/ 3 Attachments, 16 Ft Cord & Bag - 12v, Auto Accessories Kit for Interior Detailing - Black`, item_price: 35.99, num_of_item_left: 162, 
image_url: [''], 
descrption: `Practical: A mini vacuum for car or truck that is compact, lightweight (2.4 lbs), and easy to use. The large dust bin capacity is ready for ash, dust, or drive-thru food spills. A fully loaded interior car detailing kit housed in an ergonomic design.
Effective: Made for on-the-go use and to solve out-of-reach problems. A very sandy day at the beach? A coat of dog hair? The portable vacuum cleaner for car is designed to solve problems.
Powerful: The cyclonic force and strong suction of the 106w motor will terminate any dirt or debris; say goodbye to hard-to-reach crumbs stuck under the driver’s seat. Our mini car vacuum even has a top of the line washable HEPA filter.
Interior Car Cleaning Kit Includes: 3 attachments (flathead, extendable, or brush nozzle) for detailing, carry bag, filter brush, and spare HEPA filter. Must have car accessories for men or women; these gadgets will keep the interior cute and tidy.
Convenient: Is the battery always dying when you need a car vac? These truck accessories for men & women use the 12v aux outlet for power. The 16 foot cord gives you the slack you need to clean the backseats or trunk without a snag.` );

Item.create!( item_name: `Rain-X RX30212 Weatherbeater Wiper Blade - 12-Inches - (Pack of 1)`, item_price: 11.98 , num_of_item_left: 162, 
image_url: [''], 
descrption: `Long lasting durability defined by a galvanized steel frame that prevents rust and corrosion
All natural squeegee rubber resists cracking, splitting and tearing caused by heat, cold, windshield wiper fluid and salt
High quality traditional blade that meets or exceeds all original equipment manufacturers' standards
Quick and easy to install with pre-installed small j-hook adapter and contains multi-adapter for side pin, large j-hook and bayonet wiper blade arms
Provides a smooth, clean, streak-free wipe by using embedded friction reducers and multiple pressure points` );

Item.create!( item_name: `Cleaning Gel for Car, Car Cleaning Kit Universal Detailing Automotive Dust Car Crevice Cleaner Auto Air Vent Interior Detail Removal Putty Cleaning Keyboard Cleaner for Car Vents, PC, Laptops, Cameras`, item_price: 6.99 , num_of_item_left: 162, 
image_url: [''], 
descrption: `PERFECT CAR CLEANING TOOL: Cleaning gel is designed to clean car air vents, steering wheels, console panel, storage bins, cup holder, door handles, dashboards and other other hard-to-reach spaces.
EASY TO USE: Push car cleaning gel into any little cracks, press car vent cleaner on and the dust would be carried away. You can also press the keyboard cleaner slightly on the keyboard surface and then pull out slowly, the dust would be carried away with the cleaning gel. (Note: don't press the cleaning gel too hard, especially on mechanical keyboard).
ECO-FRIENDLY: This keyboard cleaner is made of cleaning gel, smells sweet with lightly fragrance. The car cleaning kit can easily pick up dust.
REUSABLE: This Auto car detailing cleaning gel can be used for multiple times until the gel turns to black. Please put the gel into the sealed box after use and store it in a cool dry place. DO NOT use car vent cleaner to wipe the cellphone screen or computer monitor. (NOTE: don’t wash the universal cleaning gel with water.)
MULTIPLE USES: The Automotive dust clenging gel can not only clean the car vents, dashboard vents, gear shifts, knobs, door handles, air vents, CD slots, cup holders, keyholes,but also the home and office, PC computer keyboard, printer, cell phone, calculator, TV remote and furniture. The suitable surface must be water resistant, or the dust removal for car would stick to it.` );

Item.create!( item_name: `AstroAI Air Compressor Tire Inflator Portable Air Pump for Car Tires 12V DC Auto Tire Pump with Digital Pressure Gauge, 100PSI with Emergency LED Light for Car, Bicycle, Balloons and Other Inflatables`, item_price: 29.99 , num_of_item_left: 162, 
image_url: [''], 
descrption: `FAST INFLATION & ADVANCED ACCURACY: High-quality materials were sourced for this tire inflator as it can pump up your car's tires with 35 L/Min, it can inflate the 195/55/R15 car tire from 0 to 35psi under 5 minutes. Professionally calibrated to always return a reading within 1.5% of the pressure of your tire. Please NOTE that after 10-15 minutes of continuous use, let the air compressor rest and cool for an equal amount of time at a minimum before continuing use.
PROGRAMMABLE INFLATION: Use the "M" button to set your desired pressure unit, and then press the "+" and "-" buttons to set the desired pressure. The air compressor will automatically shut off when it reaches the pre-set pressure (Please make sure the pressure you set is higher than the current pressure of your tire).
PRODUCT HIGHLIGHTS: One-click to change pressure units among PSI, kPa, BAR and KG/CM; Large white backlight LCD screen makes it easy to read even in the dark; Equipped with integrated LED flashlight with independent switch control for emergency use; 12V 120W 10ft (3.05 meters) long heavy-duty car cigarette lighter cord makes it convenient to use
WIDE RANGE OF APPLICATIONS: 3 Nozzles and Extra Fuse Included. Inflates any Schrader valve on cars, SUVs, motorcycles, and bicycles; the included accessories quickly inflate balls, air pillows, cushions, balloons and mattresses. NOTE: This pump is NOT intended for use with high pressure or large volume applications like pools and Inflatable canoe
BUY WITH CONFIDENCE: Easily stow the compressor away in your car or garage and it will be ready to use at a moment’s notice. Package includes 1* digital air compressor, 1* Replacement Fuse, 3* Nozzle Adapters, 1* Valve Extender, 1* Quick Connector, 1* Screw Rotation Attach, 1* User Manual; If you have any questions or concerns, please feel free to contact us.` );

Item.create!( item_name: `Sun Joe SWJ803E 10 inch 8.0 Amp Electric Multi-Angle Pole Chain Saw, Green
`, item_price: 57.99 , num_of_item_left: 162, 
image_url: [''], 
descrption: `Questions, Text 563563 to chat directly with a Sun Joe expert
VERSATILE: Ideal for cutting overhanging limbs and thin logs
TELESCOPING: Pole extends from 5. 8 ft. To 8. 8 ft. for up to 14 ft. overhead reach
MULTI-ANGLE: Head adjusts from 0° to 30°
POWERFUL: 8-amp motor cuts branches up to 9. 5-Inches thick` );

Item.create!( item_name: `WORX WG509 12 Amp TRIVAC 3-in-1 Electric Leaf Blower with All Metal Mulching System`, item_price: 74.99 , num_of_item_left: 162, 
image_url: [''], 
descrption: `[LEAF BLOWER, MULCHER & VACUUM] Yard work doesn’t stand a chance with this 3-in-1. And it’s fun to use. Leaves and debris on your lawn won’t be there for long
[QUICKLY SWITCH MODES] Changes from leaf blower to vacuum mode and back again with just the flip of a switch. No tools needed, just you and your Worx TRIVAC
[METAL MULCHER] The metal impeller cuts in two stages, chopping leaves down to an 18:1 mulch ratio – that’s 18 bags of leaves mulched into 1
[2 SPEEDS FOR DIFFERENT JOBS] 80 mph to 210 mph and 350 cfm. Go slow for pavement or tight corners. Dial it up to 210 on the open lawn
[DO IT YOURSELF. DO IT BETTER. DO IT WITH WORX.] WORX tools are engineered with cutting-edge technology, and above modern efficiency standards, so you can build a cost-effective tool collection that’s been designed to last
[ONE-HANDED OPERATION] Believe it or not, the Worx Trivac is designed to be controlled with just one hand. It’s only 8.6 lbs. in blower mode, and the ergonomic design funnels the wind in a way that’s easy to handle
[GET HARD TO REACH PLACES] The clever tube design curls up at the lip to get under lawn fixtures and landscaping elements. Perfect for when you’re in vacuum mode` );

Item.create!( item_name: `Little Giant Ladders, Flip-N-Lite, 5-Foot, Stepladder, Aluminum, Type 1A, 300 lbs Rated (15273-001)`, item_price: 75.74 , num_of_item_left: 162, 
image_url: [''], 
descrption: `Comfortable standing platform makes the Flip-N-Lite ideal for long-term usage.
Extra-wide rungs prevent foot fatigue.
Lightweight aluminum stepladder is easy to transport, set up and take down.
The Flip-N-Lite meets or exceeds all OSHA and ANSI standards and is Type IA rated to hold 300 lbs.` );

Item.create!( item_name: `Mechanix Wear: The Original Work Gloves (XXX-Large, Black)`, item_price: 10.49 , num_of_item_left: 162, 
image_url: [''], 
descrption: `Form-fitting TrekDry helps keep hands cool and comfortable.
Flexible Thermal Plastic Rubber (TPR) closure provides a secure fit to the wrist.
Industrial grade hook and loop.
Seamless synthetic leather palm provides optimal dexterity.
Machine washable.
` );

Item.create!( item_name: `Niskite Kids Toys Stem Dinosaur Toy: Take Apart Building Dinosaur Toys for Kids 5-7| Learning Educational Construction Toys for 3 4 5 6 Year Old Boys| Birthday Gifts for Boys Girls Age 3-8`, item_price: 14.99, num_of_item_left: 162, 
image_url: [''], 
descrption: `【Take Apart Dinosaur Toys For Kids】- Three dinosaur toys includes Tyrannosaurus Rex,Triceratops, Centrosaurus canbe taken apart and assembled.Simulation design and clear textures make dinosaurs more realistic.
【Educational STEM Kids Toys 】- This construction toys will improve hand eye coordination, fine motor skills, logic and problem-solving skills. It also encourages patience and a taste of engineering at a very early age.
【Fun Building Toys】- All the dinosaur accessories need to be assembled by kids themselves. Dinosaurs can move the joints of the head, hands and feet to swing the body, forming various fighting poses is more interesting and let children recognize the Jurassic world.
【Safe Dinausors Toys For Boys】- Designed with high quality and durable non-toxic thick plastic.Smooth edges and right size is suitable for children to build up.All our dinosaur toys are certified to meet US toy safety standards and ensure it safe for kids toys.
【Gifts Idea For 3-8 Year Old Boys】- Packed with beautiful gift box.Great birthday or christmas gifts for your kids age 3 4 5 6 7 8 who loves both dinosaur and building toys.
` );

Item.create!( item_name: `Award Winning Hape Dynamo Kid's Wooden Domino Set Colorful, standart`, item_price: 29.89 , num_of_item_left: 162, 
image_url: [''], 
descrption: `ENDLESS DOMINO RACING FUN: Build your desired domino race track with over 100 pieces of colorful wooden blocks
ENCOURAGES STEM DEVELOPMENT: Designed to engage kids in their early STEM development, the Dynamo Dominoes encourages children’s spatial thinking abilities, color recognition and will keep your little engineers coming back for more fun
UNIQUE FEATURES: Special features include a bridge, a bell and assorted tricks that add more drama to the domino racing game
SAFE TO PLAY WITH: These wooden domino pieces are finished with non-toxic paints which are safe and won’t fade. The dominos are made of high-quality wood which mean they are a toy for life
AWARD WINNING DOMINO SET: Proud recipient of the Oppenheim Toy Portfolio Gold Seal Award in 2015, and of a German Consumer Award` );

Item.create!( item_name: `Lulu Home 12 Pack Refill Bubble Solution, 4 oz Bubble Blowing Bottles with Blow Wands for Kids Graduation Party, Bath Time, Birthday Party, Refill for Bubble Machine, Bubble Gun, Bubble Blaster`, item_price: 9.79 , num_of_item_left: 162, 
image_url: [''], 
descrption: `REFILL BUBBLE SOLUTION SET: Package includes 12 bottles of bubble solution. Each bottle holds 4oz/0.12L bubble solution, 48oz/1.4L in total.
REFILL FOR MOST BUBBLE MACHINE: Lulu Home bubble solution is a perfect refill solution for all kinds of bubble toys, such as bubble lawn mower, bubble blaster and bubble blower guns. No mixture needed. Refill the bubble gun or bubble machine directly.
KEEP YOUR KIDS BUSY: Besides refill bubble solution, it can also blow bubbles directly with the wand provided. 12 bottles of bubble solution can be shared among several children and 4oz capacity allows these kids to blow bubbles, catch and play bubbles with the greatest enjoyment indoors or outdoors!
QUALITY & SAFE: Lulu Home bubble concentrated solution is made of odorless and nontoxic soap liquid solution, mild nature, safe and no irritation for people's skin with touch. Every blowing can make dozens of bubbles. 100% kids safe. SMALL PARTS INCLUDED, PLEASE NOTE IN CASE OF CHOKE.
CHILDREN PARTY FAVORS: Lulu Home bubbles wands set is great ideal for parties and all kinds of activities, especially those for kids, such as kids' birthday party, graduation party and celebrations. Kids love it so much to get so many bubble toys in one package as a gift.` );

Item.create!( item_name: `ACECHUM Smart Robot Toy for Kids, Programmable Remote Control Robots with Interactive Hand Motion Gestures, Rechargeable Dancing RC Robot Toys for 3-12 Year Old Boys Girls Gifts
`, item_price: 21.69 , num_of_item_left: 162, 
image_url: [''], 
descrption: `GESTURE SENSING & RC ROBOT: This smart robot can not only be controlled by the remote, but it also responds to gestures via Intelligent sensors located in the head allowing the child to physically direct the robot to move forward, backward and turn. Instant action with instant reward will immerse into the robot world.
PATROL & OBSTACLE AVOIDANCE: When the robot is on patrol mode, it will automatically patrol until encountering an obstacle then play games or give out "shocking" sounds to indicate that there is something to be explored or checked out. Let your kid's imagination run wild with this obstacle-avoiding robot toy!
SINGING & DANCING: This cool and feature-packed robot toy will make a great addition to any child's playtime. With its fun LED eyes, dancing, singing, and talking functions, it's sure to keep your child entertained for hours. Cool stuff for boys girls!
INTELLECTUAL PROGRAMMING: This robot for kids can be programmed by the remote, so you can record up to 50 moves that this robotic toy can playback using its moves record feature. This could be a cool toy for 3 4 5 6 7 8 9 and up year old boys and girls.
RECHARGEABLE ROBOT TOY: The robot takes its power to the next level by using a built-in rechargeable battery. You plug in and charge your robot friend easily at home or in any USB port, thus controlling your robot the whole day long and even allowing playing with him at night.
` );

Item.create!( item_name: `Bubble Catapult Plane Toy Airplane, Fun Shooting Game Toy for Kids, One-Click Ejection Model Foam Airplane with 4 Pcs Glider Airplane Launcher, Outdoor Sports Flying Toys Gifts Birthday Party(Yellow)
`, item_price: 12.50 , num_of_item_left: 162, 
image_url: [''], 
descrption: `OFF THE SCREENS AND ONTO THE YARD - At Refresh, we remember the days of being outside in the yard or the park for hours and hours, never even thinking about a video game or iPad. We want to bring that back and give your kids a love for the outside air, the lush green parks, and the healthy feeling of coming home tired from all that fun. We believe our catapult airplanes are the perfect toy for this!
ECO-FRIENDLY MATERIAL - These glider planes are made of EPP high-polymer material, lightweight, good flexibility, impact resistance. They are tested safe for kids. Won't harm your kid, Even if the foam styrofoam plane hits him/her during landing. Don't need a battery, just insert the wing and tail to the right place, you will be allowed to enjoy the outdoor game immediately.
FOR ALL AGES TO ENJOY - Whether you would like to relive the good old days from your childhood or you are looking for a fun game to play with your child, our plane can do it all! Kids will learn how to launch and control the airplane toys, help their little ones develop coordination, critical thinking skills in a practical way.
POWERFUL RANGE - Science fiction shape, perfect streamline, with the pull-out design of safety non-slip handle, one-key launch. The aerodynamic wings fly more smoothly and the route is more beautiful, let your children play outdoors. Powerful range outdoor sports glider, Easy for children to have fun, Effective range 20-30 feet, Ultra-flexible, High-performance free flight, Long glide time.
BEST GIFT CHOICE - A best outdoor gift for plane lovers, perfect for aviation and airplane theme parties. Also, this will be a cool glider plane for kids, when they are in family picnics, BBQ party, air-show, or just as a decoration for kids' room. Also, you can use these glider planes as prizes or good behavior rewards at home. Best gift for 3 4 5 6 7 8 9 year old boys.
` );

Item.create!( item_name: `Cnarery Dog Plush Toys, Interactive Squeaky Puppy Toys, Dog Toys with Crinkle, Durable Stuffed Dog Chew Toys for Puppy, Small, Middle, Non-Toxic and Safe`, item_price: 10.81 , num_of_item_left: 162, 
image_url: [''], 
descrption: `🐙Stylish Design - 2 pack Octopus shape and duck shape. The fabric feels smooth, safe and non-toxic. exquisite embroidery, at the same time the workmanship is very fine, for small Medium dogs
🐙Squeaky Dog Toys- This octopus plush dog toy has a screaming sound on the head and a 8 legs wrinkled paper sound on the tail, The duck dog toy has a inside Squeak. squeaker that creates fun sounds during chewing, making chewing more exciting for dogs.
🐙Interactive Dog Toys - This 2 plush dog toy with bright color, It is very suitable for puppy teething chew toys, When your dog is bored, anxious and lonely, These will be the dog toys you interactive with the dog, It can not only cultivate the dog's trust and understanding, Can release the dog's emotions and prevent damage to the Furniture.
🐙Durable Dog Toys- Made of safe and high-quality plush polyester fiber, thick fabric with firm stitches, mess free fun both for you and your pup. It is very suitable for cleaning teeth, you can also pass Clean your pet's teeth naturally to help maintain dental hygiene. Reminder: These toys are machine washable and easy to clean.
🐙☎SATISFACTORY CUSTOMER EXPERIENCE- We will wholeheartedly provide customers with the best service about dog teeth toys. If you have any questions or feedback about dog tooth toy products, please feel free to contact our Cnarery team.` );

Item.create!( item_name: `Dog Toys for Aggressive Chewers, Squeaky Dog Toys for Medium Large Dogs, Tough and Durable Dog Chew Toys, 100% Natural Rubber`, item_price: 8.99 , num_of_item_left: 162, 
image_url: [''], 
descrption: `[SQUEAKY-LOVING TOY FOR DOGS]: Dog chew toy is designed with built-in squeaker that creats fun sounds during chewing, making chewing more exciting for dogs.
[EXTREMELY DURABLE]: This Dog Toy is made of extremely durable, 100% natural rubber to stand the most aggressive chewers. It may not be indestructible, but it's pretty tough.
[FOCUS ON DOG HEALTH]: DENUTUS pays attention to the dental health of dogs. Our dog toys for aggressive chewers meet the instinctive needs of dogs. Dogs can clean their teeth effectively and maintain oral hygiene.
[MILK FLAVOR]: 100% real food ingredients for flavor and scent. this milk favor doggy chew satisfies your dog’s natural chewing instincts.
[SUITABLE FOR ALL KINDS OF MEDUIM&LARGE DOGS]: This squeaky chew toy has been tested by German Shepherds, Mastiffs, Siberian huskies, Labrador, Golden retrievers,Pitbulls and many other power chewers in countless times. If you have any questions about our puppy toys, please do not hesitate to contact us and we will be happy to assist you with replacement or refund.` );

Item.create!( item_name: `Dog Treat Pouch/Dog Training Treat Pouch,Waldseemuller Dog Treat Pouch for Training,Treat Pouches for Pet Training for Small to Large Cat/Dog,Treat Bag for Dog Treat/Dog Treat Pouch for Leash`, item_price: 6.99 , num_of_item_left: 162, 
image_url: [''], 
descrption: `
🐩 [Large Capacity Shrink Dog Treat pouch] Can Easily Ttore Coarse Food, Toys and Snacks. The Drawstring Opens the Opening to The Maximum, So You Can Easily Remove The Dog Food. With The Pet Treat Pouch closed, You Can Jog, Run, Bend or Squat Without Dropping Anything.
🐕 [Bright Lining, Easy to Clean] The Bright Interior Allows You to Find Items Faster. Bright Inner Material Allows You to Pull Out Completely, Empty Debris, Wipe or Rinse. Double Stitching Makes The Dog Training Treat Pouch More Durable.
🐕🦺 [3 Ways to Wear] The Treat Pouches for Pet Training Has 3 Ways to Wear. It Can Be Worn With a Removable 50 inch Adjustable Belt, a Removable Shoulder Strap or a Sturdy Metal Belt Clip
🐶 [Zippered Storage Pocket] The Trear Bag for Dog Training Has a Zippered Pocket on The Side for Easy Storage. The Zippered Pocket Can Hold a Poop Bag, Keys, Headphones, ID, or Cash.
🦮 [Lifetime Replacement] This Dog Treat Pouch for Training is Highly Waterproof and Stain Resistant, Easy to Clean And Durable; We Are So Confident in Waldseemuller Dog Treat Training Pouch That We Offer a Lifetime Warranty for Everyone.
` );