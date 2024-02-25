import $ from "jquery";
import { redirect, registerMutualExclusion } from "../util";

$("#nav-wrapper").load("/components/nav.html #nav-wrapper", function() {
  registerMutualExclusion(
    "#primary-nav li", 
    document.querySelectorAll("#primary-nav li")
  );
  
  $("#nav-dropdown-button").on("click", function() {
    const nav: JQuery = $("#primary-nav");
    const droppedDown: string | undefined = nav.attr("data-expanded");
    const isExpanded: boolean = (droppedDown === "true");
    nav.attr("data-expanded", String(!isExpanded));
  })
  
  $("#info-dropdown > span").on("click", function () {
    const infoDropdown: JQuery = $("#info-dropdown")
    const expanded: string | undefined = infoDropdown.attr("aria-expanded");
    const isExpanded: boolean = (expanded === "true")
    infoDropdown.attr("aria-expanded", String(!isExpanded))
  });
  
  $("#primary-nav li").on("click", function () {
    if (!$(this).data("ignore-link")) {
      redirect($(this));
    }
  });
});