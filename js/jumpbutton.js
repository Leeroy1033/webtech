// Heavyily influenced by https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

// assign jumpbutton
var jumpButton = document.getElementById("jumpButton");

// show button when user scrolls doown 20 points from top 
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    jumpButton.style.display = "block";
  } else {
    jumpButton.style.display = "none";
  }
};

// when the user clicks the jumpbutton, scroll to the top of the page
jumpButton.onclick = function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};