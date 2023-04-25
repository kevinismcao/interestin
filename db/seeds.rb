
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

pin_ = Pin.create({title: "", uploader_id: user_.id, description: "n"})
image_ = URI.open("")
pin_.image.attach(io: image_, filename:"")

pin_ = Pin.create({title: "", uploader_id: user_.id, description: "n"})
image_ = URI.open("")
pin_.image.attach(io: image_, filename:"")

pin_ = Pin.create({title: "", uploader_id: user_.id, description: "n"})
image_ = URI.open("")
pin_.image.attach(io: image_, filename:"")
