class WelcomeController < ApplicationController
	include SessionHelper
  def index
  	if signed_in?
  		@recommendations = Recommendation.where(recFor: current_user)
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
  
  def recommend
    # create recommendation
    if request.xhr?
      render :json => {message: "Yum!"}
    end

  end
end