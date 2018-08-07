class UserEvent < ApplicationRecord
  belongs_to :user
  belongs_to :event

  validates :user_id, :event_id, :presence => true
  validate :unique_rsvp

  def unique_rsvp
    errors.add(:event_id, "You've already RSVP'd") if UserEvent.where(user_id: self.user_id, event_id: self.event_id).present?
  end
end
