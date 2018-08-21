class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :user_events
  has_many :user_events
  
  def user_events
    object.user_events.collect do |ue| 
      Hash[:id => ue.id , :user_id => ue.event_id, :username => ue.event.name, :attending => ue.attending]
    end
  end

end
