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
			<div className = "list-group">{this.state.collection}</div>
		)
	}
})

var selectedRestaurant = {};

var Restaurant = React.createClass({
	onClick: function(){
		getFriends();	
		// var name = this.props.name
		// $('#restaurant_results').html('<p>'+name+'<p>')
		selectedRestaurant["name"]=this.props.name
		selectedRestaurant["url"]=this.props.url
		React.renderComponent(
			<Restaurant id = {this.props.id} name = {this.props.name}/>,
			document.getElementById('restaurant_results')
		)
	},
	render: function(){
		return(
			<a className="list-group-item" onClick= {this.onClick} onMouseOver={this.onMouseOver} id={this.id}>{this.props.name}</a>
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


	function RenderRestaurantCollection(restaurants){
		React.renderComponent(
			<RestaurantCollection restaurants = {restaurants}/>,
			document.getElementById('restaurant_results')
		)
	}