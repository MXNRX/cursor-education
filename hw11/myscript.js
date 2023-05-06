$("#change_theme_btn").click(function() {
  console.log("button clicked");
  $("body").toggleClass("dark-theme");
  $("svg").toggleClass("invert");
});