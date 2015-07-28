$(document).ready(function(){
  getAJAX();


  function getAJAX(){
    $.ajax({
        url:
          "http://www.freecodecamp.com/stories/hotStories",
        success: function(parsed_json) {
          for(var elem in parsed_json){
            console.log("yep");
            var username = parsed_json[elem].author.username;
            var picture = parsed_json[elem].author.picture;
            var headline = parsed_json[elem].headline;
            var link = parsed_json[elem].link;
            var comments = parsed_json[elem].comments.length;

            var html =
              '<div class="col-width"><a href="' + link + '" class="thumbnail"><img src="' + picture + '" alt="Article Pic"><div class="caption"><p>' +headline + '</p><p>' + username + '</p><p>Comments: ' + comments + '</p></a></div>';
            console.log(html);
            $('#stories').append(html);
        }
  }
})
}
});
