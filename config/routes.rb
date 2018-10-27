Rails.application.routes.draw do
  root 'home_page#index'
  
  get 'upload' => 'upload#upload_images'
  post 'upload' => 'upload#handle_upload'
end
