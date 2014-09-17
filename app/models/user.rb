class User < ActiveRecord::Base
	attr_accessible :email, :password, :password_confirmation
	has_many :friends
	has_secure_password
end
