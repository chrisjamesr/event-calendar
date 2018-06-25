class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :location, :date, :time 
end
