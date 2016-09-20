//$(document).ready(function() {
$(function(){

    $("#para").click(function() {
        //$("#para")
        $(this).fadeOut('slow','linear');
    });

    $("h3").css("text-decoration","underline");
        
    $("ul"). find("li:first-child")
        .css("color","red");

});


$(function() {
    $("ul").append("<li> Item 2 </li>");
}

//append adds to the bottom; 
//button id 


<form>
  Favorite Band:<br>
  <input type="text" name="favoriteband"><br>
  Favorite Song:<br>
  <input type="text" name="favoritesong"><br>
  Favorite Style:<br>
  <input type="text" name="favoritestyle"><br>
  Favorite Format:<br>
  <input type="text" name="favoriteformat">
</form>