require 'yelp'

class Recommendation < ActiveRecord::Base
	belongs_to :restaurant
	belongs_to :recBy, class_name: "User"
	belongs_to :recFor, class_name: "User"
	
	# Yelp.client.configure do |config|
	#   config.consumer_key= "p1AVHI_NO6lY4azN6D0-eA",
	#   config.consumer_secret= "iHjRAfO1MAhv_ac_u3ODwwra4jY",
	#   config.token= "GuejeybEXXJiO7K3a2-CtmV3emSClH8u",
	#   config.token_secret= "QqvmpQNaP6XyggS2k3eXG7HbJQs"
	# end

	def self.find
		client = Yelp::Client.new({ consumer_key: "p1AVHI_NO6lY4azN6D0-eA",
                            consumer_secret: "iHjRAfO1MAhv_ac_u3ODwwra4jY",
                            token: "GuejeybEXXJiO7K3a2-CtmV3emSClH8u",
                            token_secret: "QqvmpQNaP6XyggS2k3eXG7HbJQs"
                          })
		client.search('San Francisco', { term: 'food' })
	end
end
