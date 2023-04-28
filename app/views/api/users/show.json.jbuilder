json.user do
  json.partial! "/api/users/user", user: @user
end



# json.photoUrl @user.photo.attached? ? @user.photo.url : nil