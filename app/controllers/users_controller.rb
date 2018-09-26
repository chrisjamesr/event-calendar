class UsersController < ApplicationController
  skip_before_action :authenticate
  
  def create
    @user = User.new(user_params)
    if @user.save
      jwt = Auth.issue({user: @user.id})
      render json: {jwt: jwt, user_id: @user.id}
    else
      render json: {errors: @user.errors.full_messages[0]}, status: 401
    end
  end

  # action not in use
  def show
    user = User.find(params[:id])
    logged_in? ? (render json: user) : (head 403 )
  end

  private

  def user_params
    params.require(:user).permit(:id, :email, :password)
  end

end 