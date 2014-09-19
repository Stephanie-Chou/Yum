class User < ActiveRecord::Base
	has_many :friends
	has_secure_password

	def self.find_friends(user)
		p "in find_friends"
		friends = []
		Friend.where(user1: user).pluck('user2').each{|id| friends << User.find(id)}
		Friend.where(user2: user).pluck('user1').each{|id| friends << User.find(id)}
		return friends
	end
end
