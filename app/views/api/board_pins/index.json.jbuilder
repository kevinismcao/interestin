
@board_pins.each do |board_pin|
    json.set! board_pin.id do
        json.partial! "/api/board_pins/board_pin", board_pin: board_pin
    end
end