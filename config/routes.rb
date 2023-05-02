Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  # post 'api/test', to: 'application#test'
  
  namespace :api, defaults: { format: :json } do

    
    resources :users, only: [:create,:index, :show, :find_by_name] do
      resources :boards, only: [:index, :show, :update, :destroy, :find_by_boardname]
    end
    resource :session, only: [:show, :create, :destroy]

    # get '/boards/cover/:board_id', to: 'boards#board_cover', as: 'board_cover'
    resource :boards, only:  [:create]
 
    get '/boards/saved/:board_id', to: 'pins#find_board_saved_pins', as: 'find_board_saved_pins'
    get '/pins/created/:uploader_id', to: 'pins#find_created_pins', as: 'find_created_pins'
    get 'pins/homepage', to: 'pins#homepage_pins', as: 'homepage_pins'
    resources :pins, only: [:create, :index, :update, :destroy, :show]

 
 
 
  end

  
  get '*path', to: "static_pages#frontend"
end
