require("./frame.js");
var React = require('react');
var $ = require("jquery");
var Header = require("../components/Header.jsx");
var Favorites = require("../components/Favorites.jsx");
var Row = require("../components/Row.jsx");
var FloatingButton = require("../components/FloatingButton.jsx");
var ScriptLocation = "https://script.googleusercontent.com/a/macros/indix.com/echo?user_content_key=ix14U_98nwpTjrzxBS0J4uHlsipCAlivoRgsNJ2T9OsMKpx3r5L6gRNu_fDaX8dlZcH-48f1-V57pV4NkNtrp-F7Dph9m2q1OJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKAbpcsvj79PY45xQJLnggV4uoPl21K6h8UfESZvgA3ZJDyjrsucrUfnCL8ADGT3SjlwfULdosMzN11Pq-cRGx_DHI9QQN6bQRBuqn16KOTrtjLF8LUx6d-DhYw7Yd8G4FuGy7awUCLfXIU_TrAimchKJobUidNbrslf5_csTV8Jmw&lib=MLU8DkTSmRu6kkyoC9rTirXqXYF49Zf1f";

var Main = React.createClass({
  getInitialState: function() {
    return {
      response : false,
      data: {},
      favorites: [],
      rerender: false
    };
  },
  componentDidMount: function() {
    var _this = this;
    var storage = localStorage;
    if(storage.getItem("livewire") !== null){
      var data = JSON.parse(storage.getItem("livewire"));
      _this.setState({
        response : true,
        data: data,
        favorites: JSON.parse(localStorage.getItem("favorites")) || []
      });
    }else{
      $.get(ScriptLocation)
      .done(function(data){
        storage.setItem("livewire",JSON.stringify(data));
        _this.setState({
          response : true,
          data: data,
          favorites: JSON.parse(localStorage.getItem("favorites")) || []
        });
      })
      .error(function() {
        console.log("error");
      });
    }
  },
  handleAdd: function(){
    console.log("Clicked Add");
  },
  reRender: function(){
    console.log("rerendered");
    this.setState({
      rerender: true,
      favorites: JSON.parse(localStorage.getItem("favorites")) || [] 
    });
  },
  render: function() {
    return (
      <div>
        <Header loaded={this.state.response}/>
        <div className="data">
          <Favorites className={{rendered: this.state.rerender}}favorites={this.state.favorites} />
          <Row data={this.state.data} />
        </div>
        <FloatingButton onClick={this.handleAdd} onClickAway={this.reRender}/>
      </div>
      );
  }
});

React.render(<Main />, document.getElementById('container'));
