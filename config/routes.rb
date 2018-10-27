Rails.application.routes.draw do
  root 'upload#upload_images'
  get 'upload'=>'upload#upload_images'
  post 'upload'=>'upload#handle_upload'
end
