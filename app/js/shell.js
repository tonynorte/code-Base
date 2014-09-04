function bancomerApp(){};//constructor

bancomerApp.prototype={
  // body...

  UI_actions : function(){
   
  },

  init : function(){
    this.UI_actions();
  }

};


$(function(){
  var myApi =  new bancomerApp();
  myApi.init();
});
