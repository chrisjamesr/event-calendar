require 'ffaker'
10.times do
  User.create do |u|
    u.email = FFaker::Internet.email,
    u.password = FFaker::Internet.password
  end
end

15.times do
  Event.create do |e|
    e.name = FFaker::Conference.name
    e.description = FFaker::Lorem.sentence
    e.location = [
      FFaker::AddressUS.street_address, 
      FFaker::AddressUS.city, 
      FFaker::AddressUS.state_abbr
    ].join(', ')
    e.date_time = FFaker::Time.between(DateTime.now, DateTime.new(2020, 12, 31, 23, 59))
  end
end

User.all.each do |u|
  3.times do 
    UserEvent.create(user_id: u.id, event_id: Event.all.sample.id)
  end
end

User.all.each {|u| u.update(:email=> u.email.match(/(\w\S+\b)/)[0])}
