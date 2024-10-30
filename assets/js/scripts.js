var body = document.querySelector("body");
var menuTrigger = document.querySelector("#toggle-main-menu-mobile");
var menuContainer = document.querySelector("#main-menu-mobile");

menuTrigger.onclick = function () {
  menuContainer.classList.toggle("open");
  menuTrigger.classList.toggle("is-active");
  body.classList.toggle("lock-scroll");
};

var header = document.getElementById("stickyHeader");

if (header) {
  var offset = header.offsetTop;
  document.addEventListener("scroll", function () {
    if (window.scrollY > offset) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });
}
