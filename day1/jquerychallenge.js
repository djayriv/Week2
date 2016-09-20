// JQuery Challenge:
$(function () {
  $(document).ready(function () {
    $("form").submit(function () {
      alert("Submitted");
    });
  });

// You will make a simple jQuery List Application that will take user input and append it to the DOM. Feel free to make it your own. Some examples are:

// - Favorite Bands, Superheroes, etc.
// - Shopping List
// - Ron Swanson Quotes

// Added challenge:
// 1. Take multiple user inputs
// 2. Add a delete button (for each item or a delete all)
// 3. Style it with CSS and/or Bootstrap

// $(function() {
//     $("ul").append("<li> Item 2 </li>");
// }

//$( "#favoriteformat" ).append( $( "#myList li:first" ) );

// $(function(){

// $(".favoriteband").click(function(){
//     $(this).hide().siblings(".edit").show().val($(this).text()).focus();
// });

// $(".edit").focusout(function(){
//     $(this).hide().siblings(".display").show().text($(this).val());
// });