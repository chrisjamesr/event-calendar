# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'ffaker'

15.times do
  Event.create do |e|
    e.name = FFaker::Conference.name
    e.notes = FFaker::Lorem.sentence
    e.location = [
      FFaker::AddressUS.street_address, 
      FFaker::AddressUS.city, 
      FFaker::AddressUS.state_abbr
    ].join(', ')
    e.date_time = FFaker::Time.between(DateTime.now, DateTime.new(2018, 12, 31, 23, 59))
  end
end
