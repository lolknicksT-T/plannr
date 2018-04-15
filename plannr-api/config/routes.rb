Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :plans, only: [:create, :update, :destroy]
      get '/plans', to: 'plans#index'
      get '/plans/:id', to: 'plans#show'
      post 'user_plans/find', to: 'user_plans#find'
      resources :user_plans, only: [:create, :destroy]
      resources :sessions, only: [:create, :destroy]
      resources :conversations, only: [:show, :create] do
        resources :messages, only: [:index, :create]
      end
      resources :users, only: [:create] do
        get '/my_plans', to: 'plans#my_plans'
        get '/past_plans', to: 'plans#past_plans'
      end
    end
  end
  mount ActionCable.server => '/cable'
end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
