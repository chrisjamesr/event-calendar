class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :notes, :location, :date, :time 
end
