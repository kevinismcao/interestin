
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
# ApplicationRecord.transaction do 
#   puts "Destroying tables..."
#   User.destroy_all

#   puts "Resetting primary keys..."
#   ApplicationRecord.connection.reset_pk_sequence!('users')

#   puts "Creating users..."
  
#   User.create!(
#     username: 'Demouser', 
#     email: 'demo@gmail.com', 
#     password: 'password'
#   )

#   # More users
#   10.times do 
#     User.create!({
#       username: Faker::Internet.unique.username(specifier: 3),
#       email: Faker::Internet.unique.email,
#       password: 'password'
#     }) 
#   end

#   puts "Done!"
# end

require "open-uri"

User.destroy_all
Board.destroy_all 
Pin.destroy_all
BoardPin.destroy_all
Comment.destroy_all
PinsUser.destroy_all
Follow.destroy_all


#user:

demo_user = User.create({username: 'DemoUser', email: 'demouser@gmail.com', password: 'password'})

user_1 = User.new({username: 'NingxiaoCao', email:'ningxiaocao@gmail.com', password: 'password'})
# pic_1 = URI.open("")
# user_1.image.attach(io: pic_1, filename: "???.jpg")
user_1.save!

user_2 = User.create({username: 'JingjingZhang', email:'jingjingzhang@gmail.com', password: 'password'})
user_2.save!

user_3 = User.create({username: 'JayChou', email:'jaychou@gmail.com', password: 'password'})

user_3.save!

user_4 = User.create({username: 'KobeB', email:'kobeb@gmail.com',password: 'password'})

user_4.save!

user_5 = User.create({username: 'JackieC', email:'jackiec@gmail.com', password: 'password'})

user_5.save!

user_6 = User.create({username: 'LilyRose', email:'lilyrose@gmail.com', password: 'password'})

user_6.save!

user_7 = User.create({username: 'JimmyTsai', email:'jimmytsai@gmail.com', password: 'password'})

user_7.save!

#boards:
Board.new({name: 'nature', description: 'rendering material', owner_id: demo_user.id})
board_1 = Board.create({name: 'nature', description: 'rendering material', owner_id: demo_user.id})
board_2 = Board.create({name: 'cat', description: 'cute cats', owner_id: user_1.id})
board_3 = Board.create({name: 'animal', owner_id: user_1.id})
board_4 = Board.create({name: 'space', owner_id: user_1.id})
board_5 = Board.create({name: 'food', description: 'food I want to try', owner_id: demo_user.id})


#pins:
pin_1 = Pin.create({title: "Aerial shot Manhatten", uploader_id: user_1.id, description: "Aerial shot of night Manhatten"})
image_1 = URI.open("https://interestin-seeds.s3.us-west-1.amazonaws.com/aerialshot-nyc-manhatten.jpeg")
pin_1.image.attach(io: image_1, filename:"aerialshot-nyc-manhatten.jpeg")

pin_2 = Pin.create({title: "Andromeda galaxy", uploader_id: user_1.id, description: "Andromeda galaxy"})
image_2 = URI.open("https://interestin-seeds.s3.us-west-1.amazonaws.com/andromeda-galaxy.jpeg")
pin_2.image.attach(io: image_2, filename:"andromeda-galaxy.jpeg")

pin_3 = Pin.create({title: "Cat walking", uploader_id: user_2.id, description: "Cat walking on the grass"})
image_3 = URI.open("https://interestin-seeds.s3.us-west-1.amazonaws.com/animal-cat-walking.jpeg")
pin_3.image.attach(io: image_3, filename:"animal-cat-walking.jpeg")

pin_4 = Pin.create({title: "Interior building shot", uploader_id: user_1.id, description: "Beautiful shot of architecture interior. Famous architect's work."})
image_4 = URI.open("https://interestin-seeds.s3.us-west-1.amazonaws.com/architecture-inside.jpeg")
pin_4.image.attach(io: image_4, filename:"architecture-inside.jpeg")

pin_5 = Pin.create({title: "Arctic wolves in the forest", uploader_id: user_2.id, description: "A crazy shot done by the photographer catching the arctic wolves in the forest."})
image_5 = URI.open("https://interestin-seeds.s3.us-west-1.amazonaws.com/arctic+wolves+in+forest.jpeg")
pin_5.image.attach(io: image_5, filename:"arctic+wolves+in+forest.jpeg")

pin_6 = Pin.create({title: "Bird", uploader_id: user_1.id, description: "Beautiful image of a bird standing on a branch."})
image_6 = URI.open("https://interestin-seeds.s3.us-west-1.amazonaws.com/bird+on+the+stick.jpeg")
pin_6.image.attach(io: image_6, filename:"aerialshot-nyc-manhatten.jpeg")

pin_7 = Pin.create({title: "Brunch Delight: Coffee, Food, and Dessert", uploader_id: user_1.id, description: "This inviting image showcases a perfect brunch spread with a cup of hot coffee, a plate of delicious food, and a mouth-watering dessert.  "})
image_7 = URI.open("https://interestin-seeds.s3.us-west-1.amazonaws.com/brunch-coffee-food-drink-desert.jpeg")
pin_7.image.attach(io: image_7, filename:"brunch-coffee-food-drink-desert.jpeg")

pin_8 = Pin.create({title: "Feline Serenity: A Peaceful Cat Nap", uploader_id: user_2.id, description: "his charming image captures the essence of a cat's favorite pastime: sleeping. The fluffy white and gray cat is shown curled up on a soft blanket, eyes closed in a peaceful slumber. "})
image_8 = URI.open("https://interestin-seeds.s3.us-west-1.amazonaws.com/cat-animal-sleeping.jpeg")
pin_8.image.attach(io: image_8, filename:"cat-animal-sleeping.jpeg")

pin_9 = Pin.create({title: "Sleepy Kitty: A Cat's Lazy Day", uploader_id: user_2.id, description: "This adorable image showcases a sleepy feline in the midst of a lazy day. The gray and white cat is lying on a plush cushion, with its eyes droopy and half-closed, indicating a state of drowsiness."})
image_9 = URI.open("https://interestin-seeds.s3.us-west-1.amazonaws.com/cat-animal-sleepy.jpeg")
pin_9.image.attach(io: image_9, filename:"cat-animal-sleepy.jpeg")

pin_10 = Pin.create({title: "Brewing Perfection: Aromatic Cappuccino", uploader_id: user_4.id, description: "This image features a sleek and modern coffee maker brewing a rich and aromatic cappuccino."})
image_10 = URI.open("https://interestin-seeds.s3.us-west-1.amazonaws.com/coffee-maker-cappuccino.jpeg")
pin_10.image.attach(io: image_10, filename:"coffee-maker-cappuccino.jpeg")

pin_11 = Pin.create({title: "Iced Delight: Refreshing Coffee Shop Drink", uploader_id: user_4.id, description: "A delicious and refreshing iced coffee drink served in a trendy coffee shop. "})
image_11 = URI.open("https://interestin-seeds.s3.us-west-1.amazonaws.com/coffee-shop-ice-drink.jpeg")
pin_11.image.attach(io: image_11, filename:"coffee-shop-ice-drink.jpeg")

pin_12 = Pin.create({title: "Nature's Beauty: Majestic Desert Landscape", uploader_id: user_6.id, description: "This awe-inspiring image captures the magnificent beauty of a desert landscape."})
image_12 = URI.open("https://interestin-seeds.s3.us-west-1.amazonaws.com/desert.jpeg")
pin_12.image.attach(io: image_12, filename:"desert.jpeg")

pin_13 = Pin.create({title: "The Blue Marble: Earth from Space", uploader_id: user_5.id, description: "This breathtaking image captures the incredible beauty of planet Earth as seen from space."})
image_13 = URI.open("https://interestin-seeds.s3.us-west-1.amazonaws.com/earth-from-space-station.jpeg")
pin_13.image.attach(io: image_13, filename:"earth-from-space-station.jpeg")

pin_14 = Pin.create({title: "Nature's Elegance: Stunning Flower Close-up", uploader_id: user_6.id, description: "The intricate details and stunning beauty of a delicate flower in full bloom. "})
image_14 = URI.open("https://interestin-seeds.s3.us-west-1.amazonaws.com/flower.jpeg")
pin_14.image.attach(io: image_14, filename:"flower.jpeg")

pin_15 = Pin.create({title: "Coffee and Photography", uploader_id: user_5.id, description: "The intersection of two art forms: coffee-making and photography."})
image_15 = URI.open("https://interestin-seeds.s3.us-west-1.amazonaws.com/food-drink-coffee-camera-phone.jpeg")
pin_15.image.attach(io: image_15, filename:"food-drink-coffee-camera-phone.jpeg")

pin_16 = Pin.create({title: "The Mysteries of the Universe: Stunning Galaxy", uploader_id: user_6.id, description: "The vast and mysterious nature of the universe. The image showcases a stunning galaxy with a central bright core, surrounded by a halo of stars and dust."})
image_16 = URI.open("https://interestin-seeds.s3.us-west-1.amazonaws.com/galaxy.jpeg")
pin_16.image.attach(io: image_16, filename:"galaxy.jpeg")

pin_17 = Pin.create({title: "Lush Mountain Forest", uploader_id: user_3.id, description: "The lush and vibrant beauty of a mountain forest. "})
image_17 = URI.open("https://interestin-seeds.s3.us-west-1.amazonaws.com/grass-mountain-forest.jpeg")
pin_17.image.attach(io: image_17, filename:"grass-mountain-forest.jpeg")

pin_18 = Pin.create({title: "Scrumptious Strawberry Ice Cream", uploader_id: user_4.id, description: "The irresistible allure of creamy, rich strawberry ice cream. "})
image_18 = URI.open("https://interestin-seeds.s3.us-west-1.amazonaws.com/icecream-strawberry-food-desert.jpeg")
pin_18.image.attach(io: image_18, filename:"icecream-strawberry-food-desert.jpeg")

pin_19 = Pin.create({title: "Serenity in Nature: Japanese Zen Garden", uploader_id: user_1.id, description: "The tranquility and peacefulness of a traditional Japanese Zen garden."})
image_19 = URI.open("https://interestin-seeds.s3.us-west-1.amazonaws.com/japanese-zen-garden.jpeg")
pin_19.image.attach(io: image_19, filename:"japanese-zen-garden.jpeg")

pin_20 = Pin.create({title: "Nighttime View of Los Angeles Skyline", uploader_id: user_5.id, description: "The vibrant energy of the Los Angeles skyline at night. The image showcases a panoramic view of the city's towering skyscrapers, illuminated by the glittering lights of the bustling metropolis below. "})
image_20 = URI.open("https://interestin-seeds.s3.us-west-1.amazonaws.com/LA-city-skyline-night.jpeg")
pin_20.image.attach(io: image_20, filename:"LA-city-skyline-night.jpeg")

pin_21 = Pin.create({title: "Beauty in the Vastness", uploader_id: user_1.id, description: "The image showcases an expansive vista of rolling hills and verdant fields stretching out to the distant horizon. The warm glow of the sun creates a sense of tranquility and warmth, illuminating the natural beauty of the world around us. "})
image_21 = URI.open("https://interestin-seeds.s3.us-west-1.amazonaws.com/landscape.jpeg")
pin_21.image.attach(io: image_21, filename:"landscape.jpeg")

pin_22 = Pin.create({title: "Enchanting Mist: A Surreal View of a Forest", uploader_id: user_2.id, description: "A dream-like view of the forest, shrouded in a thick mist that creates an ethereal and surreal atmosphere. "})
image_22 = URI.open("https://interestin-seeds.s3.us-west-1.amazonaws.com/misty+forest.jpeg")
pin_22.image.attach(io: image_22, filename:"misty+forest.jpeg")

pin_23 = Pin.create({title: "Mystical Moon", uploader_id: user_4.id, description: "The moon's pockmarked surface is visible in intricate detail, with its craters and valleys creating a textured landscape that is both beautiful and otherworldly."})
image_23 = URI.open("https://interestin-seeds.s3.us-west-1.amazonaws.com/moon.jpeg")
pin_23.image.attach(io: image_23, filename:"moon.jpeg")

pin_24 = Pin.create({title: "Nature's Pathway Through the Forest", uploader_id: user_1.id, description: "A stunning view of a lush forest, with a winding bridge that leads the viewer through the trees and over a serene body of water."})
image_24 = URI.open("https://interestin-seeds.s3.us-west-1.amazonaws.com/nature-bridge-forest.jpeg")
pin_24.image.attach(io: image_24, filename:"nature-bridge-forest.jpeg")

pin_25 = Pin.create({title: "Crown Jewels of Nature", uploader_id: user_5.id, description: "A stunning view of the mountains, their majestic peaks crowned with snow and surrounded by a verdant forest. "})
image_25 = URI.open("https://interestin-seeds.s3.us-west-1.amazonaws.com/nature-mountain+crown.jpeg")
pin_25.image.attach(io: image_25, filename:"nature-mountain+crown.jpeg")

pin_26 = Pin.create({title: "A Cascading Waterfall in a Picturesque Landscape", uploader_id: user_6.id, description: "This captivating image captures the tranquil beauty of a spring-fed waterfall in a picturesque landscape."})
image_26 = URI.open("https://interestin-seeds.s3.us-west-1.amazonaws.com/nature-spring-waterfall.jpeg")
pin_26.image.attach(io: image_26, filename:"nature-spring-waterfall.jpeg")

pin_27 = Pin.create({title: "New York City at Dawn", uploader_id: user_1.id, description: "The vibrant energy of New York City at dawn. The image showcases a breathtaking view of the city's iconic skyline, with its towering skyscrapers rising high into the sky. "})
image_27 = URI.open("https://interestin-seeds.s3.us-west-1.amazonaws.com/new-york-morning-shot.jpeg")
pin_27.image.attach(io: image_27, filename:"new-york-morning-shot.jpeg")

pin_28 = Pin.create({title: "Adorable Puppy: A Playful and Affectionate Companion", uploader_id: user_2.id, description: "A close-up of the puppy's face, with its big, innocent eyes, fluffy fur, and a curious expression that invites the viewer to engage with its playful and loving personality."})
image_28 = URI.open("https://interestin-seeds.s3.us-west-1.amazonaws.com/puppy.jpeg")
pin_28.image.attach(io: image_28, filename:"puppy.jpeg")

pin_29 = Pin.create({title: "The Red Galaxy: A Fiery and Mysterious Cosmic Wonder", uploader_id: user_5.id, description: "This awe-inspiring image captures the beauty and mystery of a red galaxy, an immense celestial object located billions of light-years away from our planet."})
image_29 = URI.open("https://interestin-seeds.s3.us-west-1.amazonaws.com/red-galaxy.jpeg")
pin_29.image.attach(io: image_29, filename:"red-galaxy.jpeg")

pin_30 = Pin.create({title: "Sandstone Cliff Waterfall", uploader_id: user_4.id, description: "The awe-inspiring beauty and power of a sandstone cliff waterfall, a natural wonder located in a remote and pristine wilderness area. "})
image_30 = URI.open("https://interestin-seeds.s3.us-west-1.amazonaws.com/sandstone-cliff-waterfall.jpeg")
pin_30.image.attach(io: image_30, filename:"sandstone-cliff-waterfall.jpeg")

pin_31 = Pin.create({title: "Blue Wave", uploader_id: user_3.id, description: "The majesty and power of the ocean, showcasing a towering blue wave rising up against the horizon. "})
image_31 = URI.open("https://interestin-seeds.s3.us-west-1.amazonaws.com/sea-blue-wave.jpeg")
pin_31.image.attach(io: image_31, filename:"sea-blue-wave.jpeg")

pin_32 = Pin.create({title: "A Winter's Tale: Serenity on a Snowy Road", uploader_id: user_1.id, description: "The serene beauty of a winter landscape, with a winding snowy road leading through a forest of towering trees."})
image_32 = URI.open("https://interestin-seeds.s3.us-west-1.amazonaws.com/snow+road.jpeg")
pin_32.image.attach(io: image_32, filename:"snow+road.jpeg")

pin_33 = Pin.create({title: "A Winter Wonderland", uploader_id: user_3.id, description: "The misty fog that envelops the mountains creates an ethereal atmosphere, and the snow-covered peaks add to the winter wonderland feel of the image. "})
image_33 = URI.open("https://interestin-seeds.s3.us-west-1.amazonaws.com/snow-foggy-mountain.jpeg")
pin_33.image.attach(io: image_33, filename:"snow-foggy-mountain.jpeg")

pin_34 = Pin.create({title: "Autumn Leaves", uploader_id: user_5.id, description: "The leaves, in shades of red, orange, and yellow, are a riot of colors that evoke a sense of joy and wonder in the viewer."})
image_34 = URI.open("https://interestin-seeds.s3.us-west-1.amazonaws.com/leaves.jpeg")
pin_34.image.attach(io: image_34, filename:"leaves.jpeg")

pin_35 = Pin.create({title: "Minimalist Greenery: Potted Plants on White Background", uploader_id: user_6.id, description: "This image features a collection of small potted plants placed on a white surface, set against a white background."})
image_35 = URI.open("https://interestin-seeds.s3.us-west-1.amazonaws.com/plants_in_white.jpeg")
pin_35.image.attach(io: image_35, filename:"plants_in_white.jpeg")

pin_36 = Pin.create({title: "Cozy Evening", uploader_id: user_1.id, description: "The warm and inviting ambiance of a cozy evening at home. A white hardcover book is positioned on a wooden table, with a lit candle placed beside it. "})
image_36 = URI.open("https://interestin-seeds.s3.us-west-1.amazonaws.com/white_book_candle.jpeg")
pin_36.image.attach(io: image_36, filename:"white_book_candle.jpeg")

pin_37 = Pin.create({title: "Minimalist Notebook", uploader_id: user_4.id, description: "A simple and elegant notebook on a clean white background."})
image_37 = URI.open("https://interestin-seeds.s3.us-west-1.amazonaws.com/clean_note_book.jpeg")
pin_37.image.attach(io: image_37, filename:"clean_note_book.jpeg")

pin_38 = Pin.create({title: "DIY Crafts with Colorful Leaves", uploader_id: user_6.id, description: "A fun and creative DIY project involving colorful leaves. "})
image_38 = URI.open("https://interestin-seeds.s3.us-west-1.amazonaws.com/leaves_craft.jpeg")
pin_38.image.attach(io: image_38, filename:"leaves_craft.jpeg")

pin_39 = Pin.create({title: "Scenic Road Trip Adventure", uploader_id: user_6.id, description: "The winding road leads through a picturesque landscape, with mountains and trees stretching out as far as the eye can see. "})
image_39 = URI.open("https://interestin-seeds.s3.us-west-1.amazonaws.com/travel_road_trip.jpeg")
pin_39.image.attach(io: image_39, filename:"travel_road_trip.jpeg")

pin_40 = Pin.create({title: "Peaceful Boat Ride in Nature", uploader_id: user_5.id, description: "A lone boat glides smoothly on the calm waters of a serene lake surrounded by lush green trees and a clear blue sky."})
image_40 = URI.open("https://interestin-seeds.s3.us-west-1.amazonaws.com/boat_nature.jpeg")
pin_40.image.attach(io: image_40, filename:"boat_nature.jpeg")

pin_41 = Pin.create({title: "Ice Cave", uploader_id: user_1.id, description: "The ice cave is lit by a faint blue light, creating an ethereal and otherworldly atmosphere."})
image_41 = URI.open("https://interestin-seeds.s3.us-west-1.amazonaws.com/ice-cave.jpeg")
pin_41.image.attach(io: image_41, filename:"ice-cave.jpeg")

pin_42 = Pin.create({title: "Old Church", uploader_id: user_1.id, description: "This is a photo of an old church, with a beautiful steeple and intricate architecture. The church is made of stone and has stained glass windows. "})
image_42 = URI.open("https://interestin-seeds.s3.us-west-1.amazonaws.com/church.jpeg")
pin_42.image.attach(io: image_42, filename:"")

pin_43 = Pin.create({title: "Polar Bear", uploader_id: user_2.id, description: "A polar bear standing on a snowy terrain with its mouth slightly open."})
image_43 = URI.open("https://interestin-seeds.s3.us-west-1.amazonaws.com/polar_bear.jpeg")
pin_43.image.attach(io: image_43, filename:"polar_bear.jpeg")

pin_44 = Pin.create({title: "Flower in vase", uploader_id: user_4.id, description: "A pink flower with delicate petals, placed in a glass vase."})
image_44 = URI.open("https://interestin-seeds.s3.us-west-1.amazonaws.com/flower_in_vase.jpeg")
pin_44.image.attach(io: image_44, filename:"flower_in_vase.jpeg")

pin_45 = Pin.create({title: "Green", uploader_id: user_3.id, description: "Plant in white pottery."})
image_45 = URI.open("https://interestin-seeds.s3.us-west-1.amazonaws.com/green.jpeg")
pin_45.image.attach(io: image_45, filename:"green.jpeg")

pin_46 = Pin.create({title: "Fresh Red and Green Apples on a Wooden Table", uploader_id: user_5.id, description: "A shiny red apple, with drops of water on its surface. "})
image_46 = URI.open("https://interestin-seeds.s3.us-west-1.amazonaws.com/apple.jpeg")
pin_46.image.attach(io: image_46, filename:"apple.jpeg")

pin_47 = Pin.create({title: "Makeup Products and Tools", uploader_id: user_6.id, description: "A variety of makeup products and tools, including brushes, eyeshadow palettes, lipsticks, and blushes."})
image_47 = URI.open("https://interestin-seeds.s3.us-west-1.amazonaws.com/make_up.jpeg")
pin_47.image.attach(io: image_47, filename:"make_up.jpeg")

pin_48 = Pin.create({title: "Gourmet Dish on a White Plate", uploader_id: user_6.id, description: "A delicious gourmet dish, consisting of a piece of meat or fish, roasted vegetables, and garnished with herbs, served on a simple white plate. "})
image_48 = URI.open("https://interestin-seeds.s3.us-west-1.amazonaws.com/plate.jpeg")
pin_48.image.attach(io: image_48, filename:"plate.jpeg")

pin_49 = Pin.create({title: "Laptop on a desk", uploader_id: user_5.id, description: "A black laptop sitting on a wooden desk. The laptop is open and displaying a screen with various icons and folders visible."})
image_49 = URI.open("https://interestin-seeds.s3.us-west-1.amazonaws.com/laptop.jpeg")
pin_49.image.attach(io: image_49, filename:"laptop.jpeg")

pin_50 = Pin.create({title: "Wine and Fruit", uploader_id: user_4.id, description: "A wooden table with a bottle of red wine, a glass of wine, and various fruits such as grapes, apples, and pears."})
image_50 = URI.open("https://interestin-seeds.s3.us-west-1.amazonaws.com/wine_fruit.jpeg")
pin_50.image.attach(io: image_50, filename:"wine_fruit.jpeg")

board_pin_1 = BoardPin.create({board_id: board_1.id, pin_id: pin_1.id})
board_pin_2 = BoardPin.create({board_id: board_1.id, pin_id: pin_2.id})
board_pin_3 = BoardPin.create({board_id: board_1.id, pin_id: pin_3.id})
board_pin_4 = BoardPin.create({board_id: board_1.id, pin_id: pin_4.id})
board_pin_5 = BoardPin.create({board_id: board_1.id, pin_id: pin_5.id})
board_pin_6 = BoardPin.create({board_id: board_1.id, pin_id: pin_6.id})
board_pin_7 = BoardPin.create({board_id: board_1.id, pin_id: pin_7.id})
board_pin_8 = BoardPin.create({board_id: board_1.id, pin_id: pin_8.id})
board_pin_9 = BoardPin.create({board_id: board_1.id, pin_id: pin_9.id})
board_pin_10 = BoardPin.create({board_id: board_1.id, pin_id: pin_10.id})
board_pin_11 = BoardPin.create({board_id: board_1.id, pin_id: pin_11.id})
board_pin_12 = BoardPin.create({board_id: board_1.id, pin_id: pin_12.id})
board_pin_13 = BoardPin.create({board_id: board_1.id, pin_id: pin_13.id})