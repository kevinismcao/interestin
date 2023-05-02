class Api::PinsUserController < ApplicationController

    def save_pin 
        @pin = Pin.find(params[:pin_id])
        @user = current_user
        if @pin && @user
            if @pin.creator.id == @user.id # if they are creator then update
                @pins_user = PinsUser.find_by(user_id: @user.id, pin_id: @pin.id)
                if @pins_user && @pins_user.update(pin_user_params)
                    @pin = Pin.find(@pins_user.pin_id)
                    render "api/users/show"
                else 
                    render json: @pinsUser.errors.full_messages, status: 422 
                end
            else # if they are not creator then create 
                pins_user_relation = PinsUser.new({
                    user_id: @user.id,
                    pin_id: @pin.id,
                    created_pin: false,
                    saved_pin: params[:pins_user][:saved_pin]
                })
                if pins_user_relation.save!
                    render "api/users/show"
                else 
                    render json: pins_user_relation.errors.full_messages, status: 422
                end
            end
        else
            render json: ["Could not find that pin to save"], status: 422
        end
    end

    def destroy # unsaving pin from someone who doesn't own it 
        @user = current_user
        @pins_user = PinsUser.find_by(user_id: @user.id, pin_id: params[:id]) # pass in pin id through url
        if @pins_user && @pins_user.delete
            render "api/users/show"
        end
    end

    private 

    def pin_user_params 
        params.require(:pins_user).permit(:user_id, :pin_id, :saved_pin)
    end
end
