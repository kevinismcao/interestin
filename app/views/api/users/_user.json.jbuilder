json.extract! user, :id, :email, :username, :created_at, :updated_at
  # json.imageUrl url_for(@user.image) if @user.image.attached?
json.imageUrl user.image.attached? ? url_for(user.image) : nil

# boards_array = []
# user.boards.each do |board|
#    boards_array << board.id
# end
# json.boards boards_array