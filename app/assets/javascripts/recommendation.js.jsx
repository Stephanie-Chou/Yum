/*** @jsx React.DOM */
var RecommendationCollection = React.createClass({
	getInitialState: function(){
		var collection = {};
		$.each(this.props.recommendations, function(){
			collection['recommendation-'+ this.id] = (<Recommendation restaurant = {this.restaurant.name} recBy={this.recBy.name}/>)
		});
		return {collection: collection};
	},
	render: function(){
		return(
			<div>
				<h2> Yum!</h2>
				{this.state.collection}
			</div>
		)
	}
});
var Recommendation = React.createClass({
	render: function(){
		return(
			<li className = "recommendation">
				<span>{this.props.restaurant}</span> from <span>{this.props.recBy}</span>
			</li>
		)
	}
});