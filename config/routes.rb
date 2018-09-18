Rails.application.routes.draw do
  root to: 'home#home'
  # post 'user_token' => 'user_token#create'
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope '/api' do
    post 'user_token' => 'user_token#create'
    resources :user_events, :as => :rsvp, :path => :rsvp, :only => [:create, :index, :update]
    resources :events, :except => [:new, :edit]
    resources :users, :only => [:create, :show ] do
      resources :events, :only => [:index]
    end
  end
  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
