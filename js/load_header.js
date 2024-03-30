// Download jQuery locally or use a local server to access it
// If using CDN, ensure CORS is enabled
$.getScript("https://code.jquery.com/jquery-3.3.1.js", function() {
  $(function() {
    $("#header").load("header.html");
  });
});