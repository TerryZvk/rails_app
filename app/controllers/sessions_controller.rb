class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by(email: params[:session][:email].downcase)
    # byebug
    if user && user.authenticate(params[:session][:password])
      log_in user 
      params[:session][:remember_me] == true ? remember(user) : forget(user)
      render :json => user.to_json
    else
      render :json => { err: true, message: '密码或邮箱错误！'}
    end  
  end

  def destroy
    log_out
  end
end
