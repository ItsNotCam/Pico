"use strict";
// temporary solution until nav and footer are manually merged with final pages
setTimeout(() => {
    $("#info-dropdown > span").on("click", function () {
        const infoDropdown = $("#info-dropdown");
        const expandedStr = infoDropdown.attr("aria-expanded");
        const isExpanded = expandedStr === "true";
        console.log(isExpanded);
        $(function () {
            if (isExpanded) {
                $("body").prepend($("<div/>", { class: "" }));
            }
            else {
                $("body").remove(".nav-darken");
            }
        });
    });
}, 500);
