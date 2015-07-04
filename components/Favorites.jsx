var React = require('react');
var _ = require('underscore');
var FlatColor = require("flat-colors");

var Row = React.createClass({
  generateColor: function () {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    color = FlatColor(color);
    return ({backgroundColor: "rgb("+color.join()+")"})
  },
  render: function() {
    var _this = this; 
    var data = (this.props.favorites).reverse();
    console.log(data);
    if(data.length < 1){
      return (
                <div className="row">
                  <div className="lr-12 md-12 sm-12 title">
                    <p>Favorites</p>
                  </div>
                </div>
        );
    }
    return (
      <div>
        <div className="row">
          <div className="lr-12 md-12 sm-12 title">
            <p>Favorites</p>
              {
                data.map(function(item,index){
                  return (
                    <div className="lr-3 md-4 sm-12 same-row data" key={index}>
                      <div className="container">
                        <div className="contains">
                          <div className="name-tag" style={_this.generateColor()}>{((item.title)[0])}</div>
                            <div className="details">
                            <div className="name">
                              <a className="link fancy" target="_blank" href={item.link}>{item.title}</a>
                            </div>
                            <div className="description">{item.description}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    )
                })
              }
          </div>
        </div>
      </div>
    );
  }

});

module.exports = Row;