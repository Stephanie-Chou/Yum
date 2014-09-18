/*** @jsx React.DOM */

var FriendCollection = React.createClass({
	getInitialState: function(){
		var collection = {};
		friends = this.props.friends
		$.each(friends, function(i){
			collection["friend-"+this.id] = (<Friend id={this.id} name = {this.name}/>)
		});
		return {collection: collection};
	},
	componentWillReceiveProps: function(nextProps){
		console.log(nextProps)
		var collection = {};
		$.each(nextProps.friends, function(){
			collection["friend-"+this.id] = (<Friend id={this.id} name = {this.name}/>)
		});
		this.setState({collection: collection})
	},
	render: function(){
		return(
			<ul><h2>Friends!</h2> {this.state.collection}</ul>
		)
	}
})

var Friend = React.createClass({
	onClick: function(){
		// select the friend. put name of friend in a place.
	},
	render: function(){
		return(
			<li onClick= {this.onClick} id={this.id}>{this.props.name}</li>
		)
	}
});
