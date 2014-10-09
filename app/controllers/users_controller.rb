require 'pry'
class UsersController < ApplicationController
  include SessionHelper
  include ApplicationHelper
  #Get form for new user
  def new
    @user = User.new
  end

  def profile
    @user = current_user
    @recommendations = Recommendation.where(recFor: @user)
    @friend_requests = User.find_friend_requests(@user)
  end

  def recommendations
    @user = current_user
    recommendations = Recommendation.where(recFor: @user)
    # binding.pry
    if request.xhr?
      render :json => recommendations.to_json(:include => [:restaurant, :recBy])
      # render :json => recommendations.to_json
    end
  end

  def logout
    session.clear
    if request.xhr?
      p "logout xhr"
      redirect_to root_path
    else
      p "logout redirect "*100
      redirect_to root_path
    end
  end

  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      redirect_to profile_path
    else
      render 'new'
    end
  end

  def login
  	@user = User.find_by_email(params[:user][:email])
    
    @errors = {}

    if @user == nil
      @errors[404] = "user not found"
    else
      @authenticate = @user.authenticate(params[:user][:password])
      if @authenticate == false
        @errors[500] = "Password and Email Combination incorrect"
      end
    end
    

    # set_errors(errors)
    
    if @user && @authenticate
      session[:user_id] = @user.id
      p session[:user_id]
      if request.xhr?
      p "xhr "*20
      render :json => Recommendation.where(recFor: @user).to_json(:include => [:restaurant, :recBy])
      else
        p "login redirect "*10
        redirect_to profile_path
      end
    else
      if request.xhr?
        p "xhr "*20
        render :json => {error: '404'}
      else
        p "root "*20
        render :template => "welcome/index", :locals => {:errors => @errors}
        # redirect_to root_path
      end
    end
  end



  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end

end