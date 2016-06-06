APP.CalcView = Backbone.View.extend({  

  initialize: function() {    
    APP.placesCollection = new APP.PlacesCollection();      

    new APP.PaymentModalView();

    this.render();
  },    

  template: _.template($('#calcTpl').html()),

  render: function () {  
    this.$el.html(this.template());    

    return this;
  },

  _addPlaceEl: function() { 
    this.$el.find('#placesArea').append(this.place.render().el);
  },

  events:{
    'click #submitBtn' : 'submit',
    'click #addPlaceBtn' : 'addPlace'
  },

  submit: function() { 
    if(this._checkSubmit() == true) {
      var filesCnt = APP.placesCollection.length;

      this.modalView = new APP.PaymentModalView(filesCnt);
      
      $('#paymentModal').modal('show'); 
    };   
  },

  _checkSubmit: function() { 
    var validResult = true;

    APP.placesCollection.each(function(model) {
      if(model.getValidCondition() == false) { validResult = false };
    }, this)     

    if(APP.placesCollection.length == 0) { validResult = false  }; 

    return validResult;
  },

  addPlace: function() { 
    this.place = new APP.PlaceView(true);   
    this._addPlaceEl();
  }

});


