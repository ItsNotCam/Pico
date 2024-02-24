import "../styles/globals.css";
import $ from "jquery";

const imgs = [$("#img-number-0"), $("#img-number-1"), $("#img-number-2")];
const selectors = [".hero-btn-container button", "#primary-nav li"];

registerMutualExclusion(
  ".title-wrapper li",
  document.querySelectorAll(".title-wrapper li")
);

registerMutualExclusion(
  ".img-selector",
  document.querySelectorAll(".img-selector")
);

selectors.forEach((selector) => {
  $(selector).on("click", function () {
    if (!$(this).data("ignore-link")) {
      redirect(this);
    }
  });
});

$(".img-selector").on("click", function () {
  const idx = parseInt(this.id.replace("img-select-", ""));
  for (let i = 0; i < imgs.length; i++) {
    if (idx === i) {
      imgs[i].css({ opacity: "43%", transition: "opacity 500ms" });
    } else {
      imgs[i].css({ opacity: 0, transition: "opacity 500ms" });
    }
  }
});

$("#info-dropdown > span").on("click", function () {
  const expanded = $("#info-dropdown").attr("aria-expanded") === "true";
  if (expanded) {
    $("#info-dropdown").attr("aria-expanded", "false");
  } else {
    $("#info-dropdown").attr("aria-expanded", "true");
  }
});

function redirect(item: any): void {
  const link = $(item).data("link");

  if (window.location.pathname === link) {
    return;
  }

  $(function () {
    const $newDiv = $("<div/>", { class: "page-out" });
    $("body").prepend($newDiv);

    setTimeout(() => {
      window.location.assign(link);
    }, 500);
  });
}

function registerMutualExclusion(selector: string, items: any): void {
  $(selector).on("click", function () {
    if($(this).data("ignore-link"))
      return;
    
    $(this).addClass("selected");
    items.forEach((item: any) => {
      if (item !== this) {
        $(item).removeClass("selected");
      }
    });
  });
}
