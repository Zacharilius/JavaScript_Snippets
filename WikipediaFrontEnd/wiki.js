$(document).ready(function(){
  $("#search-input").keypress(function(e){
    if(e.keyCode === 13){
      var query = $("#my-input").val();
      sendSearch(query);
    }
  });

  function sendSearch(query){

    $.ajax({
        type: "GET",
        url: 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=' + query.split(" ").join("%20") + '&callback=JSON_CALLBACK',
        contentType: "application/json; charset=utf-8",
        dataType: "jsonp",
        success: function (parsed_json, textStatus, jqXHR) {
          $('#search-results').empty();
          console.log(parsed_json);
          var pages = parsed_json.query.pages;
          for(page in pages){
            var title = pages[page].title;
            var extract = pages[page].extract;
            var pageid = pages[page].pageid;
            $('#search-results').append("<a href = http://en.wikipedia.org/?curid="+ pageid + "><div><p><b>" + title + ": </b>" + extract + "</p></br></div></a>");

          };
        },

        error: function (errorMessage) {
          $('#search-results').empty();
          $('#search-results').html('<p>Error with your request</p>');

          console.log("ERROR: " + errorMessage);
        }
    });
  }
})
