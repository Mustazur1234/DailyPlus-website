$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

$("#cart-holder").hide();
$("#cartCloseBtn").click(function(){
  $("#cart-holder").hide(600);
});

$("#cartShowBtn").click(function(){
  $("#cart-holder").toggle(600);
});

$(document).ready(function(){
 
    $('#contentclose').click(function(){
        
        $('#hidecontent').hide(1000);
   });
    
    $('#contentcshow').click(function(){
        
        $('#hidecontent').show();
    });
    
   $("#ami").hide();
     $('#mapsec').click(function(){
        $("#ami").toggle(1000);
         
    });
    
    $('#home').hide();
    $('#home_click').click(function(){
        $('#home').toggle(1000);
    })

    
     $('#location').hide();
      $('#close_location').click(function(){
        $('#location').toggle(1000);
    })
    
});