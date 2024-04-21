import $ from "jquery";


// dynamic image selectors
// bad implementation but it works for this small scale project
const selectors: JQuery<HTMLElement> = $('div[id]').filter(function() {
  const regex = /^img-select-(\d{1,})/;
  return regex.test(this.id);
})
const imgs: JQuery<HTMLElement> = $('*[id]').filter(function() {
  const regex = /^product-image-(\d{1,})/;
  return regex.test(this.id);
});

for(let i = 0; i < selectors.length; i++) {
  $(selectors[i]).on("click", () => {
    for(let j = 0; j < selectors.length; j++) {
      let isSelected = j == i ? "true" : "false";
      $(selectors[j]).attr("data-selected", isSelected);
      $(imgs[j]).attr("data-visible", isSelected);
    }
  });
}

// hard coded image selectors
// const purchaseImgSelectors = [$("#img-select-1"), $("#img-select-2"), $("#img-select-3")];
// const purchaseImgs = [$("#product-image-1"), $("#product-image-2"), $("#product-image-3")]
// for(let i = 0; i < purchaseImgSelectors.length; i++) {
//   purchaseImgSelectors[i].on("click", () => {
//     for(let j = 0; j < purchaseImgSelectors.length; j++) {
//       let isSelected = j === i ? "true" : "false";
//       purchaseImgSelectors[j].attr("data-selected", isSelected);
//       purchaseImgs[j].attr("data-visible", isSelected);
//     }
//   })
// }

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
