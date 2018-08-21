class EventSerializer < ActiveModel::Serializer  
  attributes :id, :name, :description, :location, :date_time, :user_events
  # has_many :user_events

  def user_events
    object.user_events.collect do |ue| 
      Hash[:id => ue.id , :user_id => ue.user_id, :username => ue.user.username]
    end
  end


end