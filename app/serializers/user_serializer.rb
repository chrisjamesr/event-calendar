class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :user_events
  has_many :user_events
  


end
