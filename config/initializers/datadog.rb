require 'ddtrace'
Datadog.configure do |c|
  c.use :rails, service_name: 'event_list_heroku'
end