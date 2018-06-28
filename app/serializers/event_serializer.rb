class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :notes, :location, :date_time
end
