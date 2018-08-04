class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email
  has_many :user_events
  has_many :events, through: :user_events
end
