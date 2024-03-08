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

enum COLOR {
  LIGHT,
  DARK,
}

var COLOR_STATE: COLOR = COLOR.DARK;

const clrLight: JQuery = $("#pb-color-option-light");
const clrDark: JQuery = $("#pb-color-option-dark");
const clrTxt: JQuery = $("#color-choice");

clrLight.on("click", () => {
  $(clrLight).attr("data-selected", "true");
  $(clrDark).attr("data-selected", "false");

  $(clrTxt).html("light.");
  $(clrTxt).removeClass("clr-1");
  $(clrTxt).removeClass("clr-6");
  $(clrTxt).addClass("clr-1");

  COLOR_STATE = COLOR.LIGHT;
});

clrDark.on("click", () => {
  $(clrLight).attr("data-selected", "false");
  $(clrDark).attr("data-selected", "true");

  $(clrTxt).html("dark.");
  $(clrTxt).removeClass("clr-1");
  $(clrTxt).removeClass("clr-6");
  $(clrTxt).addClass("clr-6");

  COLOR_STATE = COLOR.DARK;
});
