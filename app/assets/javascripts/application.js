// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require react
//= require react_ujs
//= require components
//= require_tree .
$(document).ready(function(){
	console.log("ready");
	$("#restaurant_btn").click(function(e){
		e.preventDefault();
		city = $("#city").val();
		term = $("#term").val();
		console.log("clicked restaurant button");
		// request = $.get("yelp", {city: city, term: term});
		// request.done(function(data){
		// 	// RenderRestaurantCollection(data.businesses);
		// 	console.log(data);
		// 	debugger;

		// });
	});
	$("#recommend_btn").click(function(){
		console.log("hit recommend");
		request = $.post("recommend", {restaurant: selectedRestaurant, friend: selectedFriend })
		request.done(function(data){
			// send alert done
			$("#recModal_alert").html('<div class="alert alert-success" role="alert">Yum!</div>')
		});
	});
});


