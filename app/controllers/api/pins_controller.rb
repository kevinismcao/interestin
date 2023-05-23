class Api::PinsController < ApplicationController

    before_action :homepage_pins, only: [:homepage_pins]

    def homepage_pins 
        @pins = Pin.generate_random_pins(params[:num_pins])
        render :index
    end

    def show 
        @pin = Pin.find_by(id: params[:id])
        render :show
    end

    def index 
        @pins = Pin.all
        if @pins
            render :index
        else
            render json: ["Oops, something went wrong"], status: 422
        end
    end

    def find_created_pins
        @pins = User.created_pins(params[:uploader_id])

        if @pins
            render :index
        else
            render json: ["Oops, something went wrong"], status: 422
        end
    end

    def find_board_saved_pins
        @pins = Board.saved_pins(params[:board_id])
        if @pins
            render :index
        else
            render json: ["Oops, something went wrong"], status: 422
        end
    end

    def search
        query=params[:query]
        @pins = Pin.where('title ILIKE ? OR description ILIKE ?', "%#{query}%", "%#{query}%")
        if @pins.length > 0
            render :index
        else
            render json: ["Sorry, we did not find any results for '#{query}', try another search"], status: 404
        end
        
    end

    def create 
        if !current_user 
            render json: "You must be logged in to create Pin"
        end
        
        @pin = Pin.new(pin_params)
        if @pin.save
            render :show
        else
            render json: @pin.errors.full_messages, status: 422
        end

    end

    def update
        @pin = Pin.find_by(id: params[:id])
        if (current_user.id === @pin.uploader.id) && @pin.update(pin_params)
            @pin.save
            render "api/pins/show"
        else
            render json: @pin.errors.full_messages, status: 422
        end
    end

    def destroy
        @pin = Pin.find_by(id: params[:id])
        pin_id = @pin.id
        if @pin.destroy
            render json: pin_id
        else
            render json: @pin.errors.full_messages, status: 422
        end
    end

    

    # private 

    # def ensure_owner_user 
    #     current_user.id === @pin.uploader_id
    # end

    def pin_params 
        params.require(:pin).permit(:title, :description, :image, :uploader_id)
    end

end
