class EventsController < ApplicationController
  before_action :authenticate_user, only: [:create, :update, :destroy]
  def create
    event = Event.new(event_params)
    if event.save
      render json: event, status: 201
    else
      render json: event.errors
    end  
  end

  def index
    events = Event.all.order(:date_time)
    render json: events, status: 200
  end

  def show
    event = Event.find(params[:id])
    render json: event, status: 200
  end

  def update
    event = Event.find(params[:id])
    event.update(event_params)
    render json: event, status: 200
  end

  def destroy
    event = Event.find(params[:id])
    event.destroy
    render json: {
      status: 200,
      message: "Event has been destroyed."
    }
  end


  private

    def event_params
      params.require(:event).permit(:name, :description, :location, :date_time)
    end
end 
