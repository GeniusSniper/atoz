class Api::UsersController < ApplicationController
  before_action :require_logged_in, only: [:update]
  def create
    @user = User.new(user_params)
    
    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = current_user
    if current_user.update(cart: params[:user])
      render 'api/users/show'
    else
      render json current_user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :email, :address)
  end

  def user_cart
    params.require(:user).permit(:cart)
  end
end