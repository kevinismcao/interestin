class Api::BoardPinsController < ApplicationController
    def index 
       @board_pins = BoardPin.all
        if @board_pins
            render :index
        else
            render json: ["Something went wrong"], status: 422
        end
    end

    def create
        @pin=Pin.find(params[:pin_id])
        @board = Board.find(params[:board_id])
        @board_pin = BoardPin.new(board_pin_params)

        if @board && @pin && @board_pin.save
            render :show
        else
            render json: @pins_to_board.errors, status: 422
        end
    end

    def show
        @board_pin = BoardPin.find(params[:id])
        render :show
    end

    def destroy
        @board_pin = BoardPin.find(params[:id])
        if @board_pin.destroy
            @board_pins = BoardPin.all
            render :index
        else
            render json: ["Something went wrong"], status: 422
        end
    

    end

    private

    def board_pin_params
        params.require(:board_pin).permit(:board_id, :pin_id)
    end
end
