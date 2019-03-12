# require 'ddtrace'
Datadog.configure do |c|
  c.use :rails, service_name: 'event-list-heroku'
end