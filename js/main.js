// Navigation background toggler on scroll
$(function() {
  $(document).on("mousewheel", function() {
    var y = $(document).scrollTop();
    var offset = 100;
    y > offset ? $(".nav").addClass("active") : $(".nav").removeClass("active");
  });
});

$(".toggle").click(function() {
  $("aside").toggleClass("active");
});

const get = async path => {
  const response = await fetch(`../data${path}.json`);
  const json = await response.json();
  return json;
};

get("/products").then(products => {});
