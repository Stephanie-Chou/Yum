class User < ActiveRecord::Base
	has_many :friends
	has_secure_password

	def self.find_friends(user)
		friends = []
		Friend.where(user1: user, accepted: true).pluck('user2').each{|id| friends << User.find(id)}
		Friend.where(user2: user, accepted: true).pluck('user1').each{|id| friends << User.find(id)}
		return friends
	end

	def self.find_friend_requests(user)
		# returns an array of friends
		friends = []
		# user2 is the requestee
		p "*"*100
		Friend.where(user2: user, accepted: false)
	end
end
