/*** @jsx React.DOM */

var Navigation = React.createClass({
	render: function(){
		return (
			navOptions(this.props.signed_in)
		)
	}
});

var navOptions function(signed_in){
	if (signed_in === true){
		return (
			<ul className="nav navbar-nav">
	      <li id = "add_friend"><a href="#">Add Friend</a></li>
				<li id = "new_rec"><a href="#">New Recommendation</a></li>
	  		<li id = "logout"><a href="#">Logout</a></li>
	    </ul>	
		)
	}
	else{
		return(<ul className="nav navbar-nav"></ul>)
	}
}