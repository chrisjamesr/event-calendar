
namespace :start do
  task :development do
    exec 'heroku local -f Procfile.dev'
  end
  task :vm_production do
    exec 'bundle exec rails s'
  end
end

desc 'Start development server'
task :start => 'start:development'
task :start_vm => 'start:vm_production'
