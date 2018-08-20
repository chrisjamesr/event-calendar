class UserEventSerializer < ActiveModel::Serializer
  attributes :id, :user
  # attributes :rsvp
  # belongs_to :user
  # belongs_to :event

  def rsvp
    Hash[:rsvp_id => object.id, :user_id => object.user_id, :username => object.user.username]
  end

  def user_id
    {id: object.user.id, username: object.user.username}
  end

  def event
    {id: object.event.id, name: object.event.name}
  end

end
