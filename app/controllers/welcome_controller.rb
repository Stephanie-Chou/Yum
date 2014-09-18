class WelcomeController < ApplicationController
	include SessionHelper
  def index
  	if signed_in?
  		@recommendations = Recommendation.where(recFor: current_user)
  		p @recommendations
  	end
  end
end