var React = require('react');

var Form = React.createClass({
  handleNewItem: function(){
    var title = document.querySelector("#title").value;
    var description = document.querySelector("#description").value;
    var link = document.querySelector("#link").value;
    if(localStorage.getItem('favorites')){
      var ls = localStorage.getItem('favorites')
      var parsedLs = JSON.parse(ls);
      parsedLs.push({title: title,description: description,link: link});
      localStorage.setItem("favorites",JSON.stringify(parsedLs));
    }else{
      var finalLS = [{title: title,description: description,link: link}];
      localStorage.setItem("favorites",JSON.stringify(finalLS));
    }
  },
  render: function() {
    return (
      <div className="form">
        <input type="text" placeholder="Title" id="title"/>
        <input type="text" placeholder="Description" id="description"/>
        <input type="text" placeholder="http://" id="link"/>
        <button className="secondary-bordered" onClick={this.handleNewItem}>Add</button>
      </div>
    );
  }

});

module.exports = Form;