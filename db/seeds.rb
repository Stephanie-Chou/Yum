# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

pig = Restaurant.create(name: 'Purple Pig')
bob = User.create(name: "bob", email: "bob@bob.com", password: "bob")
susie = User.create(name: "susiebob", email: "susie@bob.com", password: "susie")
recommendation = Recommendation.create(restaurant: pig, recBy: bob, recFor: susie)
friend = Friend.create(user1: bob, user2: susie)
