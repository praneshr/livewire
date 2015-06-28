var React = require('react');
var cn = require('classnames');

var Header = React.createClass({

  render: function() {
    return (
      <div className={cn("lr-12 md-12 sm-12 header",{onload: ! this.props.loaded})}>
        <div className="img-container">
          <img id="sub-logo"src="../img/livewire.png" />
        </div>
        <div className="loader-container">
          <div className="loader"> </div>
        </div>
      </div>
    );
  }

});

module.exports = Header;