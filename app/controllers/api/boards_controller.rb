class Api::BoardsController < ApplicationController

    before_action :find_all_boards_pins, only: [:find_all_boards_pins]
    before_action :board_cover, only: [:board_cover]

    def board_cover
        @board = Board.find_by(id: params[:board_id])
        @pin = @board.pins.first
        if @board && @pin
            render "api/pins/show"
        end
    end

    def index
        @boards = Board.where(owner_id: params[:user_id])
        render :index
    end

    def show
        @board = Board.find(params[:id])
        render :show
    end

    def find_by_name
        @board = Board.find_by(name: params[:name])
        render :show
    end

    def create
        @board =Board.new(board_params)
        if current_user
            @board.owner_id = current_user.id
        else
            render json:["You must be logged in to create board"], status:401
        end

        if @board.save!
            render :show
        else
            render json:@board.errors.full_messages, status:422
        end
    end

    def destroy
        @board = current_user.boards.find(params[:id])
        if @board && @board.delete
            @user = current_user
            render "api/users/show"
        end
    end

    def update
        @board = Board.find(params[:id])
        if @board.owner_id === current_user.id && @board.update(board_params)
            render :show
        else
            render json:@board.errors.full_messages, status: 422     
        end
    end

    private

    def board_params
        params.require(:board).permit(:name, :description)
    end

end
