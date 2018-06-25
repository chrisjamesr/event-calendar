class Event < ApplicationRecord

  validates :name, uniqueness: {case_sensitive: false}
  validates :location, presence: {allow_blank: false}
  # validates :time, :date, presence: {allow_blank: false}
end
