$(document).ready(function(){
  $('#start-timer').click(function(){
    //Prevent clicking up and down
    $("up-down").each(function(){
      (this).disable();
    });

    //Start coding timer
    

    //When coding timer finishes
  })
  function startTime(timer){
    #change

  };
  $('#coding-time-up').click(function(){
    var codingTime = $('#coding-time').text();
    var codingTimeNumb = codingTime.split(":");
    codingTimeNumb[0] = Number(codingTimeNumb[0]) + 1;
    if(codingTimeNumb[0] > 0){

      var newTime = codingTimeNumb[0] + ":" + codingTimeNumb[1]
      $('#coding-time').text(newTime);
      $('#clock').text(newTime);
    };
  })
  $('#coding-time-down').click(function(){
    var codingTime = $('#coding-time').text();
    var codingTimeNumb = codingTime.split(":");
    codingTimeNumb[0] = Number(codingTimeNumb[0]) - 1;
    if(codingTimeNumb[0] > 0){
      var newTime = codingTimeNumb[0] + ":" + codingTimeNumb[1]
      $('#coding-time').text(newTime);
      $('#clock').text(newTime);
    }
  })
  $('#break-time-up').click(function(){
    var breakTime = $('#break-time').text();
    var breakTimeNumb = breakTime.split(":");
    breakTimeNumb[0] = Number(breakTimeNumb[0]) + 1;
    if(breakTimeNumb[0] > 0){
      var newTime = breakTimeNumb[0] + ":" + breakTimeNumb[1]
      $('#break-time').text(newTime);
    }
  })
  $('#break-time-down').click(function(){
    var breakTime = $('#break-time').text();
    var breakTimeNumb = breakTime.split(":");
    breakTimeNumb[0] = Number(breakTimeNumb[0]) - 1;
    if(breakTimeNumb[0] > 0){
      var newTime = breakTimeNumb[0] + ":" + breakTimeNumb[1]
      $('#break-time').text(newTime);
    }
  })
})
