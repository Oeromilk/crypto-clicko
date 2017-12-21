var React = require('react');
var Material = require('react-materialize');

var KiloByte = React.createClass({
  getInitialState: function(){
    return {
      visible: "hide",
      isTrue: false
    }
  },
  componentDidUpdate: function(){
    var isTrue = this.state.isTrue
    if(this.props.amount >= this.props.size && !isTrue){
      this.setState({visible: " ", isTrue: true});
    }
  },
  render: function(){
    return (
      <Material.Row className={this.state.visible}>
        <Material.Col s={8} className="card-panel">
          <p className="blue-text text-darken-2"><span className="badge">{this.props.iAmount} kiloClicker</span>Buy an auto clicker to earn automatically, it does cost though.</p>
        </Material.Col>
        <Material.Col s={4}>
          <Material.Button waves='light' onClick={this.props.buy}>Buy</Material.Button>
        </Material.Col>
      </Material.Row>
    )
  }
});

module.exports = KiloByte;
