class UserTokenController < ApplicationController
  skip_before_action :authenticate
  
  def create
    @user = User.find_by(email: auth_params[:email])
    if @user && @user.authenticate(auth_params[:password])
      jwt = Auth.issue({user: @user.id})
      render json: {jwt: jwt, user_id: @user.id}
    else     
      render json: {errors: !!@user ? "Please enter password again" : "User not found"}, status: 401  
    end
  end

  private

  def auth_params
    params.require(:auth).permit(:email, :password)
  end  

end
