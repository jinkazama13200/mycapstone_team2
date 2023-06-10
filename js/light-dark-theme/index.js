// Switch theme
document.getElementById("switchButton").onclick = function () {
  document.getElementById("myMain").classList.toggle("dark");
};

// Scroll Function for Header
window.onscroll = function () {
  scrolltopNav();
};

function scrolltopNav() {
  if (document.documentElement.scrollTop > 50) {
    document.getElementById("myHeader").classList.add("scrollTop");
  } else {
    document.getElementById("myHeader").classList.remove("scrollTop");
  }
}

//search active nav
document.getElementById("searchActive").onclick = function () {
  document.getElementById("myMain").classList.add("nav-search");
};

// search close button in Nav
document.getElementById("searchClose").onclick = function () {
  document.getElementById("myMain").classList.remove("nav-search");
};

// searchbav appear when click nav
document.getElementById("navBar-1").onclick = function () {
  document.getElementById("myHeader").classList.toggle("active");
};
