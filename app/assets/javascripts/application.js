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
//= require bootstrap-sprockets
//= require react
//= require_tree .
$(document).ready(function(){
	$("#login_btn").on("click", function(e){
		e.preventDefault();
		console.log("clicked!");
		var email = $('#email').val();
		var password = $('#password').val();
		request = $.post("users/login", user={email: email, password: password});
		request.done(function(data){
			RenderRecommendationCollection(data);
			RenderNavigation(true);
			// render NavBar with new stuff
		});
	});
	$("#logout").on("click", function(e){
		e.preventDefault();
			request = $.post("users/logout");
			request.dont(function(){
				RenderNavigation(false);
				// render log in
				// render NavBar
			})
	});
});