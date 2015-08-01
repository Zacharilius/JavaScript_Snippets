$(document).ready(function(){
var timer;

function myTimer() {
    console.log("oh yeah");
    //Get html value of clock;
    var time = $("#clock").text();
    var timeArr = time.split(":");
    var minute = Number(timeArr[0]);
    var second = Number(timeArr[1]);

    console.log("minute: " + minute);
    console.log("second: " + second);
    //Decrement 1 second

    if(second > 0){
      second--;
    }
    //Update time
    else if(second <= 0 && minute > 0){
      second = 59;
      minute--;
    }
    else{
      console.log("Executing else");
      var codingTime = $('#coding-time').text();
      $("#clock").text(codingTime);
      window.clearTimeout(timer);
    }
    if(second < 10){
      second = "0" + second;
    }
    if(minute < 10){
      minute = "0" + minute;
    }
    $("#clock").text(minute + ":" + second);
    //console.log(d.toLocaleTimeString());
}

  // Disable function
  jQuery.fn.extend({
      disable: function(state) {
          return this.each(function() {
              this.disabled = state;
          });
      }
  });
  // Disabled with:
  //$('input[type="submit"], input[type="button"], button').disable(true);

  // Enabled with:
  //$('input[type="submit"], input[type="button"], button').disable(false);

  $('#start-timer').click(function(){
    //Prevent clicking up and down
    $("button.up-down").disable(true);

    //Start coding timer
    timer = setInterval(function(){myTimer()},1000);


    //When coding timer finishes



  })

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
