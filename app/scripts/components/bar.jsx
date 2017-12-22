var React = require('react');
var Material = require('react-materialize');

var Footer = React.createClass({
  render: function(){
    return (
      <div className="sticky grey darken-1 white-text">
        <h5>Save!</h5>
        <p>If you don't save you start back at 0.</p>
          <ul>
            <li><Material.Button onClick={this.props.save} className="grey-text text-lighten-3">Save</Material.Button></li>
            <li><Material.Button onClick={this.props.load} className="grey-text text-lighten-3">Load</Material.Button></li>
          </ul>
      </div>
    )
  }
});

var NavBar = React.createClass({
  render: function(){
    return (
      <nav>
        <div className="nav-wrapper grey darken-1 white-text">
          <a href="#" className="brand-logo center">Crypto Clicko</a>
        </div>
      </nav>
    )
  }
});

var Container = React.createClass({
  render:function(){
    return (
      <div>
        <NavBar />
        <div className="wrapper">
          {this.props.children}
        </div>
        <Footer save={this.props.save} load={this.props.load}/>
      </div>
    )
  }
});

module.exports = Container;
