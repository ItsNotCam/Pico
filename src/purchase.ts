import $ from "jquery";

const optModel = $("#pb-opt-list-model > div");
const optStorage = $("#pb-opt-list-storage > div");

optModel.each(function () {
  $(this).on("click", function () {
    optModel.each(function () {
      $(this).attr("data-selected", "false");
    });
    $(this).attr("data-selected", "true");
  });
});

optStorage.each(function () {
  $(this).on("click", function () {
    optStorage.each(function () {
      $(this).attr("data-selected", "false");
    });
    $(this).attr("data-selected", "true");
  });
});

const clrChoiceChildren: JQuery<HTMLElement> = $("#color-choice").children();

const clrLight: JQuery = $("#pb-color-option-light");
const clrDark: JQuery = $("#pb-color-option-dark");
const clrTxtDark: JQuery<HTMLElement> = clrChoiceChildren.first();
const clrTxtLight: JQuery<HTMLElement> = clrChoiceChildren.last();

clrLight.on("click", () => {
  $(clrLight).attr("data-selected", "true");
  $(clrDark).attr("data-selected", "false");

  clrTxtLight.css("opacity", "1");
  clrTxtDark.css("opacity", "0");
});

clrDark.on("click", () => {
  $(clrLight).attr("data-selected", "false");
  $(clrDark).attr("data-selected", "true");

  clrTxtDark.css("opacity", "1");
  clrTxtLight.css("opacity", "0");
});
