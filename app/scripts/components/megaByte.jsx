var React = require('react');
var Material = require('react-materialize');

var MegaByte = React.createClass({
  getInitialState: function(){
    return {
      visible: "disabled"
    }
  },
  componentDidUpdate: function(){
    var isTrue = this.state.isTrue
    if(this.props.amount >= this.props.size){
      this.setState({visible: " "});
    }
  },
  render: function(){
    return (
      <Material.CollectionItem className="blue-text text-darken-2">
        megaByte clicker is nice but does cost a significant amount! (1,000,000)
        <Material.Button className={this.state.visible} waves='light' onClick={this.props.buy}>
          Buy
        </Material.Button>
        <Material.Badge>{this.props.megaAmount} megaClickers</Material.Badge>
      </Material.CollectionItem>
    )
  }
});

module.exports = MegaByte;
