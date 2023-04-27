class Api::UsersController < ApplicationController
  wrap_parameters include: User.attribute_names + ['password']


  def index
      @users = User.find_by(id: params[:id])
      if @users
        render "api/users/index"
      else
      render json: ["Oops, something went wrong"], status: 422
      end
  end


  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render :show
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    @user = User.find(params[:id])
    render "api/users/show"
  end
  private

  def user_params
    params.require(:user).permit(:email, :username, :password)
  end
end
