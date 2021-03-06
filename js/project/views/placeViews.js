APP.PlaceView = Backbone.View.extend({   

  initialize: function(addPlaceBtn) {  
    this.idPlace = APP.placesCollection.getNewIdPlace();

    this.model = new APP.PlaceModel({idPlace: this.idPlace}); 
    APP.placesCollection.add(this.model);

    this.addPlaceBtn = addPlaceBtn ? false : true;

    Backbone.Validation.bind(this);
  },

  className: 'place_unit',

  template: _.template($('#placeTpl').html()),

  render: function () {  
    this.$el.html(this.template({idPlace: this.idPlace}));
    this.$el.attr('id', 'placeUnit_' + this.idPlace);

    if(this.addPlaceBtn == false) {
      this.$el.find('.del_place_box').removeClass('hide');
    };
    
    return this;
  }, 

  events:{
    'click .delete_place_btn' : 'delPlace',
    'change input[type="file"]' : 'changeFileField'
  },

  changeFileField: function() { 
    var idPlace = this.model.get('idPlace'),
        fileInfo = document.getElementById('file_' + idPlace).files[0],
        validationSuccess = true,
        fileMark = '';

    this.model.set({
        name: fileInfo.name,
        type: fileInfo.type,
        sizeBytes: fileInfo.size
    });    

    if(this.model.getValidCondition() == false) {
      fileMark = '';
    } else {      
      fileMark = fileInfo.name;
    };

    this.$el.find('.file-mark-block').html(fileMark);

  },

  delPlace: function() { 
    this.$el.find('.del_place_box').closest('.place_unit').remove();
    this.model.destroy();
  },   

});




