Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get '/plans', to: 'plans#index'
      get '/plans/:id', to: 'plans#show'
      resources :sessions, only: [:create, :destroy]
      resources :conversations, only: [:show, :create] do
        resources :messages, only: [:index, :create]
      end
      resources :users, only: [:create] do
        resources :plans, only: [:create, :update]
        get '/my_plans', to: 'plans#my_plans'
        get '/past_plans', to: 'plans#past_plans'
      end
    end
  end
  mount ActionCable.server => '/cable'
end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
