$(document).ready(function(){
var timer;
var is_play = true;

// Disable function
jQuery.fn.extend({
    disable: function(state) {
        return this.each(function() {
            this.disabled = state;
        });
    }
});
function myTimer(htmlElement) {
    console.log("Starting");
    //Get html value of clock;
    var cont = true;
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
      //Executed when coding time is completed
      console.log("Executing else");
      cont = false;
      if(htmlElement === "#coding-time"){
        var codingTime = $("#break-time").text();
        console.log("Wooooo\n\n\n" + codingTime);
        $("#clock").text(codingTime);
        window.clearTimeout(timer);
        timer = setInterval(function(){myTimer("#break-time")},1000)
      }
      else{
        //Executed the second time the clock runs. IE when break-time is passed inside. The timer then is killed.
        console.log("Killing timer");
        $("button.up-down").disable(false);
        $("#play-stop-button").attr('class', 'glyphicon glyphicon-play');
        window.clearTimeout(timer);
      }



    }
    if(cont){
      if(second < 10){
        second = "0" + second;
      }
      if(minute < 10){
        minute = "0" + minute;
      }
      $("#clock").text(minute + ":" + second);
    }

    //console.log(d.toLocaleTimeString());
}


  // Disabled with:
  //$('input[type="submit"], input[type="button"], button').disable(true);

  // Enabled with:
  //$('input[type="submit"], input[type="button"], button').disable(false);

  $('#start-timer').click(function(){
    if(is_play){
      is_play = false;
      //Prevent clicking up-down class of buttons
      $("button.up-down").disable(true);

      //Switch play button to stop botton.
      $("#play-stop-button").attr('class', 'glyphicon glyphicon-stop');

      //Start coding timer
      timer = setInterval(function(){myTimer("#coding-time")},1000);
    }
    else{
      is_play = true;
      //Allows clicking up-down class of buttons
      $("button.up-down").disable(false);

      //Switch play button to play botton.
      $("#play-stop-button").attr('class', 'glyphicon glyphicon-play');

      //Stops the timer;
      window.clearTimeout(timer);

      //Reset clock to the coding-time set by the user
      var codingTime = $("#coding-time").text();
      $("#clock").text(codingTime);

    }
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
