var React = require('react');
var Material = require('react-materialize');

var KiloByte = React.createClass({
  getInitialState: function(){
    return {
      visible: "disabled",
      isTrue: false
    }
  },
  componentDidUpdate: function(){
    var isTrue = this.state.isTrue
    if(this.props.amount >= this.props.size && !isTrue){
      this.setState({visible: "", isTrue: true});
    }
  },
  render: function(){
    return (
      <Material.CollectionItem className="blue-text text-darken-2">
        kiloByte clicker will help you on your way, at a cost though. (1,000)
        <Material.Button className={this.state.visible} waves='light' onClick={this.props.buy}>Buy</Material.Button>
        <Material.Badge>{this.props.kiloAmount} kiloClickers</Material.Badge>
      </Material.CollectionItem>
    )
  }
});

module.exports = KiloByte;
