class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :user_events
  # has_many :user_events, serializer: UserEventSerializer
  
  def user_events
    object.user_events.inject({})do |memo, ue| 
      Hash[ue.id => Hash[:id => ue.user_id, :username => ue.user.username]]
    end
  end

end
