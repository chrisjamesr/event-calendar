class UserEventSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :username, :event_id, :attending, :creator
  # belongs_to :user
  # belongs_to :event

  # def user_event
  #   Hash[:id => object.id, :user_id => object.user_id, :username => object.user.username, :attending=> object.attending]
  # end

  def username
    object.user.username
  end


  # def event
  #   {id: object.event.id, name: object.event.name}
  # end

end
