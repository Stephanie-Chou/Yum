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
//= require bootstrap-sprockets
//= require_tree .
$(document).ready(function(){
	$("#login_btn").on("click", function(e){
		e.preventDefault();
		console.log("login button")
		login();
	});
	$("#logout").on("click", function(e){
		console.log("logout button")
		e.preventDefault();
		logout();
	});
	$("#restaurant_btn").click(function(e){
		e.preventDefault();
		city = $("#city").val();
		term = $("#term").val();
		request = $.get("yelp", {city: city, term: term});
		request.done(function(data){
			RenderRestaurantCollection(data.businesses);
		});
	});

	$("#recommend_btn").click(function(){
		console.log("hit recommend");
		request = $.post("recommend", {restaurant: selectedRestaurant, friend: selectedFriend })
		request.done(function(data){
			// send alert done
			$("#recModal_alert").html('<div class="alert alert-success" role="alert">Yum!</div>')
		});
	});
	
	$("#friend_btn").click(function(){
		email = $("#friend").val();
		request = $.get("friend_request", {email: email});
		request.done(function(data){
			if (data.status === 200){
				$("#friendModal_alert").html('<div class="alert alert-success" role="alert">'+data.message+'</div>')
			}
			else{
				$("#friendModal_alert").html('<div class="alert alert-danger" role="alert">'+data.message+'</div>')
			}
		});
	});

	$(".request").click(function(e){
		var response;
		var id = $(this).attr('id');
		if (e.target.classList.contains("accept")){
			response = true; 
		}
		else{
			response = false;
		}
		var request = $.post('accept_request', {response: response, id: id});
		request.done(function(data){
			if (data.status === 200){
				$("#friendModal_alert").html('<div class="alert alert-success" role="alert">'+data.message+'</div>')
			}
			else{
				$("#friendModal_alert").html('<div class="alert alert-danger" role="alert">'+data.message+'</div>')
			}
			// removed the friend from the list
			this.remove();
		}.bind(this));
	});

});