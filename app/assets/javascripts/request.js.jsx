/*** @jsx React.DOM */
// var FriendRequestCollection = React.createClass({
// 	getInitialState: function(){
// 		var collection = {};
// 		friendRequests = this.props.friendRequests
// 		$.each(friendRequests, function(i){
// 			collection["friendRequest-"+this.id] = (<friendRequest id={this.id} name = {this.name} email={this.email}/>)
// 		});
// 		return {collection: collection};
// 	},
// 	componentWillReceiveProps: function(nextProps){
// 		var collection = {};
// 		$.each(nextProps.friendRequests, function(d){
// 			collection["friendRequest-"+this.id] = (<friendRequest id={this.id} email={this.email}/>)
// 		});
// 		this.setState({collection: collection})
// 	},
// 	render: function(){
// 		return(
// 			<div className = "list-group"><h4>People who Want to Eat food with You!</h4> {this.state.collection}</div>
// 		)
// 	}
// })

// var selectedFriendRequest = {};

// var FriendRequest = React.createClass({
// 	render: function(){
// 		return(
// 			<a className = "list-group-item" onClick= {this.onClick} id={this.id}>{this.props.email}</a>
// 		)
// 	}
// });