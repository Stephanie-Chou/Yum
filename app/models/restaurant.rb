class Restaurant < ActiveRecord::Base
	has_many :recommendations
end
