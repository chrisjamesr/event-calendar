class Event < ApplicationRecord
  scope :ordered_events, -> { order(:date_time) }

  has_many :user_events
  has_many :users, :through => :user_events
  
  validates :name, uniqueness: {case_sensitive: false}
  validates :location, presence: {allow_blank: true}
  validates :date_time, presence: true

  attr_reader :date, :time

  def date
    @date = self.date_time.strftime('%m-%d-%Y')

  end

  def time
    @time = self.date_time.strftime('%I:%M %p')
  end
end
