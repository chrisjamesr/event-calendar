class EventSerializer < ActiveModel::Serializer  
  attributes :id, :name, :description, :location, :date_time
  has_many :user_events
  has_many :users, through: :user_events
end
