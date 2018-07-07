Rails.application.routes.draw do
  root to: 'home#home'
  post 'user_token' => 'user_token#create'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope '/api' do
    resources :events, :except => [:new, :edit]
  end
end
