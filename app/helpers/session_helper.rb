module SessionHelper

	def logged_in?
		current_user ? true : false
	end

	def current_user
		@current_user ||= User.find(session[:user_id])
	end
end
