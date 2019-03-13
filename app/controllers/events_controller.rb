class EventsController < ApplicationController
  skip_before_action :authenticate, only: [:index, :show]
  # require 'statsd'

  statsd = Statsd.new('localhost', 8125)

# Increment a counter.
  
  def create
    event = Event.new(event_params.merge(creator_id: current_user.id))
    if event.save
      puts event.attributes
      render json: event, status: 201
    else
      head 400
    end  
  end

  def index
    if params[:user_id].present? && params[:user_id].to_i === current_user.id
      events = Event.by_user(current_user.id).upcoming_events.order(:date_time)
      render json: events, each_serializer: EventIndexSerializer, status: 200
    else  
      events = Event.all.order(:date_time).upcoming_events
      render json: events, each_serializer: EventIndexSerializer, status: 200
    end
    statsd.increment('rubyapp.pages.views')
  end

  def show
    event = Event.find(params[:id])
    puts event.attributes
    render json: event, status: 200
  end

  def update
    event = Event.find(event_params[:id])
    if event.update(event_params)
      render json: event, status: 200
      puts "updated: #{event.attributes}"
    else
      puts event.errors.full_messages  
      head 400
    end
  end

  def destroy
    event = Event.find(event_params[:id])
    if event.destroy
      render json: event,
        status: 200,
        message: "Event has been destroyed."
    else
      puts event.errors.full_messages
      head 400
    end
  end

  private

    def event_params
      params.require(:event).permit(:id, :name, :description, :location, :date_time)
    end

end 
