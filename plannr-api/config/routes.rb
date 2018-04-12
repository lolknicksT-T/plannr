Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :conversations, only: [:show, :create] do
        resources :messages, only: [:index, :create]
      end
      resources :users, only: [:create] do
        resources :plans, only: [:index, :show, :create, :update]
        get '/past_plans', to: 'plans#past_plans'
      end
    end
  end
  mount ActionCable.server => '/cable'
end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
