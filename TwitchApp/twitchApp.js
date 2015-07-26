$(document).ready(function(){
  var onlineUsers = [];
  var offlineUsers = [];

  var out = "";

  main();

  function main(){
    // Remove all children within "#userProfiles" id
    $("#usernames").empty();
    $("#usernames").add("<p>Toad</p>");
    getAllUsernames();
    //addUsernamesWebsite();

  }

  function getAllUsernames(username){
    var usernames = ["freecodecamp", "storbeck", "terakilobyte", "habathcx",
    "RobotCaleb", "comster404","brunofin","thomasballinger","noobs2ninjas",
    "beohoff"];

    usernames.forEach(getUsername)
    console.log("Ajax Done");
    //$("#usernames").html(out);
    //console.log("out: " + out);
  }

  function getUsername(user){
    $.ajax({
        url:
          "https://api.twitch.tv/kraken/channels/" + user,
        dataType: "jsonp",
        success: function(parsed_json) {
          var username = parsed_json.display_name;
          var status = parsed_json.status; // The status of the user
          var logo = parsed_json.logo;
          var url = parsed_json.url;
          console.log(parsed_json);
          if(status !== null){
            var html = '<a href = + ' + url + '><div class="row userProfiles"><div class="col-sm-3"><img class="logo" alt = "No Profile Pic" src=' + logo + '></div><div class="col-sm-6"><p>'+ username +'</p><p class = "projectText">'+ status + '</p></div><div class="col-sm-3"><span class="glyphicon glyphicon-ok" style="color:green" aria-hidden="true"></span> Online</div></div></a>';
            $("#usernames").prepend(html);
          }
          else{
            var html = '<a href = + ' + url + '><div class="row userProfiles loggedOut"><div class="col-sm-3"><img class="logo" alt = "No Profile Pic" src=' + logo + '></div><div class="col-sm-6"><p>'+ username +'</p></div><div class="col-sm-3"><span class="glyphicon glyphicon-remove	" style="color:red" aria-hidden="true"></span> Offline</div></div></a>'
            $("#usernames").append(html);
          }
          console.log(html);
          //out += html;
        }
      });
    }

  function addUsernamesToHTML(){

  };
})
