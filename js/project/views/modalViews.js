APP.PaymentModalView = Backbone.View.extend({     

  initialize: function(filesCnt) {  
    var elem = this.render(filesCnt).el;
    $('#modalsBox').html(elem);    
  },     

  className: 'payment_modal_box',

  template: _.template($('#paymentModalTpl').html()),

  render: function (filesCnt) { 
    this.$el.html(this.template({filesCnt: filesCnt}));
    return this;
  }

});


