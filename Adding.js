//jQuery

$(document).ready(function (){
   
  $name1 = $('input[name="item-name1"');
  $amount1 = $('input[name="amount1"'); 
  $type1 = $('select[name="type1"');
  $date1 = $('input[name="date1"');
  
  var formatDate = function(d) {
    
    var d = d.split('-');
    
    var dt = new Date(d[0],d[1],d[2]); 
    
    var formattedDate = '';
    
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    formattedDate += months[ dt.getMonth()-1 ];

    var formattedDay;
    
    switch( d[2].substring(1) ) {
      case '1':
        formattedDay = parseInt(d[2]) + "st";
        break;        
      case '2':
        formattedDay = parseInt(d[2]) + "nd";
        break;        
      case '3':
        formattedDay = parseInt(d[2]) + "rd";
        break;  
      default:
        formattedDay = parseInt(d[2]) + "th";
    }
    
    formattedDate += ' ' + formattedDay;
    
    return formattedDate;
  }
  
  
  $('#button1').click(function (e) {
    
    var type_icon; 
    if ($type1.val() == 'salary') {
      type_icon = "<i class='fa fa-money'></i>";
    } else if ($type1.val() == 'allowance') {
      type_icon = "<i class='fa fa-money'></i>";
    } else if ($type1.val() == 'savings') {
      type_icon = "<i class='fa fa-money'></i>";
    } else if ($type1.val() == 'other1') {
      type_icon = "<i class='fa fa-question-circle'></i>";
    }
    
    var form_validated = true;
    
    if(form_validated) {
      $("table tr:first").after('<tr><td>'+type_icon+'</td><td>'+$name1.val()+'</td><td>'+formatDate($date1.val())+'</td><td class="amount">+P'+$amount1.val()+'</td></tr>');
      $date1.val(null);
      $amount1.val(null);
      $name1.val(null);
      $("#if-empty").remove();


    };
  });
});

//----------------------------------------------EXPENSES---------------------------------------

$(document).ready(function (){

  $name = $('input[name="item-name"');
  $amount = $('input[name="amount"'); 
  $type = $('select[name="type"');
  $date = $('input[name="date"');
  
  var formatDate = function(d) {
    
    var d = d.split('-');
    
    var dt = new Date(d[0],d[1],d[2]);
    
    var formattedDate = '';
    
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];//Now we can get the month like this:
    
    formattedDate += months[ dt.getMonth()-1 ];

    var formattedDay;
    
    switch( d[2].substring(1) ) {
      case '1':
        formattedDay = parseInt(d[2]) + "st";
        break;        
      case '2':
        formattedDay = parseInt(d[2]) + "nd";
        break;        
      case '3':
        formattedDay = parseInt(d[2]) + "rd";
        break;  
      default:
        formattedDay = parseInt(d[2]) + "th";
    }
    
    formattedDate += ' ' + formattedDay;
    
    return formattedDate;
  }
  
  
  $('#button').click(function () {

    var type_icon;
    if ($type.val() == 'travel') {
      type_icon = "<i class='fa fa-car'></i>";
    } else if ($type.val() == 'food') {
      type_icon = "<i class='fa fa-cutlery'></i>";
    } else if ($type.val() == 'shopping') {
      type_icon = "<i class='fa fa-shopping-bag'></i>";
    } else if ($type.val() == 'entertainment') {
      type_icon = "<i class='fa fa-youtube-play'></i>";
    } else if ($type.val() == 'medical') {
      type_icon = "<i class='fa fa-medkit'></i>";
    } else if ($type.val() == 'electronics') {
      type_icon = "<i class='fa fa-plug'></i>";
    } else if ($type.val() == 'personal') {
      type_icon = "<i class='fa fa-user'></i>";
    } else if ($type.val() == 'other') {
      type_icon = "<i class='fa fa-question-circle'></i>";
    }
    


    var form_validated = true;
    
    if(form_validated) {
      $("table tr:first").after('<tr><td>'+type_icon+'</td><td>'+$name.val()+'</td><td>'+formatDate($date.val())+'</td><td class="amount">-P'+$amount.val()+'</td></tr>');
      $date.val(null);
      $amount.val(null);
      $name.val(null);
      $("#if-empty").remove();

      



    };
  });
});
//------------------------------------------------
