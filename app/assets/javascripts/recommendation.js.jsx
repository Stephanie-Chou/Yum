/*** @jsx React.DOM */
var RecommendationCollection = React.createClass({
	render: function(){
		var collection = [];
		$.each(this.props.recommendations, function(){
			collection.push(RenderRecommendation(this.restaurant.name, this.recBy.name));
		});
		return(
			<div>{collection}</div>
		)
	}
});
var Recommendation = React.createClass({
	render: function(){
		return(
			<li className = "recommendation">
				<span>{this.props.restaurant}</span> from <span>{this.props.user}</span>
			</li>
		)
	}
});

function RenderRecommendation(restaurant, recBy){
	React.renderComponent(
	<Recommendation restaurant={restaurant} user ={recBy} />,
	document.getElementById('main_container')
	);
}

function RenderRecommendationCollection(recommendations){
	React.renderComponent(
	<RecommendationCollection recommendations={recommendations} />,
	document.getElementById('main_container')
	);
}
