class UserEventSerializer < ActiveModel::Serializer
  attributes :id, :user, :event
  belongs_to :user
  belongs_to :event

  def user
    {id: object.user.id, username: object.user.username}
  end

  def event
    {id: object.event.id, name: object.event.name}
  end

end
