Datadog.configure do |c|
  c.use :rails, service_name: 'event-list-trace-agent' 
  c.use :active_record, service_name: 'trace-agent-active-record'
end