class EventSerializer < ActiveModel::Serializer  
  attributes :id, :name, :description, :location, :date_time, :user_events
  # has_many :user_events

  def user_events
    object.user_events.inject({}) do |memo, ue| 
      Hash[ue.id => Hash[:id => ue.user_id, :username => ue.user.username]]
    end  
  end


end