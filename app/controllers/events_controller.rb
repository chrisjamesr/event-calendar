class EventsController < ApplicationController

  def create
    event = Event.new(event_params)
    render json: event, status: 201
  end



  private

    def event_params
      params.require(:event).permit(:name, :description, :location, :date, :time)
end 
