class UsersController < ApplicationController
  skip_before_action :authenticate
  
  def create
    @user = User.new(user_params)
    if @user.save
      jwt = Auth.issue({user: @user.id})
      render json: {jwt: jwt, user_id: @user.id}
    else
      head 403
    end
  end

  def show
    user = User.find(params[:id])
    logged_in? ? (render json: user) : (head 403 )
  end

  private

  def user_params
    params.require(:user).permit(:id, :email, :password, :password_confirmation)
  end

end 