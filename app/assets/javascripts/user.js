
$(document).ready(function(){
	$("#login_btn").on("click", function(e){
		e.preventDefault();
		console.log("clicked!");
		var email = $('#email').val();
		var password = $('#password').val();
		request = $.post("users/login", user={email: email, password: password});
	});
});
