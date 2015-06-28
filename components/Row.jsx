var React = require('react');
var _ = require('underscore');

var Row = React.createClass({

  render: function() {
    var data = this.props.data;
    if(_.isEmpty(data)){
      return <div> Loading</div>;
    }
    return (
      <div>
        {
          data.groups.map(function(data,key){
            return (
              <div className="row" key={key}>
                <div className="lr-12 md-12 sm-12 title">
                  <p>{data.name}</p>
                  {
                    data.items.map(function(item,index){
                      return (
                        <div className="lr-3 md-4 sm-12 same-row data" key={index}>
                          <div className="container">
                            <div className="contains">
                            <img className="thumbnail" src={item.image} alt=""/>
                            <div className="details">
                              <div className="name">
                                <a className="link fancy" target="_blank" href={item.link}>{item.name}</a>
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
              );
          })
        }
      </div>
    );
  }

});

module.exports = Row;