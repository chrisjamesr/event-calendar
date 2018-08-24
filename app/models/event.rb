class Event < ApplicationRecord
  scope :ordered_events, -> { order(:date_time) }

  has_many :user_events, dependent: :destroy
  has_many :users, :through => :user_events
  
  validates :name, uniqueness: {case_sensitive: false}
  validates :location, presence: {allow_blank: true}
  validates :date_time, presence: true
  after_create :creator_rsvp

  attr_reader :date, :time
  attr_accessor :creator_id

  def date
    @date = self.date_time.strftime('%m-%d-%Y')

  end

  def time
    @time = self.date_time.strftime('%I:%M %p')
  end

  private
  def creator_rsvp
    if self.id.present?
      self.user_events.create(event_id: self.id, user_id: self.creator_id, creator: true)
    end
  end
end
