Datadog.configure do |c|
  c.use :rails, service_name: 'event-list-trace-agent' 
end