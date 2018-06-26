class Event < ApplicationRecord

  validates :name, uniqueness: {case_sensitive: false}
  validates :location, presence: {allow_blank: true}
  validates :date_time, presence: {allow_blank: false}

  attr_reader :date, :time

  def date
    @date = self.date_time.strftime('%m-%d-%Y')

  end

  def time
    @time = self.date_time.strftime('%I:%M %p')
  end
end
