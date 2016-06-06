APP.PlaceModel = Backbone.Model.extend({

  defaults: {
    idPlace: undefined,
    sizeBytes: undefined,      
    name: undefined,      
    type: undefined 
  }, 

  validation: {

    sizeBytes:  [ 
                  { required: true, msg: 'Поле не может быть пустым' },
                  { range: [1, 8000], msg: 'Файл слишком большой' }
                ],     

    name:   [ 
              { required: true, msg: 'Поле не может быть пустым' },
              { maxLength: 18, msg: 'Название слишком длинное' }
            ],    

    type:   [ 
              { oneOf: ['image/png', 'image/jpg', 'image/jpeg'], msg: 'Недопустимый формат файла' }
            ]                                  
                                                 
  }       

});

