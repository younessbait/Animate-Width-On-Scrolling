let spans = document.querySelectorAll("span");
let section = document.querySelector("section");
window.onscroll = function () {
  if (window.scrollY > section.offsetTop - 100) {
    spans.forEach((span) => [(span.style.width = span.dataset.width)]);
  }
};
