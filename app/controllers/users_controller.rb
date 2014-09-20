class UsersController < ApplicationController

  #Get form for new user
  def new
    @user = User.new
  end

  #post for new user
  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      redirect_to root_path
    else
      render 'new'
    end
  end

  def login
  	@user = User.find_by_email(params[:email])
    if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id
    else
      if request.xhr?
        render :json => {message: "fail"}
      else
        redirect_to root_path
      end
    end

    if request.xhr?
      p "login xhr"
    	render :json => Recommendation.where(recFor: @user).to_json(:include => [:restaurant, :recBy])
    else
      p "login redirect"
    	redirect_to root_path
    end
  end

  def logout
    
    session[:user_id] = nil
    if request.xhr?
      p "logout xhr"
      render :json => {status: 200}
    else
      p "logout redirect"
      redirect_to root_path
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end

end