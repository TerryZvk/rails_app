Rails.application.routes.draw do
  root 'home_page#index'
  
  get 'upload' => 'upload#upload_images'
  post 'upload' => 'upload#handle_upload'
  get 'signup' => 'users#new'
  get 'login' => 'sessions#new'
  post 'login' => 'sessions#create'
  delete 'logout'  => 'sessions#destroy'

  resources :users
  
 end
