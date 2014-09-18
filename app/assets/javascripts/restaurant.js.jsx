/*** @jsx React.DOM */

var RestaurantCollection = React.createClass({
	getInitialState: function(){
		var collection = {};
		$.each(this.props.restaurants, function(){
			collection[this.id] = (<Restaurant id = {this.id} name = {this.name} url={this.mobile_url}/>)
		});
		return {collection: collection};
	},
	componentWillReceiveProps: function(nextProps){
		console.log(nextProps)
		var collection = {};
		$.each(nextProps.restaurants, function(){
			collection[this.id] = (<Restaurant id = {this.id} name = {this.name} url={this.mobile_url}/>)
		});
		this.setState({collection: collection})
	},
	render: function(){
		return(
			<ul>{this.state.collection}</ul>
		)
	}
})

var Restaurant = React.createClass({
	onClick: function(){
		getFriends();	
	},
	render: function(){
		return(
			<li onClick= {this.onClick} id={this.id}>{this.props.name}</li>
		)
	}
});

	function recommend(options){
	request = $.post('recommend', {business_id: options.id, name: options.name, url: options.url});
	request.done(function(data){
		console.log(data);
		// provide success alert message
	});
}

	function getFriends(){
		request = $.get("friends");
		request.done(function(data){
			RenderFriendCollection(data);
		});
	}
