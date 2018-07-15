Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'upload'=>'upload#upload_images'
  post 'upload'=>'upload#handle_upload'
end
