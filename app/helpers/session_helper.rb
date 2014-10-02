module SessionHelper

	def signed_in?
		 session[:user_id] != nil
	end

	def current_user
		@current_user = signed_in? ? User.find(session[:user_id]) : nil
	end
end
