class Api::UsersController < ApplicationController
  wrap_parameters include: User.attribute_names + ['password']


  def index
      @users = User.all
      if @users
        render :index
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
  
  def find_by_username
    @user = User.find_by(username: params[:username])
    render "api/users/show"
  end


  private

  def user_params
    params.require(:user).permit(:email, :username, :password, :image, )
  end
end
