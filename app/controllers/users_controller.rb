class UsersController < ApplicationController
  skip_before_action :authenticate
  
  def create
    @user = User.new(user_params)
    if @user.save
      jwt = Auth.issue({user: @user.id})
      render json: {jwt: jwt}
    else
      head 403
    end
  end

  def show
    logged_in? ? (render json: current_user) : (head 403 )

  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end

end 