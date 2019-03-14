require 'ddtrace'
Datadog.configure do |c|
  c.use :rails, service_name: 'event-list-heroku' 
  c.tracer hostname: 'trace-agent'
  c.tracer enabled: true
  c.tracer env: Rails.env
end