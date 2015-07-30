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
        url: "http://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch="+ query.split(" ").join("_") + "&callback=?",
//    url: "http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=" + query.split(" ").join("_") + "&callback=?",
        //contentType: "application/json; charset=utf-8",
        //async: false,
        //dataType: "json",
        success: function (parsed_json, textStatus, jqXHR) {
          var wiki_html = parsed_json.parse.text['*'];
          var wiki_div = $('<div></div>').html(wiki_html);
          wiki_div.find('a').each(function(){
            $(this).replaceWith($(this).html());
          });
          wiki_div.find('img').each(function(){
            $(this).replaceWith($(this).html());
          });
          wiki_div.find('sup').remove();
          wiki_div.find('.mw-ext-cite-error').remove();

          $('#search-results').html($(wiki_div).find('p'));
        },
        error: function (errorMessage) {
          console.log("ERROR: " + errorMessage);
        }
    });
  }
})
