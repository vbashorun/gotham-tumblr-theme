var mobileMenuButton = document.getElementById("mobileMenuButton");

mobileMenuButton.addEventListener("click", (e) => {
  console.log("click detected", e.currentTarget);

  var masthead = document.getElementsByClassName('masthead')[0];

  masthead.classList.add("masthead-extended");
  masthead.classList.remove("masthead");

  console.log("test: ", masthead.classList);
});


var mastheadArrow = document.getElementById("mastheadArrow");

mastheadArrow.addEventListener("click", () => {
  console.log("click detected");

  var masthead = document.getElementsByClassName('masthead-extended')[0];

  masthead.classList.add("masthead");
  masthead.classList.remove("masthead-extended");

});


var pagesButton = document.getElementById("pagesButton");
pagesButton.addEventListener("click", () => {

  var masthead = document.getElementsByClassName('mobile-menu')[0];

  masthead.classList.add("mobile-menu-extended");
  masthead.classList.remove("mobile-menu");
});



var pagesArrow = document.getElementById("pagesArrow");
pagesArrow.addEventListener("click", () => {

  var masthead = document.getElementsByClassName('mobile-menu-extended')[0];

  masthead.classList.add("mobile-menu");
  masthead.classList.remove("mobile-menu-extended");
});
