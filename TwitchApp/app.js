var app = angular.module('TwitchAPIApp', []);
app.controller('twitchController', function($scope, twitchAPIService, twitchAPIService2) {
  $scope.nameFilter = null;
  $scope.onlineUsernameList = [];
  $scope.offlineUsernameList = [];
  var usernames = ["freecodecamp", "storbeck", "terakilobyte", "habathcx",
  "RobotCaleb","comster404","brunofin","thomasballinger","noobs2ninjas",
  "beohoff", "medrybw"];
  for(profileName in usernames){

  twitchAPIService.getChannelInfo(usernames[profileName]).success(function(response){
    console.log(response);
    var profileURL = response._links.channel;
    twitchAPIService2.getUserInfo(profileURL).success(function(response2){
      console.log(response2);
      var display_name = response2.display_name;
      var logo = response2.logo;
      var channelURL = response2.url;

    // User is offline
    if(response.stream === null){
      var userObj = {display_name: display_name, logo: logo};
      $scope.offlineUsernameList.push(userObj);
    }
    // User is online
    else{
      var status = response.stream.status;
      var userObj = {display_name: display_name, logo: logo, channelURL: channelURL, status: status};
      $scope.onlineUsernameList.push(userObj);
    }
    $scope.searchFilter = function (username) {
      var keyword = new RegExp($scope.nameFilter, 'i');
      return !$scope.nameFilter || keyword.test(username.display_name);
    };
  });
});
};
});
app.factory('twitchAPIService', function($http){
  var twitchAPI = {};
  twitchAPI.getChannelInfo = function(profileName){
    console.log('profileName: ' + profileName);
    return $http({
      method: 'JSONP',
      url: 'https://api.twitch.tv/kraken/streams/' + profileName + '.json?callback=JSON_CALLBACK'
    });
  }
  return twitchAPI;
});
app.factory('twitchAPIService2', function($http){
  var twitchAPI = {};
  twitchAPI.getUserInfo = function(newURL){
    return $http({
      method: 'JSONP',
      url: newURL + '.json?callback=JSON_CALLBACK'
    });
  }
  return twitchAPI;
});
