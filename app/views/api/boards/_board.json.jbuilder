json.extract! board, :id, :name, :description, :created_at, :updated_at

pins_array = []
board.pins.each do |pin|
    pins_array << pin.id
end
json.pins pins_array

json.owner do
     json.partial! "/api/users/user", user: board.owner
end