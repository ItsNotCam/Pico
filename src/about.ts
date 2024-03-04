import $ from "jquery";
import { redirect, registerMutualExclusions } from "./util";

$("#about-ham").on("click", function () {
  const isFoldedOut: boolean = $("#about-nav .foldout").attr("aria-expanded") === "true";
  $("#about-nav .foldout").attr("aria-expanded", String(!isFoldedOut));

  setTimeout(
    () => {
      $("#about-ham").attr("aria-expanded", String(!isFoldedOut));
    },
    isFoldedOut ? 150 : 400
  );

  $("#about-nav").attr("aria-expanded", String(!isFoldedOut));
});

registerMutualExclusions("#nav-list", document.querySelectorAll("#nav-list"));

$("#primary-nav li").on("click", function () {
  if (!$(this).data("ignore-link")) {
    const link = $(this).data("link");
    const location = window.location.pathname.replace("/", "");
    if (link !== location) {
      redirect($(this));
    }
  }
});
