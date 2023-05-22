json.board_pin do
    json.partial! "/api/board_pins/board_pin", board_pin: @board_pin
end
json.board do
    json.partial! "/api/boards/board", board: @board
end