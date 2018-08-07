class UserEventsController < ApplicationController

  def create
    if logged_in?
      if user_event = UserEvent.create(user_event_params)
        render json: user_event, status: 200
      end
    else
      render head: 403
    end
  end

  def destroy
    binding.pry
    logged_in? ? user_event.find(id: user_event_params[:id]).destroy : (head 403)
  end

  private

  def user_event_params
    params.require(:rsvp).permit(:id, :user_id, :event_id)
  end

end
