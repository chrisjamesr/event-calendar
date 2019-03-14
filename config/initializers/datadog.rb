
Datadog.configure do |c|
  c.use :rails, service_name: 'event-list-trace-agent' 
  c.tracer hostname: 'trace-agent'
  c.tracer enabled: true
  c.tracer env: Rails.env
end