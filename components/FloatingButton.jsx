var React = require('react');
var cn = require('classnames');
var Form = require('./Form.jsx');

var FloatingButton = React.createClass({
  mixins: [
    require('react-clickaway')
],
  getInitialState: function() {
    return {
      opened: false
    };
  },
  handleClick: function(event){
    this.props.onClick();
    this.setState({
      opened: true 
    });
  },
  componentClickAway: function() {
    this.props.onClickAway();
    this.setState({
      opened: false 
    });
},
  render: function() {
    return (
      <div className={cn("floating-button",{opened: this.state.opened})} onClick={this.handleClick}>
        <span></span>
        <span></span>
        {
          this.state.opened && <Form />
        }
      </div>
    );
  }

});

module.exports = FloatingButton;