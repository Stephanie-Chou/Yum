class UsersController < ApplicationController
  include SessionHelper
  #Get form for new user
  def new
    @user = User.new
  end

  def profile
    @user = current_user
    @recommendations = Recommendation.where(recFor: @user)
    @friend_requests = User.find_friend_requests(@user)
  end

  def logout
    p "*"*100
    session.clear
    if request.xhr?
      p "logout xhr"
      redirect_to root_path
      # render :json => {status: 200}
    else
      p "logout redirect "*100
      redirect_to root_path
    end
  end
  #post for new user
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
    p "*"*100
  	@user = User.find_by_email(params[:user][:email])
    if @user && @user.authenticate(params[:user][:password])
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
        redirect_to root_path
      end
    end

    
  end



  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end

end