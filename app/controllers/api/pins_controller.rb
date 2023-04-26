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

    def create 
        if !current_user 
            render json: "You must be logged in to create Pin"
        end
        
        @pin = Pin.new(pin_params, current_user.id)
        if @pin.save!
            render :show
        else
            render json: error_message, status: 422
        end

    end

    # private 

    def ensure_owner_user 
        current_user.id == @pin.creator.id
    end

    def pin_params 
        params.require(:pin).permit(:title, :description, :image)
    end

end
