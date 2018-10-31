Rails.application.routes.draw do
  get 'sessions/new'
  root 'home_page#index'
  
  get 'upload' => 'upload#upload_images'
  post 'upload' => 'upload#handle_upload'
  get 'signup' => 'users#new'
  get 'login' => 'users#login'

  resources :users
  
 end
