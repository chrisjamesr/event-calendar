class UserEventsController < ApplicationController

  def create
    if user_event = UserEvent.create(user_id: current_user.id, event_id: user_event_params[:event_id])
        render json: user_event, status: 200
    else
      render head: 403
    end
  end

  def index
      user_events = current_user.user_events
      render json: user_events, status: 200
  end

  def destroy
    binding.pry
    logged_in? ? user_event.find(id: user_event_params[:id]).destroy : (head 403)
  end

  private

  def user_event_params
    params.require(:rsvp).permit(:id, :event_id)
  end

end
