/*** @jsx React.DOM */

var Navigation = React.createClass({
	componentDidUpdate: function(){
		console.log("componentDidUpdate")
	},
	logout: function(){
		console.log("logout click");
		logout();
	},
	navOptions: function(signed_in){
		if (signed_in === true){
			return (
				<ul className="nav navbar-nav">
		      <li id = "add_friend" data-toggle="modal" data-target="#friendModal"><a>Add Friend</a></li>
					<li id = "new_rec" data-toggle="modal" data-target="#recModal"><a>New Recommendation</a></li>
		  		<li id = "logout" onClick={this.logout}><a>Logout</a></li>
		    </ul>	
			)
		}
		else{
			return(<ul className="nav navbar-nav"></ul>)
		}
	},
	render: function(){
		return (
			this.navOptions(this.props.signed_in)
		)
	}
});

var Login = React.createClass({
	login: function(){
		login();
	},
	render: function(){
		return(
			<form id="login_form">
				<input type="email" className="form-control" id="email" placeholder="Email"/>
				<input type="password" className="form-control" id="password" placeholder="Password"/>
				<button type="submit" className="btn btn-default" id = "login_btn" onClick={this.login}>Log in</button>
			</form>

		)
	}
});


	function logout(){
		request = $.post("users/logout");
		request.done(function(){
			console.log("logged out");
			RenderNavigation(false);
			RenderLogin();
		})
	}
	function login(){
		var email = $('#email').val();
		var password = $('#password').val();
		request = $.post("users/login", user={email: email, password: password});
		request.done(function(data){
			console.log("logged in");
			RenderNavigation(true);
			RenderRecommendationCollection(data);
		});
	}


	function RenderRecommendationCollection(recommendations){
		React.renderComponent(
			<RecommendationCollection recommendations={recommendations} />,
			document.getElementById('main_container')
		);
	}
	function RenderNavigation(signed_in){
		React.renderComponent(
			<Navigation signed_in={signed_in} />,
			document.getElementById('navOptions')
		);
	}

	function RenderLogin(){
		React.renderComponent(
			<Login/>,
			document.getElementById('main_container')
		)
	}
	function RenderRestaurantCollection(restaurants){
		React.renderComponent(
			<RestaurantCollection restaurants = {restaurants}/>,
			document.getElementById('restaurant_results')
		)
	}

	function RenderFriendCollection(friends){
		console.log(friends);
		React.renderComponent(
			<FriendCollection friends = {friends}/>,
			document.getElementById('friends')
		)
	}

