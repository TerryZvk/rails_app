require "rails_helper"

RSpec.describe User, :type => :model do
  before do
    @user = User.create(name:'terry', email:'12345test@qq.com')
  end

  it "should be valid" do
    expect(@user).to be_valid
  end

  it "name should be valid" do
    expect(@user.name).to eq('terry') 
  end

  it "name should be valid" do
    expect(@user.email).to eq('12345test@qq.com') 
  end

  
    
  
end