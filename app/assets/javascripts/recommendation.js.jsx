/*** @jsx React.DOM */
var RecommendationCollection = React.createClass({
	loadRecommendations: function(){
		$.ajax({
      url: "/recommendations",
      dataType: 'json',
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
	},
	getInitialState: function(){
		return {data: []}
	},
	componentDidMount: function(){
		this.loadRecommendations();
		setInterval(this.loadRecommendations, this.props.pollInterval);
	},
	render: function(){
		 console.log("rendering");
		return(<div className="recommendationBox list-group">
	
			        <Recommendation data={this.state.data} />
			      </div>)
	}
});


var Recommendation = React.createClass({
	render: function(){
		console.log(this.props.data)
		 var recommendationNodes = this.props.data.map(function (recommendation) {
      return (
        <div key={recommendation.id} className= "recommendation list-group-item">
          {recommendation.restaurant.name} approved by {recommendation.recBy.name}
        </div>
      );
    });
		return (
			<div>
				{recommendationNodes}
			</div>)
	}
});

$(document).ready(function(){
	React.renderComponent(
	  <RecommendationCollection pollInterval={2000}  />,
	  document.getElementById('recommendationList')
	)
});

