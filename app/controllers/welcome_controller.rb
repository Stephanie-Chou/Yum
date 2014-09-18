class WelcomeController < ApplicationController
	include SessionHelper
  def index
  	if signed_in?
  		@recommendations = Recommendation.where(recFor: current_user)
  		p @recommendations
  	end
  end

  def yelp
  	returnVal = Recommendation.find
  	if request.xhr?
  		render :json => returnVal.to_json
  	end
  end
end