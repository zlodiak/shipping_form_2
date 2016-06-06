<script type="text/template" id="calcTpl">
  <form class="container" id="shippForm"  enctype="multipart/form-data">
    <div class="row">
      <div class="col-xs-12"><h1>Прикрепите файл</h1></div>
    </div>


    <div class="places_area" id="placesArea"></div>   

    <div class="row" id="cargoValuesBox">
      <div class="col-xs-12">
        <div class="btn btn-default pull-right" id="addPlaceBtn">Ещё файл</div>
      </div>
    </div>             

    <div class="row" id="submitBox">
      <div class="col-xs-12">
        <div class="btn btn-primary" id="submitBtn">Отправить</div>
      </div>
    </div>        
  </form>
</script>


<script type="text/template" id="placeTpl">
  <div class="row">
    <div class="col-xs-4 form-group">
      <input type="file" class="form-control" name="file" id="file_<%= idPlace %>">
      <div class="help-block"></div>
    </div>
    <div class="col-xs-8 del_place_box hide">
      <div class="btn btn-danger btn-xs pull-right delete_place_btn">Удалить файл</div>
    </div>
  </div>   
</script>


<script type="text/template" id="paymentModalTpl">
  <!-- Modal payment -->
  <div class="modal fade payment_modal" id="paymentModal" tabindex="-1" role="dialog" aria-labelledby="paymentLabel">
    <div class="modal-dialog" role="document">     
      <div class="modal-content">
        <form class="" id="paymentForm" method="get" action="#" onSubmit="return false;">
          <fieldset>         
            <div class="modal-header">
              <btn type="btn" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></btn>
              <h4 class="modal-title" id="paymentLabel">Стоимость пересылки</h4>
            </div>

            <div class="modal-body" id="paymentPriceCont">
              <span class="price"></span>
              <span class="currency">руб</span>
            </div>

            <div class="modal-footer">
              <btn type="btn" class="btn btn-default" data-dismiss="modal">Понятно</btn>
            </div>
          </fieldset>
        </form>          
      </div>
    </div>
  </div>  
</script>