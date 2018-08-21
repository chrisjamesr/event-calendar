class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :user_events
  # has_many :user_events, serializer: UserEventSerializer
  
  def user_events
    object.user_events.collect do |ue| 
      Hash[ue.id => Hash[:id => ue.event_id, :username => ue.event.name]]
    end
  end

end
