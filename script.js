$(document).ready(function() {
  // listen for save button clicks
  $(".saveBtn").on("click", function() {
    // get nearby values
    var textContent = $("input").val().trim();
    var name = $(this).parent().attr("id");

    // save in localStorage
    localStorage.setItem(name, textContent);
  });

  var htmlContents = document.documentElement.innerHTML;
localStorage.setItem('myHomePage', JSON.stringify(htmlContents ));

localStorage.getItem('myHomePage');

  
  // load any saved data from localStorage
   $("first").val(localStorage.getItem("first"));
   // $("first.description").val(localStorage.getItem("first"));
  // JSON.parse(window.localStorage.getItem('first'));


