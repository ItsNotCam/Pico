import $ from 'jquery';

// $(".icon-one").on("click", function() {
$(".ham").on("click", function() {
  const isFoldedOut: boolean = $(".foldout").attr("aria-expanded") === "true";
  $(".foldout").attr("aria-expanded", String(!isFoldedOut));

  setTimeout(() => {
    $(".ham").attr("aria-expanded", String(!isFoldedOut));
  }, isFoldedOut ? 150 : 400)

  $(".about-nav").attr("aria-expanded", String(!isFoldedOut));
})