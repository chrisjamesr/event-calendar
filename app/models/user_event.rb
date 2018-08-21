class UserEvent < ApplicationRecord
  belongs_to :user
  belongs_to :event

  validates :user_id, :event_id, :presence => true
  validates :user_id, :uniqueness => {:scope => :event_id}

  def toggle_attending
    self.update(attending: !self.attending)
  end

end
