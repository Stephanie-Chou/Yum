/*** @jsx React.DOM */

var FriendCollection = React.createClass({
	getInitialState: function(){
		var collection = {};
		friends = this.props.friends
		$.each(friends, function(i){
			collection["friend-"+this.id] = (<Friend id={this.id} name = {this.name} email={this.email}/>)
		});
		return {collection: collection};
	},
	componentWillReceiveProps: function(nextProps){
		console.log(nextProps)
		var collection = {};
		$.each(nextProps.friends, function(d){
			collection["friend-"+this.id] = (<Friend id={this.id} name = {this.name} email={this.email}/>)
		});
		this.setState({collection: collection})
	},
	render: function(){
		return(
			<div className = "list-group"><h2>Friends!</h2> {this.state.collection}</div>
		)
	}
})

var selectedFriend = {};

var Friend = React.createClass({
	onClick: function(){
		// var name = this.props.name
		// $('#friends').html('<p>'+name+'<p>');

		selectedFriend["name"]=this.props.name
		selectedFriend["email"]=this.props.email
		React.renderComponent(
			<Friend id = {this.props.id} name = {this.props.name} email= {this.props.email}/>,
			document.getElementById('friends')
		)
	},
	render: function(){
		return(
			<a className = "list-group-item" onClick= {this.onClick} id={this.id}>{this.props.name}</a>
		)
	}
});
function RenderFriendCollection(friends){
		React.renderComponent(
			<FriendCollection friends = {friends}/>,
			document.getElementById('friends')
		)
	}