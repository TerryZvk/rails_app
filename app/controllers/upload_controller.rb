require 'qiniu'
class UploadController < ApplicationController
  skip_before_action :verify_authenticity_token
  def upload_images

  end  

  def handle_upload
    Qiniu.establish_connection! access_key: ENV['ACCESS_KEY'],
                                secret_key: ENV['SECRET_KEY']
    filePath = params[:img].path
    #byebug
    Qiniu::Storage.upload_with_token_2(
      uptoken,
      filePath,
      img_key,
      nil,
      bucket: bucket
     )
  end

  private

  def img_key
    params[:img].original_filename
  end

  def uptoken
    Qiniu::Auth.generate_uptoken(put_policy)
  end

  def put_policy
    Qiniu::Auth::PutPolicy.new(
      bucket, 
      img_key,   
      3600
    )
  end

  def  bucket
    'images'
  end

end
