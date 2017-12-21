var React = require('react');
var Material = require('react-materialize');

var NavBar = React.createClass({
  render: function(){
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo  center">Crypto Clicko</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><Material.Button onClick={this.props.save}>Save</Material.Button></li>
              <li><Material.Button onClick={this.props.load}>Load</Material.Button></li>
            </ul>
        </div>
      </nav>
    )
  }
});

var Container = React.createClass({
  render:function(){
    return (
      <div>
        <NavBar save={this.props.save} load={this.props.load}/>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Container;
