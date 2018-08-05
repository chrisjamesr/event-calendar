class UserEventSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :user
  belongs_to :event

  def user
    object.user.collect {|u| u.id; u.username}
  end

  def event
    object.event.collect {|e| e.id; e.name}
  end

end
