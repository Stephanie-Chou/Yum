class WelcomeController < ApplicationController
  include SessionHelper
  def index
    if signed_in?
      redirect_to profile_path
    else
      binding.pry
      @user = User.new
    end
  end

  def yelp
    returnVal = Recommendation.find(params[:city], params[:term])
    if request.xhr?
      render :json => returnVal.to_json
    end
  end
  
  def friends
    friends = User.find_friends(current_user)

    if request.xhr?
      render :json => friends.to_json
    end
  end
  
  def friend_request
    if User.exists?(email: params[:email])
      user = User.find_by(email: params[:email])
      if Friend.exists?(user1: current_user, user2: user) || Friend.exists?(user2: current_user, user1: user)
        if request.xhr?
        render :json => {status: 500, message: "You're already foodie friends!"}
        end
      elsif user == current_user
        if request.xhr?
        render :json => {status: 500, message: "Hey. That's you!"}
        end
      else
        Friend.create(user1: current_user, user2: user, accepted: false)
        if request.xhr?
          render :json => {status: 200, message: "Yum!"}
        end
      end
    else
      if request.xhr?
        render :json => {status: 500, message: "Sorry. That email doesn't exist!"}
      end
    end
  end

  def accept_request
    friend = Friend.find(params[:id])
    if params[:response] == "true"
      friend.update(accepted: true)
      message = "you have a new friend!"
    else
      # friend.destroy
      message = "shhh. you rejected someone"
    end

    if request.xhr?
      render :json => {status: 200, message: message}
    end
  end

  def recommend
    # create recommendation
    p params
    if Restaurant.exists?(:name => params[:restaurant][:name])
      restaurant = Restaurant.find_by(name: params[:restaurant][:name]);
    else
      restaurant = Restaurant.create(name: params[:restaurant][:name])
    end

    friend = User.find_by(email: params[:friend][:email]);
    Recommendation.create(restaurant: restaurant, recBy: current_user, recFor: friend)
    if request.xhr?
      render :json => {message: "Yum!"}
    end

  end
end