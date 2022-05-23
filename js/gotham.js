console.log('script loaded. Also a console test');

var mobileMenuButton = document.getElementById("mobileMenuButton");

mobileMenuButton.addEventListener("click", (e) => {
  var masthead = document.getElementsByClassName('masthead')[0];
  masthead.classList.add("masthead-extended");
});


var mastheadArrow = document.getElementById("mastheadArrow");

mastheadArrow.addEventListener("click", () => {
  var masthead = document.getElementsByClassName('masthead-extended')[0];
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


var iframeList = document.querySelectorAll('html_photoset');
if (iframeList) {
  console.log('iframeList: ', iframeList);
}
