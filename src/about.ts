import $ from 'jquery';
import { redirect, registerMutualExclusions } from './util';

// $(".icon-one").on("click", function() {
$(".ham").on("click", function() {
  const isFoldedOut: boolean = $(".foldout").attr("aria-expanded") === "true";
  $(".foldout").attr("aria-expanded", String(!isFoldedOut));

  setTimeout(() => {
    $(".ham").attr("aria-expanded", String(!isFoldedOut));
  }, isFoldedOut ? 150 : 400)

  $(".about-nav").attr("aria-expanded", String(!isFoldedOut));
})

registerMutualExclusions(
  "#nav-list", 
  document.querySelectorAll("#nav-list")
);

$(".foldout li").on("click", function () {
	if (!$(this).data("ignore-link")) {
		const link = $(this).data("link");
		const location = window.location.pathname.replace("/", "");
		if(link !== location) {
			redirect($(this));
		}
	}
});