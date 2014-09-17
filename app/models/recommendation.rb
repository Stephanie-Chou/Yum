class Recommendation < ActiveRecord::Base
	belongs_to :restaurant
	belongs_to :recBy, class_name: "User"
	belongs_to :recFor, class_name: "User"
end
