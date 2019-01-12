class ApplicationController < ActionController::Base
  protect_from_forgery :except => [:create, :destroy]
  include SessionsHelper
end
