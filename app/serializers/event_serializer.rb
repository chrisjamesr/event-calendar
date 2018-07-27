class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :location, :date_time
end
