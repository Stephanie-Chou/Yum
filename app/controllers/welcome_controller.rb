class WelcomeController < ApplicationController
	include SessionHelper
  def index
  	if signed_in?
  		@recommendations = Recommendation.where(recFor: current_user)
  	end
    @friend_requests = User.find_friend_requests(current_user)
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
      Friend.create(user1: current_user, user2: user, accepted: false)
      if request.xhr?
        render :json => {status: 200, message: "Yum!"}
      end
    else
      if request.xhr?
        render :json => {status: 100, message: "Sorry. That email doesn't exist!"}
      end
    end
  end

  def accept_request
    friend = Friend.find(params[:id])
    if params[:accept] == true

    else

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