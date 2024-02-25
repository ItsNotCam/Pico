import $ from "jquery";
import { registerMutualExclusions, redirect } from "./util";

const imgs = [
  $("#img-number-0"), 
  $("#img-number-1"), 
  $("#img-number-2")
];

registerMutualExclusions(
  ".img-selector", 
  document.querySelectorAll(".img-selector")
);

$(".hero-btn-container button").on("click", function () {
  if (!$(this).data("ignore-link")) {
    redirect($(this));
  }
});

$(".img-selector").on("click", function () {
  const idx: number = parseInt(this.id.replace("img-select-", ""));
  imgs.forEach((img: JQuery, i: number) => {
    img.css({
      opacity: idx === i ? "43%" : 0,
      transition: "opacity 500ms"
    });
  })
});

