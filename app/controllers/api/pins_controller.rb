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
        
        @pin = Pin.new(pin_params)
        if @pin.save!
            render :show
        else
            render json: error_message, status: 422
        end

    end

    def update
        @pin = Pin.with_attached_image.find_by(id: params[:id])
        if ensure_owner_user && @pin.update(pin_params)
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

    def ensure_owner_user 
        current_user.id == @pin.creator.id
    end

    def pin_params 
        params.require(:pin).permit(:title, :description, :image, :uploader_id)
    end

end
