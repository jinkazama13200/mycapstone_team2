// Switch theme
document.getElementById("switchButton").onclick = function () {
  document.getElementById("myMain").classList.toggle("dark");
};

// Scroll Function for Header
window.onscroll = function () {
  myFunction();
};

function myFunction() {
  if (document.documentElement.scrollTop > 50) {
    document.getElementById("myHeader").classList.add("scrollTop");
  } else {
    document.getElementById("myHeader").classList.remove("scrollTop");
  }
}
