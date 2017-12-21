var React = require('react');
var Material = require('react-materialize');
var $ = require('jquery');

var Container = require('./bar.jsx');
var KiloByte = require('./kiloByte.jsx');
var byteSize = require('./utilites/bit.js');

var HomeContainer = React.createClass({
  getInitialState: function(){
    return {
      amount: 0,
      byteSize: byteSize,
      intervalAmount: 0,
      intervalId: 'interval',
      isTrue: false
    }
  },
  save: function(){
    var amount = this.state.amount;
    localStorage.setItem('amount', amount);
  },
  load: function(){
    var amount = localStorage.getItem('amount');
    this.setState({amount: amount});
  },
  collect: function(){
    var coins = this.state.amount;
    coins++;
    this.setState({amount: coins});
  },
  interval: function(){
    var amount = this.state.amount;
    var intervalAmount = this.state.intervalAmount;
    amount += intervalAmount;
    this.setState({amount: amount});
  },
  buy: function(){
    var iAmount = this.state.intervalAmount;
    var intervalId = this.state.intervalId;
    clearInterval(intervalId);
    if(this.state.amount >= this.state.byteSize.kiloByte){
      var self = this
      var amount = this.state.amount;
      iAmount++;
      var newAmount = amount - this.state.byteSize.kiloByte;
      var intervalId = setInterval(this.interval, 1000);
      this.setState({amount: newAmount, intervalAmount: iAmount, intervalId: intervalId});
    } else {
      alert("Oops you dont have enough you need at least 1000!");
    }
  },
  render: function(){
    return (
      <Container save={this.save} load={this.load}>
        <h1 className="center-align">{this.state.amount} bytes</h1>
        <div className="row">
          <Material.Col s={6} className="center-align">
            <Material.Button waves='light' className='btn-large' onClick={this.collect}>
              <Material.Icon>attach_money</Material.Icon>
            </Material.Button>
          </Material.Col>
          </div>
          <Material.Row>
            <Material.Col s={6} className="center-align">
              <Material.ProgressBar progress={(this.state.amount / this.state.byteSize.kiloByte) * 100}/>
            </Material.Col>
          </Material.Row>
        <KiloByte amount={this.state.amount} iAmount={this.state.intervalAmount} size={this.state.byteSize.kiloByte} buy={this.buy}/>
      </Container>
    )
  }
});

module.exports = HomeContainer;
