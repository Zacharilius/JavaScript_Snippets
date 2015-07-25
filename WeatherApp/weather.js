$(document).ready(function() {
  var state;
  var city;
  var not_metric = true;


  $("button").on("click", function(){
    not_metric = !not_metric;
    if (not_metric){
      $("button").replaceWith('<button class="btn btn-primary">Convert Celcius</button>');

    }
    else{
      $("button").replaceWith('<button class="btn btn-primary">Convert Fahrenheit</button>');
    }
    getWeather();

});

  getLocation();

  function getLocation(){
    $.ajax({
      url: //"http://api.wunderground.com/api/019dc9415129ba93/geolookup/q/37.776289,-122.395234.json",
        "http://api.wunderground.com/api/019dc9415129ba93/geolookup/q/autoip.json",
      dataType: "jsonp",
      success: function(parsed_json) {

        state = parsed_json.location.state;
        console.log("state: " + state);
        city = parsed_json.location.city;
        console.log("city: " + city);

        $("#location").text(city + ", " + state);
        getWeather();

      }
    });
};
  function getWeather(){
    $.ajax({
      url: //"http://api.wunderground.com/api/019dc9415129ba93/geolookup/conditions/q/wa/seattle.json",
        "http://api.wunderground.com/api/019dc9415129ba93/geolookup/conditions/q/" + state + "/" + city + ".json",
      dataType: "jsonp",
      success: function(parsed_json) {
        var location = parsed_json['location']['city'];
        var wind_dir = parsed_json['current_observation']['wind_dir'];
        var weather_desc = parsed_json['current_observation']['weather']
        var icon_url = parsed_json['current_observation']['icon_url']
        var temp_signature;
        var wind_speed;

        if(not_metric){// Not metric
          var temp = parsed_json['current_observation']['temp_f'];
          temp_signature = "f";
          wind_signature = "mph";
          var wind_speed = parsed_json['current_observation']['wind_mph']
        }
        else{ // metric
          var temp = parsed_json['current_observation']['temp_c'];
          temp_signature = "c";
          wind_signature = "kph";
          var wind_speed = parsed_json['current_observation']['wind_kph']
        }
        $("#temp").text(temp + "\u00B0" + temp_signature);
        $("#wind").text(wind_dir + " " + wind_speed + " " + wind_signature);
        $("#weather").text(weather_desc);
        $("#weather_image").replaceWith('<img id = "weather_image" src="' + icon_url + '" alt="Weather Image" style="width:60px;height:60px;border:0">');

      }
    });
};
});
