json.extract! pin, :id, :title, :description

json.imageUrl url_for(pin.image) if pin.image.attached?

json.uploader do
     json.partial! "/api/users/user", user: pin.uploader
end
    

