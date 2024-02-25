import $ from "jquery";
import { redirect, registerMutualExclusion } from "../util";

$("#nav-wrapper").load("/components/nav.html #nav-wrapper", function () {
  registerMutualExclusion(
    "#primary-nav li",
    document.querySelectorAll("#primary-nav li")
  );

  $("#nav-dropdown-button").on("click", function () {
    const nav: JQuery = $("#primary-nav");
    const droppedDown: string | undefined = nav.attr("data-expanded");
    const isExpanded: boolean = droppedDown === "true";
    nav.attr("data-expanded", String(!isExpanded));
  });

  $("#info-dropdown > span").on("click", function () {
    const infoDropdown: JQuery = $("#info-dropdown");
    const expanded: string | undefined = infoDropdown.attr("aria-expanded");
    const isExpanded: boolean = expanded === "true";
    infoDropdown.attr("aria-expanded", String(!isExpanded));
  });

  $("#primary-nav li").each(function () {
    const pageName = $(this).data("link");
    const isSelectedPage = ( pageName === window.location.pathname )
      || ( window.location.pathname === "/" && pageName === "/index.html" );

    if(isSelectedPage) {
      $(this).attr("data-selected", "true");
    } else {
      $(this).attr("data-selected", "false");
    }
  })

  $("#primary-nav li").on("click", function () {
    if (!$(this).data("ignore-link")) {
      redirect($(this));
    }
  });

  // Select the component
  let component = document.querySelector("#info-dropdown");

  // Create a new MutationObserver instance
  let observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "aria-expanded"
      ) {
        const expanded = (mutation.target as unknown as {ariaExpanded: string}).ariaExpanded === "true";
        $("#info-dropdown-items").css({
          "height": expanded ? "10rem" : "0",
          "opacity": expanded ? 1 : 0
        })
      }
    });
  });

  if(component !== null) {
  // Start observing the component for attribute changes
   observer.observe(component, {
      attributes: true, // this is to watch for attribute changes
    });
  }
});
