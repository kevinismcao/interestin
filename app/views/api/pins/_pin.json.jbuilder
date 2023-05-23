json.extract! pin, :id, :title, :description

json.imageUrl url_for(pin.image) if pin.image.attached?

json.uploader do
     json.partial! "/api/users/user", user: pin.uploader
end
    
json.comments do
     pin.comments.each do |comment|
          json.set! comment.id do
               json.extract! comment, :id, :commentor_id, :description, :created_at
          end
     end
end
