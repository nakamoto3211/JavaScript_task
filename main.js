/*global $*/
$(document).ready(function(){
  
  var sec_OneTenth = 0;
  var sec = 0;
  var min = 0;
  var hour = 0;
  
  var time_count;
  
  function Count() {
    sec_OneTenth += 1;
    
    if (sec_OneTenth > 9) {
      sec_OneTenth = 0;
      sec += 1;
    }
    
    if (sec > 59) {
      sec = 0;
      min += 1;
    }
    
    if (min > 59) {
      min = 0;
      hour += 1;
    }
    
    $('#timer').html(hour + ':' +  min + ':' + sec + ':' + sec_OneTenth);
  }
  
  $("#start").click(function() {
    // sec_OneTenth = 0;
    // sec = 0;
    // sec_TensPlace = 0;
    // min = 0;
    
    // $("#timer").html();
    time_count = setInterval(Count,100);
    
    $(this).attr("disabled", true);
    $("#stop, #reset").removeAttr("disabled");
  });
  
  $("#stop").click(function() {
    clearInterval(time_count);
    
    $(this).attr("disabled", true);
    $("#start").attr("disabled",false);
  });
  
  $("#reset").click(function() {
    clearInterval(time_count);
    sec_OneTenth = 0;
    sec = 0;
    min = 0;
    hour = 0;
    $("#timer").html("0:0:0:0");
    
    $("#reset,#stop").attr("disabled", true);
    $("#start").attr("disabled",false);
  });
});