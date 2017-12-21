var React = require('react');
var Material = require('react-materialize');
var $ = require('jquery');

var Container = require('./bar.jsx');
var KiloByte = require('./kiloByte.jsx');
var MegaByte = require('./megaByte.jsx');
var byteSize = require('./utilites/bit.js');

var HomeContainer = React.createClass({
  getInitialState: function(){
    return {
      amount: 0,
      byteSize: byteSize,
      kiloClickers: 0,
      kiloInterval: 'kiloInterval',
      megaClickers: 0,
      megaInterval: 'megaInterval',
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
  kiloInterval: function(){
    var amount = this.state.amount;
    var kiloClickers = this.state.kiloClickers;
    amount += kiloClickers;
    this.setState({amount: amount});
  },
  buyKilo: function(){
    var iAmount = this.state.kiloClickers;
    var kiloInterval = this.state.kiloInterval;
    clearInterval(kiloInterval);
    if(this.state.amount >= this.state.byteSize.kiloByte){
      var amount = this.state.amount;
      iAmount++;
      var newAmount = amount - this.state.byteSize.kiloByte;
      var kiloInterval = setInterval(this.kiloInterval, 1000);
      this.setState({amount: newAmount, kiloClickers: iAmount, kiloInterval: kiloInterval});
    } else {
      alert("Oops you dont have enough you need at least 1000!");
    }
  },
  megaInterval: function(){
    var amount = this.state.amount;
    var megaClickers = this.state.megaClickers;
    megaClickers * 100;
    amount += megaClickers;
    this.setState({amount: amount});
  },
  megaKilo: function(){
    var iAmount = this.state.megaClickers;
    var megaInterval = this.state.megaInterval;
    clearInterval(megaInterval);
    if(this.state.amount >= this.state.byteSize.megaByte){
      var amount = this.state.amount;
      iAmount++;
      var newAmount = amount - this.state.byteSize.megaByte;
      var megaInterval = setInterval(this.megaInterval, 1000);
      this.setState({amount: newAmount, megaClickers: iAmount, megaInterval: megaInterval});
    } else {
      alert("Oops you dont have enough you need at least 1000000!");
    }
  },
  render: function(){
    return (
      <Container save={this.save} load={this.load}>
        <h3 className="center-align">{this.state.amount} bytes</h3>
        <Material.Row className="center-align">
          <Material.Button waves='light' className="xLarge" style={this.state.buttonStyle} onClick={this.collect}>
            <Material.Icon className="large-money">attach_money</Material.Icon>
          </Material.Button>
        </Material.Row>
        <Material.Row className="center-align">
          <Material.ProgressBar progress={(this.state.amount / this.state.byteSize.zettaByte) * 100}/>
        </Material.Row>
        <Material.Collection>
          <KiloByte amount={this.state.amount} kiloAmount={this.state.kiloClickers} size={this.state.byteSize.kiloByte} buy={this.buyKilo}/>
          <MegaByte amount={this.state.amount} megaAmount={this.state.megaClickers} size={this.state.byteSize.megaByte} buy={this.buyMega}/>
        </Material.Collection>
      </Container>
    )
  }
});

module.exports = HomeContainer;
