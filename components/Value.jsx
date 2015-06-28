var React = require('react');

var Value = React.createClass({

  render: function() {
    return (
      this.props.items.map(function(item,index){
        console.log("Inside value",item);
        return <div>{item}</div>
      })
    );
  }

});

module.exports = Value;